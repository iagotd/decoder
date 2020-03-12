import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public scrollToElement(viewId){
    document.getElementById(viewId).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
