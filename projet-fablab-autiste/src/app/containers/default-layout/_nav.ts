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
    name: 'Donnee des Patient',
    iconComponent: { name: 'cilFork' },
    children: [
      {
        name: 'Frequence Cardiaque',
        url: '/frequence-cardiaque',
        iconComponent: { name: 'cil-Heart' }
      },
      {
        name: 'Temperature',
        url: '/temperature',
        iconComponent: { name: 'cil-SortNumericUp' },
        
      },
      {
        name: 'Frequence Respiratoire',
        url: '/frequence-cardiaque',
        iconComponent: { name: 'cil-Heart' }
      },
    ]
  },
  {
    name: 'Liste des enfants',
    url: '/notifications/badges',
    iconComponent: { name: 'cilChild' },
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
    name: 'Enregistrement',
    iconComponent: { name: 'cilSave' },
    children: [
    
      {
        name: 'Register',
        url: '/register'
      },  

    ]
  },
  {
    iconComponent: { name: 'cilChevronLeft' },
    url: '/login'
  },
];
