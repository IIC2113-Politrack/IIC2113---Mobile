import { Component } from '@angular/core';

import { OrganizationsPage } from '../organizations/organizations';
import { ProposalsPage } from '../proposals/proposals';
import { PoliticiansPage } from '../politicians/politicians';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProposalsPage;
  tab2Root = PoliticiansPage;
  tab3Root = OrganizationsPage;

  constructor() {

  }
}
