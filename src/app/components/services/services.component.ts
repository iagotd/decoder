import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styles: []
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public scrollToElement(viewId){
    document.getElementById(viewId).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
