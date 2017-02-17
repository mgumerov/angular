import { Component } from '@angular/core';
import { TableView }  from './table-view';

@Component({
  selector: 'Workspace',
  template: `
    <TableView ng-if="true"></TableView><!--items=items-->
  `
})
export class Workspace { /*init*/ }
