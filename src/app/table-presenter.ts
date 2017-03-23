import { Injectable } from '@angular/core';
import { Presenter }  from './data';
import { TableView }  from './table-view';

@Injectable()
export class TablePresenter extends Presenter {
  getName(): string { return "TablePresenter"; }
}
