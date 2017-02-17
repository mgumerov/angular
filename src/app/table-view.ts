import { Component } from '@angular/core';
import { MockData } from 'mockdata/mock-data'; // "mockdata" is mapped by SystemJS according to its config

@Component({
  selector: 'TableView',
  template: `
<div className="table-responsive">
<table className="table data" id="myTable">
  <thead>
        <tr>
                <td> column.name </td>
        </tr>
  </thead>
  <tbody>
        <tr *ngFor="let item of items">
                <td> {{item.title}}
                </td>
        </tr>
  </tbody>
</table>
</div>
  `
})
export class TableView {
  constructor() {
  let data = MockData;
    this.items = [
      {id: 1, title: "x", price: 1, loadclass: 1, chamfer: true, imgURL: null},
      {id: 2, title: "y", price: 1, loadclass: 1, chamfer: true, imgURL: null}
    ];
  }

  items: Item[];
}

export class Item {
  id: number;
  title: string;
  price: number;
  loadclass: number;
  chamfer: boolean;
  imgURL: string;
}
