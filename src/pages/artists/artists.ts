import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-artists',
  templateUrl: 'artists.html'
})
export class ArtistsPage {

  artistsFollowed:Array<string> = [];

  constructor(public navCtrl: NavController, private nativeStorage : NativeStorage) {

    this.nativeStorage.getItem('artistsFollowed').then((value) => {
      this.artistsFollowed = JSON.parse(value);
    },(error) => {
      console.log("There is no artistsFollowed value in storage or plugin is not loaded");
    });
  }

  //TODO : Add ion-refresher to be able to refresh artistsFollowed list

}
