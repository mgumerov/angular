import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Workspace }  from './workspace';
import { TableView }  from './table-view';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ Workspace, TableView ],
  bootstrap:    [ Workspace ]
})
export class MainModule { }
