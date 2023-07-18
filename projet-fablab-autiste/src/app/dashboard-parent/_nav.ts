import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'HOME'
    }
  },
 
  
  {
    name: 'Geolocalisation',
    url: '/notifications',
    iconComponent: { name: 'cilLocationPin' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts'
      },
    ]
  },
  
  {
    iconComponent: { name: 'cilChevronLeft' },
    url: '/login'
  },
];
