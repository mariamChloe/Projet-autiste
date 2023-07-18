import { Component } from '@angular/core';
import { NavItemComponent } from '@coreui/angular';
import { navItems } from './_nav';




@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent {
  sidebarId: string = "sidebar1";
  public navItems = navItems;
  
    }
  
  
