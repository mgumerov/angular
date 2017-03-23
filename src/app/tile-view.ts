import { Component, Input } from '@angular/core';
import { Item }  from './data';

@Component({
  selector: 'TileView',
  template: `
        <div class="row" id="myTiles">
            <div *ngFor="let item of items" class="col-sm-4 col-md-3 col-lg-2">
                <div class="thumbnail"><img src={{item.imgURL}}/></div>
                <div class="caption text-center">{{item.title}}</div>
                <p>Цена: Цена</p><p>Класс нагрузки: {{item.loadclass}}</p><p>Фаска: {{item.chamfer}}</p>
            </div>
        </div>
  `
})
export class TileView {
  @Input() items: Item[];
}
