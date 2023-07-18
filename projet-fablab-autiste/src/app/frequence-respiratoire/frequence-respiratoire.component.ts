import { Component } from '@angular/core';
import { NavItemComponent } from '@coreui/angular';
import { navItems } from './_nav';

@Component({
  selector: 'app-frequence-respiratoire',
  templateUrl: './frequence-respiratoire.component.html',
  styleUrls: ['./frequence-respiratoire.component.scss']
})
export class FrequenceRespiratoireComponent {
  sidebarId: string = "sidebar1";
  public navItems = navItems;

}
