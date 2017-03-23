import { Component, OnInit, Injectable, Inject, ViewContainerRef, Input, Directive, ReflectiveInjector, ComponentFactoryResolver, Injector, SimpleChanges, Provider } from '@angular/core';
import { TableView }  from './table-view';
import { DataProvider, Item, Presenter }  from './data';
import { CLBFilter } from './clb-filter';

//Has to declare it before the client component (or in separate file), this has something to do with DI probably, did not waste time to investigate
@Component({
  selector: 'presenter', template: '{{presenter.getName()}}'
})
export class PresenterBody {
  constructor(public viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector) {
  }
  @Input() items: Item[];
  @Input() presenter: Presenter;

  ngOnInit() {
    if (!this.presenter.getComponent()) return;
    let _this = this;
    let provider : Provider = { provide: "items",  useFactory: alert, deps: [] }; //() => {alert("this.items"); return "_this.items";}
    let injector = ReflectiveInjector.fromResolvedProviders(ReflectiveInjector.resolve([
        provider]),
        this.injector);
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.presenter.getComponent());
    this.viewContainerRef.createComponent(componentFactory, undefined, injector);
  }

  ngOnChanges(changes: SimpleChanges) {
//console.log(this.items);
//console.log(this.presenter);
  }
}

@Component({
  selector: 'Workspace',
  template: `
<div>
<div className="form-inline">
  <div className="form-group">
  Фильтры:
  </div>
  <CLBFilter [title]="'Класс нагрузки'" [items]='[ {"31":31, "32":32, "33":33, "34":34} ]'></CLBFilter>
</div>

<p className="debug" id="urldebug"></p>

<presenter ng-if="true" *ngFor="let presenter of presenters" [presenter]="presenter" [items]="data"></presenter>
<!--TableView ng-if="true" [items]="data"></TableView-->

<div className="col-md-12 text-center">
<ul className="pagination pull-left">
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
  }

  data : Item[];

  ngOnInit() {
    this.provider.query(1, 12)
         .then((result : Item[]) => (this.data = result),
               (error : any) => console.error(error));
  }
}
