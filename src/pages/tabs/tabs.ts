import { Component } from '@angular/core';

import { ArtistsPage } from '../artists/artists';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ArtistsPage;
  tab3Root = SearchPage;

  constructor() {

  }
}
