import { Component } from '@angular/core';
import { NavItemComponent } from '@coreui/angular';
import { navItems } from './_nav';
@Component({
  selector: 'app-profil-patient',
  templateUrl: './profil-patient.component.html',
  styleUrls: ['./profil-patient.component.scss']
})
export class ProfilPatientComponent {

  sidebarId: string = "sidebar1";
  public navItems = navItems;
  
}
