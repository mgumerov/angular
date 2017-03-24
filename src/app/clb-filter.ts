import { Component, Input } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'CLBFilter',
  template: `
  <div ngbDropdown class="d-inline-block" #myDrop="ngbDropdown">
    <button type="button" class="btn btn-default btn-sm" ngbDropdownToggle>{{title}}</button> 
    <ul class="dropdown-menu">
      <li class="dropdown-item"><a href="#" class="small" tabIndex="-1" (click)="$event.stopPropagation();">Все</a></li>
      <li *ngFor="let item of _items" class="dropdown-item"><a href="#" class="small" tabIndex="-1">
        <input type="checkbox" checked readOnly/>&nbsp;{{item.title}}</a></li>
    </ul>
  </div>
  `
})
export class CLBFilter {
  private _items: Item[];

  @Input()
  set items(items: any) {
    this._items = Object.keys(items).map(key => ({ id: Number(key), title: items[key] }));
  }

  @Input() title: string;

  //constructor(config: NgbDropdownConfig) {
  //  config.autoClose = false;
  //}
}

class Item {
  id: number;
  title: string;
}
