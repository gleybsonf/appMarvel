import { Component, Input, OnInit } from '@angular/core';
/* import { MatDialogRef } from '@angular/material/dialog'; */

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() character: any;

  constructor(/* public dialogRef: MatDialogRef<DetailComponent>, */) { }

  ngOnInit(): void {
    /* console.log("dialogRef", this.dialogRef); */
  }

  /* cancel(): void {
    this.dialogRef.close();
  } */

}
