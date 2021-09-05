import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
	title: string;
	mode: string;
	banner: any = {};

	imageChangedEvent: any = '';
	croppedImage: any = '';
	constructor(
		public dialogRef: MatDialogRef<AddComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit(): void {
		if (this.data && this.data.banner) {
			this.banner = this.data.banner;
			this.title = 'Update banner';
			this.mode = 'Update';
		} else {
			this.title = 'Add banner';
			this.mode = 'Add';
		}
	}

	fileChangeEvent(event: any): void {
		this.imageChangedEvent = event;
		this.banner.image = '';
	}
	imageCropped(event: ImageCroppedEvent) {
		this.banner.image = event.base64;
		this.banner.image_url = event.base64;
	}

	imageChanged() {
		this.banner.image = '';
	}

	onSubmit() {
		this.dialogRef.close({ banner: this.banner, isEdit: false });
	}
}
