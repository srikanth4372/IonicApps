import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the ServicesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {

  services: Array<{ title: string, description: string, functionalities: string, benfits: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.services = [
      { title: 'BPM - Unified platform to drive innovation and agility', description: 'In todays business landscape composed of fragmented business processes, multiple applications and emergence of new technologies like IOT (internet of things), combined with advanced analytics, organizations have realized the importance of adopting an efficient and automated digital approach.', functionalities: 'Business Process Improvement,Business Activity Monitoring (BAM),Business Rules Management system (BRMS)', benfits: 'Increased responsiveness to compliance mandates,Enhanced visibility & improved process efficiency,Eliminate process inefficiencies & Process Automation,Social interaction & Dynamic collaboration,Greater risk mitigation & reduced OPEX costs,Reusable & flexible process blueprints,Seamless integration with Enterprise Systems' },
      { title: 'Smart Mobile Solutions', description: 'A latest Mobility report from Ericsson says about 90% of the world’s population over the age of six will have a mobile phone by 2020. Driven by this rapid mobile adoption, increased use of mobile technology, mobility is making waves in empowering people and reinventing the way companies do their business.', functionalities: 'Defining Mobile strategy,Providing Mobile Intuitive Experiences,Mobile Application Development,Securing & Managing Mobile Apps, Devices,Cloud Enablement', benfits: 'Responsive apps with powerful and intuitive mobile user experience,End-to-end software solution for designing, developing, deploying, managing & securing mobile applications,Optimized mobile initiatives for secure, effortless employee collaboration and customer engagement' }
    ];
  }

  


  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
  }

}
