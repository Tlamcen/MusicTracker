import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from "jquery";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  constructor(public navCtrl: NavController) {

    //Ajax Query

    /*$.ajax({
      url: "http://ws.audioscrobbler.com/2.0/",
      method: "GET",
      data: {
        method:"artist.getinfo",
        artist:"Cher",
        format:"json",
        api_key:"2a303e8f8744fc9fa899b12d331a7146"
      },
      error: function() {
        $('#info').html('<p>An error has occurred</p>');
      },
      dataType: 'jsonp',
      success: function(data){
        console.log("Great ! " + JSON.stringify(data));
      }, 
      type:'GET'
    });*/




  }

}