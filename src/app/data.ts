import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'; //toPromise()

@Injectable()
export class DataProvider {
  constructor(private http: Http) {}

  query(start: number, end: number) : Promise<Item[]> {
    return this.http.get('mock-data.json')
      .toPromise()
      .then(
        result => {
          let data = result.json().page.slice(start, end);
          return data.map((entry: any): Item => ({
                    id: entry.id,
                    title: entry["Название"],
                    price: entry["Цена"],
                    loadclass: entry["Класс нагрузки"],
                    chamfer: entry["Фаска"],
                    imgURL: entry["Картинка"]
                }));
        },
        error => console.error(error)
      );
  }
}

export class Item {
  id: number;
  title: string;
  price: number;
  loadclass: number;
  chamfer: boolean;
  imgURL: string;
}

export abstract class Presenter {
  abstract getName(): string;
  abstract getComponent(): any;
}

