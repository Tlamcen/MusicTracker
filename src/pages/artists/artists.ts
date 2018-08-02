import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-artists',
  templateUrl: 'artists.html'
})
export class ArtistsPage {

  artists:Array<string> = [];

  constructor(public navCtrl: NavController, private nativeStorage : NativeStorage) {

    this.nativeStorage.getItem('artists').then((value) => {
      var artists : Array<string> = JSON.parse(value);
      this.artists = artists;
    },(error) => {
      console.log("There is no artists value in storage or plugin is not loaded");
    });
  }

}
