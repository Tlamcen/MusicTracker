import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-artists',
  templateUrl: 'artists.html'
})
export class ArtistsPage {

  artistsFollowed:Array<any> = [];

  constructor(public navCtrl: NavController, private nativeStorage : NativeStorage) {

    this.nativeStorage.getItem('artistsFollowed').then((value) => {
      this.artistsFollowed = JSON.parse(value);
    },(error) => {
      console.log("There is no artistsFollowed value in storage or plugin is not loaded");
    });
  }

  isArtistFollowed(artistID)
  {
    for(let i=0; i<this.artistsFollowed.length; i++)
    {
      if(this.artistsFollowed[i].id && this.artistsFollowed[i].id === artistID)
      {
        return i;
      }
    }
    return -1;
  }

  //TODO : Add ion-refresher to be able to refresh artistsFollowed list

}
