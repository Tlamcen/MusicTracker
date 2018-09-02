import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import * as $ from "jquery";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  accessToken : string = "";
  artistsQueryResult : Object = {};

  constructor(public navCtrl: NavController, private nativeStorage : NativeStorage) {
    this.nativeStorage.getItem('accessToken').then((value) => {
      this.accessToken = value;
    });
  }

  onInput(event)
  {
    if(event.target.value){
      console.log("onInput event triggered");
      $.ajax({
        method:"GET",
        headers: {
          "Authorization": this.accessToken,
          "Content-Type":"application/json",
        },
        url: "https://api.spotify.com/v1/search",
        dataType : "json",
        data: {
          q : "*" + event.target.value + "*",
          type : "artist"
        }
      }).then((data) => {
        console.log("Search completed ! " + data);
        this.FillArtistsPageWithResults(data);
      },(error) => {
        $('#info').html('<p>An error has occurred</p>');
      });
    }
    else
    {
      this.artistsQueryResult = {};
    }
  }

  onCancel(event){
    console.log("onCancel event triggered");
  }

  FillArtistsPageWithResults(data)
  {
    if(data && data.artists && data.artists.items.length > 0)
    {
      this.artistsQueryResult = data;
    }
    else
    {
      this.artistsQueryResult = {};
    }
  }
}