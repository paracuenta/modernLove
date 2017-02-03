import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { CouplePage } from '../pages/couple/couple';
import { GroupPage } from '../pages/group/group';
import { MainPage } from '../pages/main/main';
import { SettingsPage } from '../pages/settings/settings';
import { SinglePage } from '../pages/single/single';
import { TrioPage } from '../pages/trio/trio';
import { SlidesPage } from '../pages/slides/slides';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { Http } from '@angular/http';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CouplePage,
    GroupPage,
    MainPage,
    SettingsPage,
    SinglePage,
    TrioPage,
    SlidesPage
  ],
  imports: [
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CouplePage,
    GroupPage,
    MainPage,
    SettingsPage,
    SinglePage,
    TrioPage,
    SlidesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
