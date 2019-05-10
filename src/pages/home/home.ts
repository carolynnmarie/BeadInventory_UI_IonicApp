import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
//import { BeadsProvider, FindingsProvider, StringWireProvider } from '../../providers';

interface PageItem {
  title: string
  component: any
}
type PageList = PageItem[];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public pages: PageList;
  public displayPages: PageList;

  public beads: Observable<any>;
  public findings: Observable<any>;
  public stringMaterials: Observable<any>;

  beadStrings: string;
  findingString: string;
  stringingMaterialsString: string;

  constructor(public navCtrl: NavController) {
    this.pages = [{title: 'Store Lists', component:'StoreListsPage'},
                  {title: 'Search Beads', component:'SearchBeadPage'},
                  {title: 'Search Findings', component: 'SearchFindingPage'},
                  {title: 'Search Stringing Materials', component: 'SearchStringingMaterialsPage'}];
    this.displayPages = [{title: 'Display Beads', component: 'SearchResultsBeadsPage'},
                      {title: 'Display Findings', component: 'SearchResultsFindingsPage'},
                      {title: 'Display Stringing Materials', component: 'SearchResultsStringingMaterialsPage'}];
  }

  ionViewDidLoad(){
  }


  openPage(page: PageItem) {
    this.navCtrl.push(page.component);
  }

  beadDisplay():string{
    let bString: string;
    this.beads.forEach(bead => 
      {bString += "Bead: material: " +  bead.material + ", description: " + bead.description + "\n"});
    return bString;
}

  findingDisplay():string{
    let fString: string;
    this.findings.subscribe(findings => findings.forEach(finding => 
      {fString += "Finding: category: " + finding.category + ", description: " + finding.description + "\n"}));
    return fString;
    }

  stringMaterialDisplay():string{
    let sMString: string;
    this.stringMaterials.subscribe(stringingMaterials => stringingMaterials.forEach(sMaterial =>
    {sMString += "Stringing Material: category: " + sMaterial.stringWireCategory + ", description: " +
      sMaterial.description + "\n"}));
    return sMString;
  }
  
}
