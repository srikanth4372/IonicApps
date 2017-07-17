
import { Component } from '@angular/core';



@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  videos: any[] = [
    {
      title:'Enabling Digital Revolution in a Digital Age',
      video:'https://www.youtube.com/embed/Qa-h2aDEFec'
    },
    {
      title:'Who We Are?',
      video:'https://www.youtube.com/embed/NGrdJz6ZsWg'
    }
  ]

  imgs: Array<{ location: string }>;
  constructor() {
    this.imgs = [
      { location: 'http://softpathtech.com/img/slides/banner-img1.jpg' },
      { location: 'http://softpathtech.com/img/slides/banner-img2.jpg' },
      { location: 'http://softpathtech.com/img/slides/banner-img4.jpg' }
    ];
  }

} 
