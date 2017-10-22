import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { OrganizationsPage } from '../pages/organizations/organizations';
import { ProposalsPage } from '../pages/proposals/proposals';
import { PoliticiansPage } from '../pages/politicians/politicians';
import { TabsPage } from '../pages/tabs/tabs';
import { PoliticianPage } from '../pages/politician/politician';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    OrganizationsPage,
    ProposalsPage,
    PoliticiansPage,
    TabsPage,
    PoliticianPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrganizationsPage,
    ProposalsPage,
    PoliticiansPage,
    TabsPage,
    PoliticianPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
