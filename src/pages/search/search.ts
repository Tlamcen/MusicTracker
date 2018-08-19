import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import * as $ from "jquery";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  accessToken:string = "";

  constructor(public navCtrl: NavController, private nativeStorage : NativeStorage) {
    this.nativeStorage.getItem('accessToken').then((value) => {
      this.accessToken = value;
    });
  }
  onInput(event)
  {
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
    },(error) => {
      $('#info').html('<p>An error has occurred</p>');
    });
  }
  onCancel(event){
    console.log("onCancel event triggered");
  }
}