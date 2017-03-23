import { Injectable } from '@angular/core';
import { Presenter }  from './data';

@Injectable()
export class TilePresenter extends Presenter {
  getName(): string { return "TilePresenter"; }
  getComponent(): any { return null; }
}

