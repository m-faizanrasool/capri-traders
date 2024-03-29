import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './modules/auth/_services/auth.service';
import { environment } from 'src/environments/environment';
// Highlight JS
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { SplashScreenModule } from './_metronic/partials/layout/splash-screen/splash-screen.module';
import { InterceptService } from './_metronic/core/services/intercept.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


function appInitializer(authService: AuthService) {
	return () => {
		return new Promise((resolve) => {
			authService.getUserByToken().subscribe().add(resolve);
		});
	};
}

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatSnackBarModule,
		SplashScreenModule,
		TranslateModule.forRoot(),
		HttpClientModule,
		HighlightModule,
		ClipboardModule,
		AppRoutingModule,
		InlineSVGModule.forRoot(),
		NgbModule,
	],
	providers: [
		{
			provide: APP_INITIALIZER,
			useFactory: appInitializer,
			multi: true,
			deps: [AuthService],
		},
		InterceptService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: InterceptService,
			multi: true,
		},
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		{
			provide: HIGHLIGHT_OPTIONS,
			useValue: {
				coreLibraryLoader: () => import('highlight.js/lib/core'),
				languages: {
					xml: () => import('highlight.js/lib/languages/xml'),
					typescript: () => import('highlight.js/lib/languages/typescript'),
					scss: () => import('highlight.js/lib/languages/scss'),
					json: () => import('highlight.js/lib/languages/json'),
				},
			},
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
