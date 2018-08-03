import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import * as $ from "jquery";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lastReleases:Array<Object> = [];

  constructor(public navCtrl: NavController, private nativeStorage : NativeStorage) {

    this.getSpotifyAccessToken();
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

  getSpotifyAccessToken()
  {
    var client_id = "d9525608aeaf4de7bc7429483d04335d";
    var client_secret = "1c2ca9c8e8bc47afb6209d19f6ea43cd";
    var authorizationHeaderBase64 = btoa(client_id + ":" + client_secret);
    debugger;
    /*$.ajax({
      method:"POST",
      headers: {
        "Authorization": "Basic " + authorizationHeaderBase64,
        "Content-Type":"application/x-www-form-urlencoded",
      },
      url: "https://accounts.spotify.com/api/token",
      dataType : "json",
      data: {
        client_id:"d9525608aeaf4de7bc7429483d04335d",
        client_secret:"1c2ca9c8e8bc47afb6209d19f6ea43cd",
        grant_type:"client_credentials",
      },
      error: function() {
        $('#info').html('<p>An error has occurred</p>');
      },
      success: function(data){
        console.log("Great ! " + JSON.stringify(data));
        this.nativeStorage.setItem('accessToken', data.token_type + " " + data.access_token)
      }
    });*/
    $.ajax({
      method:"POST",
      headers: {
        "Authorization": "Basic " + authorizationHeaderBase64,
        "Content-Type":"application/x-www-form-urlencoded",
      },
      url: "https://accounts.spotify.com/api/token",
      dataType : "json",
      data: {
        client_id:"d9525608aeaf4de7bc7429483d04335d",
        client_secret:"1c2ca9c8e8bc47afb6209d19f6ea43cd",
        grant_type:"client_credentials",
      }
    }).then((data) => {
      console.log("Great ! " + JSON.stringify(data));
        this.nativeStorage.setItem('accessToken', data.token_type + " " + data.access_token);
    },(error) => {
      $('#info').html('<p>An error has occurred</p>');
    });
  }
}
