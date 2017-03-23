import { Component, Input } from '@angular/core';

@Component({
  selector: 'CLBFilter',
  template: `
  <div class="form-group dropdown ">
    <button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown">{{title}}<span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="#" class="small" tabIndex="-1">Все</a></li>
        <li *ngFor="let item of items"><a href="#" class="small" tabIndex="-1">
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
}

class Item {
  id: number;
  title: string;
}
