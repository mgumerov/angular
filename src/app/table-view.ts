import { Component } from '@angular/core';
import { MockData } from 'mockdata/mock-data'; // "mockdata" is mapped by SystemJS according to its config

@Component({
  selector: 'TableView',
  template: `
<div class="table-responsive">
<table class="table data" id="myTable">
  <thead>
        <tr>
                <td>Название </td>
                <td>Цена</td>
                <td>Класс нагрузки</td>
                <td>Фаска</td>
                <td>Картинка</td>
        </tr>
  </thead>
  <tbody>
        <tr *ngFor="let item of items">
                <td>{{item.title}}</td>
                <td>{{item.price}}</td>
                <td>{{item.loadclass}}</td>
                <td>{{item.chamfer}}</td>
                <td><img src="{{item.imgURL}}"/></td>
        </tr>
  </tbody>
</table>
</div>
  `
})
export class TableView {
  constructor() {
    let payload : any = MockData;
    this.items = payload.page.map((entry : any): Item => ({
        id: entry.id,
        title: entry["Название"],
        price: entry["Цена"],
        loadclass: entry["Класс нагрузки"],
        chamfer: entry["Фаска"],
        imgURL: entry["Картинка"]
    })).slice(1,12);
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
