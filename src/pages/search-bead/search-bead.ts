import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeadsProvider } from '../../providers';
import { Materials } from '../../EnumMaterial';
import { Observable } from 'rxjs';
import { PageItem } from '../search/search';


@IonicPage()
@Component({
  selector: 'page-search-bead',
  templateUrl: 'search-bead.html',
})
export class SearchBeadPage {

  page: PageItem;
  beads: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public beadProvider: BeadsProvider ) {
      this.page = {title: "Bead Search Result Page", component: "SearchResultBeadPage"};
  }
  
  ionViewDidLoad() {
  }

  initializeBeads(){
    this.beadProvider.getAll().subscribe(beads => {this.beads = beads;});
  }

  searchMaterials(material: Materials){
    this.beadProvider.getAllOfMaterial(material).subscribe(beads => {this.beads = beads;});
  }



}
