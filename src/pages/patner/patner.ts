import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PatnerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-patner',
  templateUrl: 'patner.html',
})
export class PatnerPage {

  patners: Array<{title:string,img:string,description:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.patners = [
      {title:'IBM',img:'http://softpathtech.com/img/spt/part1.png',description:'SoftPath Technologies is a Premier Business Partner of IBM, the highest level of partnership that IBM offers. We collaborate with IBM to provide significant value to our clients through innovative solutions. We offer expertise on BPM and Technology Integration solutions using IBM set of tools.'},
      {title:'K2',img:'http://softpathtech.com/img/spt/part4.png',description:'SoftPath Technologies is now a K2 BPM Partner, through this partnership we help our clients adopt K2 platform to build cost effective business processes. We use K2 platform to enable better collaboration between various teams by building better processes to increase business agility and improved customer satisfaction. '},
      {title:'Appian',img:'http://softpathtech.com/img/spt/part6.jpg',description:'Appian is the market leader in modern Business Process Management (BPM) software, Appian delivers an enterprise application platform that unites users with all their data, processes, and collaborations – in one environment, on any mobile device, through a simple social interface. On-premise and in the cloud, Appian is the fastest way to deliver innovative business applications.'},
      {title:'Kony ',img:'http://softpathtech.com/img/spt/part7.jpg',description:'Kony is the fastest growing, cloud-based enterprise mobility solutions company and an industry leader among mobile application development platform (MADP) providers. Kony empowers organizations to compete in mobile time by rapidly delivering, ready-to-run, multi-edge mobile apps across the broadest array of devices and systems, today and in the future, with a lower total cost of ownership. Kony’s cross-platform solution helps organizations design, build, configure and manage mobile apps to empower and better engage with customers, partners and employees'},
      {title:'MaaS360',img:'http://softpathtech.com/img/spt/part8.jpg',description:'MaaS360 by Fiberlink, an IBM company, is the trusted enterprise mobility management solution to thousands of customers worldwide -- from Fortune 500 companies to small businesses. We make working in a mobile world simple and safe by delivering comprehensive mobile security and management for applications, content, email, and devices. Instantly accessible from the web, MaaS360 is easy to use and maintain and provides the flexibility organizations need to fully embrace mobility in every aspect of their business.'},
      {title:'Microsoft',img:'http://softpathtech.com/img/spt/part2.png',description:'SoftPath Technologies is a Microsoft Certified Partner and offers special focus system integration, process integration and workflow automation using Microsoft SharePoint. Using Microsoft SharePoint we help our clients build intranet portals, document & file management, collaboration, social networks, extranets, social networks, enterprise search and business intelligence.'}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatnerPage');
  }

}
