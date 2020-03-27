import {Component, OnInit, Output, EventEmitter, Input, Inject} from '@angular/core';
import {Content} from '../content-card/content-card-helper';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    newContentItem: Content;
}

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

    @Input() startingId; // made it dynamic so it's based on the current length of the band list
    @Output() newContentEvent = new EventEmitter<Content>();
    newContentItem: Content;
    currentId: number;
  constructor(public dialog: MatDialog) {
      this.resetNewContentItem();
  }

  ngOnInit() {
    this.currentId = this.startingId;
  }
    resetNewContentItem() {
        this.newContentItem = {
            title: '',
            author: '',
            body: '',
            type: '',
            imgUrl: '',
            tags: []
        };
    }
    addContent(): void {
        this.newContentEvent.emit(this.newContentItem);
        this.resetNewContentItem();
    }

    openDialog() {
        const dialogRef = this.dialog.open(CreateContentDialogComponent, {
            width: '350px',
            data: {newContentItem: this.newContentItem}
        });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        this.newContentItem = result;
        this.addContent();
    });
}
}

@Component({
    selector: 'create-content-dialog',
    templateUrl: './create-content-dialog.component.html',
})
export class CreateContentDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<CreateContentDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
