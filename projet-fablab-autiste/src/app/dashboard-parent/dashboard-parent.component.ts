import { Component } from '@angular/core';
import { NavItemComponent } from '@coreui/angular';
import { navItems } from './_nav';



@Component({
  selector: 'app-dashboard-parent',
  templateUrl: './dashboard-parent.component.html',
  styleUrls: ['./dashboard-parent.component.scss']
})
export class DashboardParentComponent {
  sidebarId: string = "sidebar1";
  public navItems = navItems;


}
