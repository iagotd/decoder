import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dunecoder';
  isLoading = true;

  ngOnInit(){
    setTimeout(() =>{
      this.isLoading = false;
    }, 1000)
  };
}