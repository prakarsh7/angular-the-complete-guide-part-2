// main.ts is executed first

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule) // this starts angular app by passing the AppModule
  .catch(err => console.error(err));
