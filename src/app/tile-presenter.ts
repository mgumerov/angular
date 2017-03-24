import { Injectable } from '@angular/core';
import { Presenter }  from './data';

@Injectable()
export class TilePresenter extends Presenter {
  getName(): string { return "TilePresenter"; }
  getGlyphName(): string { return "glyphicon-th"; }
}

