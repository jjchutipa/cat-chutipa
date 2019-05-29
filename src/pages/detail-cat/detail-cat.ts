import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailCatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-detail-cat',
  templateUrl: 'detail-cat.html',
})
export class DetailCatPage {

  private catData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.catData = navParams.get('cat');
    console.log('this.catData',this.catData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailCatPage');
  }

}
