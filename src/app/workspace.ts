import { Component, OnInit, Injectable, Inject, ViewContainerRef, Input, Directive, ReflectiveInjector, ComponentFactoryResolver, Injector, SimpleChanges, Provider } from '@angular/core';
import { TileView }  from './tile-view';
import { TableView }  from './table-view';
import { DataProvider, Item, Presenter }  from './data';
import { CLBFilter } from './clb-filter';

@Component({
  selector: 'Workspace',
  template: `
<div>
<div class="form-inline">
  <div class="form-group">
  Фильтры:
  </div>
  <CLBFilter [title]="'Класс нагрузки'" [items]='[ {"31":31, "32":32, "33":33, "34":34} ]'></CLBFilter>
</div>

<p class="debug" id="urldebug"></p>

<TableView *ngIf="presenter.getName() == 'TablePresenter'" [items]="data"></TableView>
<TileView *ngIf="presenter.getName() == 'TilePresenter'" [items]="data"></TileView>

<div class="col-md-12 text-center">
<ul class="pagination pull-left">
    <li class="page-item view-mode" *ngFor="let presenter of presenters"><a class="page-link" href = "#">{{presenter.getName()}}</a></li>
</ul>

<!--Pagination thisPage={this.state.page} lastPage={this.state.pageCnt} onClick={this.onPagerClick}/-->

</div>

</div>
  `
})
@Injectable()
export class Workspace implements OnInit {
  constructor(private provider: DataProvider, @Inject(Presenter) private presenters: Presenter[]) {
    this.presenter = presenters[1];
  }

  data : Item[];
  presenter : Presenter;

  ngOnInit() {
    this.provider.query(1, 12)
         .then((result : Item[]) => (this.data = result),
               (error : any) => console.error(error));
  }
}
