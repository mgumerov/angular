import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule }             from 'app/main-module';
import { MockData }               from 'mockdata/mock-data'; // "mockdata" is mapped by SystemJS and TypeScript according to their configs

platformBrowserDynamic().bootstrapModule(MainModule);