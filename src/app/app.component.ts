import { Component } from '@angular/core';
import { DataSharingService } from './data-sharing.service'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(private data:DataSharingService){

  }
  update(){
    
}
}
