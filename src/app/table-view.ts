import { Component, Input } from '@angular/core';
import { Item }  from './data';

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
  @Input() items: Item[];
}
