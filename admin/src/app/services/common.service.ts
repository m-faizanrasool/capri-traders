import { Injectable } from '@angular/core';
import {
	MatSnackBar,
	MatSnackBarHorizontalPosition,
	MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root',
})
export class CommonService {
	constructor(private snackBar: MatSnackBar) {}

	openSnackBar(
		message,
		timeDuration = 1000,
		horizontal: MatSnackBarHorizontalPosition = 'right',
		vertical: MatSnackBarVerticalPosition = 'top'
	) {
		this.snackBar.open(message, '', {
			duration: timeDuration,
			horizontalPosition: horizontal,
			verticalPosition: vertical,
		});
	}
}
