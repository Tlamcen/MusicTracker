import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lastReleases:Array<Object> = [];

  constructor(public navCtrl: NavController, private nativeStorage : NativeStorage) {
    var arrayTest =
    [
      {
          "artistName" : "Falling In Reverse",
          "releaseName" : "Losing My Mind",
          "releaseType" : "Single",
          "releaseDate" : "21/07/18"
      },
      {
        "artistName" : "Bury Tomorrow",
        "releaseName" : "Black Flame",
        "releaseType" : "LP",
        "releaseDate" : "28/07/18"
      }
    ];
    this.nativeStorage.setItem('releases', JSON.stringify(arrayTest));
    this.nativeStorage.getItem('releases').then((value) => {
      var lastReleases : Array<Object> = JSON.parse(value);
      this.lastReleases = lastReleases;
    });
  }

}
