import { Component, Input, OnInit } from '@angular/core';

// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() character: any;

  constructor(/* public dialog: MatDialog */) { }

  ngOnInit(): void {
  }

  /* openDialog(): void {
    const dialogRef = this.dialog.open(DetailComponent, {
      //width: '250px',
      minHeight: '250px',
      minWidth: '600px',
      data: {name: this.character.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  } */

  operacao: string = "";
  detalhar(){
    this.operacao = "detalhar";
  }

}
