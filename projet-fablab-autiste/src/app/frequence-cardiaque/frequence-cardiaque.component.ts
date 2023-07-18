import { Component } from '@angular/core';
import { NavItemComponent } from '@coreui/angular';
import { navItems } from './_nav';


@Component({
  selector: 'app-frequence-cardiaque',
  templateUrl: './frequence-cardiaque.component.html',
  styleUrls: ['./frequence-cardiaque.component.scss']
})
export class FrequenceCardiaqueComponent {
  sidebarId: string = "sidebar1";
  public navItems = navItems;
  

}
