import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { Keyboard } from '@ionic-native/keyboard';

import { OrganizationsPage } from '../pages/organizations/organizations';
import { ProposalsPage } from '../pages/proposals/proposals';
import { PoliticiansPage } from '../pages/politicians/politicians';
import { NewEvidencePage } from '../pages/new-evidence/new-evidence';
import { TabsPage } from '../pages/tabs/tabs';
import { PoliticianPage } from '../pages/politician/politician';
import { EvidencesPage } from '../pages/evidences/evidences';

import { NewEvidenceComponent } from '../components/new-evidence/new-evidence';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    OrganizationsPage,
    ProposalsPage,
    PoliticiansPage,
    TabsPage,
    PoliticianPage,
    EvidencesPage,
    NewEvidenceComponent,
    NewEvidencePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrganizationsPage,
    ProposalsPage,
    PoliticiansPage,
    TabsPage,
    PoliticianPage,
    EvidencesPage,
    NewEvidenceComponent,
    NewEvidencePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    Camera,
    Keyboard
  ]
})
export class AppModule {}
