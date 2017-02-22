import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; //carries provider for Http
import { Workspace }  from './workspace';
import { TableView }  from './table-view';
import { DataProvider }  from './data';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ Workspace, TableView ],
  providers:    [ DataProvider ], //the word "provider" in the class name has nothing to do with Angular providers :)
  bootstrap:    [ Workspace ]
})
export class MainModule { }
