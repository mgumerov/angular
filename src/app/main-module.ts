import { Injectable } from '@angular/core';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; //carries provider for Http
import { Workspace }  from './workspace';
import { TableView }  from './table-view';
import { TileView }  from './tile-view';
import { DataProvider }  from './data';
import { Presenter }  from './data';
import { TilePresenter }  from './tile-presenter';
import { TablePresenter }  from './table-presenter';
import { CLBFilter }  from './clb-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ BrowserModule, HttpModule, NgbModule.forRoot() ],
  declarations: [ Workspace, TableView, CLBFilter, TileView ],
  entryComponents: [TableView], //components created directly by their class, not through selector in other component's template
  providers:    [ 
    { provide: Presenter, useClass: TablePresenter, multi: true },
    { provide: Presenter, useClass: TilePresenter, multi: true },
    DataProvider //the word "provider" in the class name has nothing to do with Angular providers :)
  ], 
  bootstrap:    [ Workspace ]
})
export class MainModule { }
