import { MockData } from 'mockdata/mock-data'; // "mockdata" is mapped by SystemJS according to its config

class DataProvider {
  query(start: number, end: number) : Item[] {
    let data = MockData.page.slice(start, end);
    return data.map((entry: any): Item => ({
        id: entry.id,
        title: entry["Название"],
        price: entry["Цена"],
        loadclass: entry["Класс нагрузки"],
        chamfer: entry["Фаска"],
        imgURL: entry["Картинка"]
    }));
  }
}

export const provider : DataProvider = new DataProvider();

export class Item {
  id: number;
  title: string;
  price: number;
  loadclass: number;
  chamfer: boolean;
  imgURL: string;
}
