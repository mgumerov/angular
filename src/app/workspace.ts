import { Component, OnInit, Injectable } from '@angular/core';
import { TableView }  from './table-view';
import { DataProvider, Item }  from './data';

@Component({
  selector: 'Workspace',
  template: `
    <TableView ng-if="true" [items]="data"></TableView>
  `
})
@Injectable()
export class Workspace implements OnInit {
  constructor(private provider: DataProvider) {}

  data : Item[];

  ngOnInit() {
    this.provider.query(1, 12)
         .then((result : Item[]) => (this.data = result),
               (error : any) => console.error(error));
  }
}
