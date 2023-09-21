import { Component } from '@angular/core';
import { DataService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  languageList = ["English", "Español", "Deutsch", "Français", "Italiano"];

  constructor(public dataService: DataService){}

}
