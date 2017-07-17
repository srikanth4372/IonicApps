import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, MenuController } from 'ionic-angular';


/**
 * Generated class for the ProductListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})

export class ProductListPage {

  products: Array<{ title: string, description: string, technologies: string }>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    

    this.products = [
      { title: 'EXPENSEPAY', description: 'ExpensePay is an electronic monetary system. The App is designed to maintain a strict vigil on all expenses and ensure no kind of misuse or fraud happens. The app facilitates financial prudence by ensuring the budget for a proposed project is managed effectively by the admin departments by dividing the entire project is different phases and allocating budgets for each. Only one phase of the project will be active, for only that duration of time and budget. On completion of that phase, the admin teams move to next phase of the project with its own budget and so-on. This reduces the risk of mis-management ensuring timely delivery of funds for all phases of a project.', technologies: 'IBM Business Process Manager(Advanced),IBM FileNet,Oracle DB/DB2/My SQL,IBM Cognos Reporting,IBM MobileFirst,J2EE and Angular JS Framework' },
      {title:'UnicusMD',description:'SoftPath Technologies UnicusMD is a renamed version of PBPA tool, with advanced business process management and Cognitive  abilities. PBPA tool, which was launched in 2013, offered an integrated solution with a traditional Point of Sale (POS) Pharmacy Management System with Hospital Management & Patient Management Systems of the clinics and CRM Systems of Pharmaceutical companies. The tool streamlined Patient Management activities, improved speed of cashless transactions, reduced risk of lost records, brought down administrative & operational costs while meeting various healthcare and insurance compliance and regulations.',technologies:'IBM BlueMix,Watson Analytics,CloudServices'},
      {title:'DynPrice',description:'DynPrice is a software application which automates pricing of millions of products based on the user created business rules within few minutes accurately.Its current focus is Ecommerce domain. It is built in JAVA Technology namely Java Server Faces, Spring framework, Hibernate along with Hadoop and HIVE to access big data and perform complex mathematical operations faster. The User interface is user-friendly which gives the users the best experience possible. The competitor prices are obtained from the competitor sites using web scraping technique.',technologies:'MySql,Spring,JSF,Hibernate'},
      {title:'TieUpNow',description:'TieUpNow is funding raising platform connecting investors and innovators. The innovators can post their innovative idea or a company looking for venture capitalist funding. The investor can connect to TieUpNow to check the innovation ideas or companies looking for funding. Once the investor or venture capitalist decides to invest in the company, he needs to pay premium for using TieUpNow services. TieUpNow will play a crucial role in showcasing innovative ideas /companies to investors based on their interests, budgets, and top rated ideas. TieUpNow provides valuable suggestions to innovators like, investors areas of interest, top valued domains and top valued areas of research. TieUpNow will publish the successful investors/innovators stories.',technologies:'PHP,Mysql,WordPress,CSS,HTML5'}
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }


}
