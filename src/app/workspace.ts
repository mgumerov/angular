import { Component } from '@angular/core';
import { TableView }  from './table-view';
import { MockData } from 'mockdata/mock-data'; // "mockdata" is mapped by SystemJS according to its config
import { provider, Item }  from './data';

@Component({
  selector: 'Workspace',
  template: `
    <TableView ng-if="true" [items]="data"></TableView>
  `
})
export class Workspace {
  data : Item[] = provider.query(1, 12);
}
