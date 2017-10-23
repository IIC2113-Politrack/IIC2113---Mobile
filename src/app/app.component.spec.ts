import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { OrganizationsPage } from '../pages/organizations/organizations';
import { ProposalsPage } from '../pages/proposals/proposals';
import { PoliticiansPage } from '../pages/politicians/politicians';


import { MyApp } from './app.component';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../test-config/mocks-ionic';

describe('MyApp Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp)
      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof MyApp).toBe(true);
  });

  it('should have TabsPage as rootPage', () => {
    expect(component.rootPage).toBe(TabsPage);
  });

  it('should have ProposalsPage as first tab', () => {
    expect(component.tabs[0]).toBe(ProposalsPage);
  });

  it('should have PoliticiansPage as second tab', () => {
    expect(component.tabs[1]).toBe(PoliticiansPage);
  });

  it('should have OrganizationsPage as third tab', () => {
    expect(component.tabs[2]).toBe(OrganizationsPage);
  });

  it('should have three tabs', () => {
    expect(component.tabs.length).toBe(3);
  });




});
