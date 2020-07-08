import { RouteInfo } from '../app/shared/sidebar/sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Dashboard',
    icon: 'icon-Car-Wheel',
    class: 'has-arrow',
    permissions: ['SUPER-ADMIN','OP_APPROVAZIONE_AMM','OP_APPROVAZIONE_ECONOMICA','OP_DIPARTIMENTALE'],
    extralink: false,
    submenu: [          
      {
        path: 'dashboard/dashboarduffdocenti',
        title: 'Validazione Uff. Personale',
        icon: '',
        class: '',
        permissions: ['SUPER-ADMIN','OP_APPROVAZIONE_AMM'],
        extralink: false,
        submenu: []
      },
      {
        path: 'dashboard/dashboardufftrattamenti',
        title: 'Validazione Uff. Finanze',
        icon: '',
        class: '',
        permissions: ['SUPER-ADMIN','OP_APPROVAZIONE_ECONOMICA'],
        extralink: false,
        submenu: []
      },
      {
        path: 'dashboard/dashboarddipartimento',
        title: 'Vista dipartimentale',
        icon: '',
        class: '',
        permissions: ['SUPER-ADMIN','OP_DIPARTIMENTALE'],
        extralink: false,
        submenu: []
      },
    ],
  },

  // FUNZIONALITA'
  {
    path: '',
    title: 'Funzionalità',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    permissions: [],
    submenu: [],
  },
  {
    path: 'lista-insegn-query', //'copertura-ugov',
    title: 'Nuovo contratto',
    icon: 'icon-File',
    class: '',
    extralink: false,
    submenu: [],
    permissions: ['OP_DIPARTIMENTALE','ADMIN','SUPER-ADMIN'],
  },
  {
    path: 'lista-precontr-query',
    title: 'Ricerca precontrattuali',
    icon: 'icon-File-Search',
    class: '',
    extralink: false,
    submenu: [],
    permissions: ['OP_DIPARTIMENTALE','OP_DOCENTE','ADMIN','SUPER-ADMIN','OP_APPROVAZIONE_AMM','OP_APPROVAZIONE_ECONOMICA'],
  },

  {
    path: 'lista-contrugov-query',
    title: 'Ricerca in contabilità',
    icon: 'icon-File-Search',
    class: '',
    extralink: false,
    submenu: [],
    permissions: ['OP_APPROVAZIONE_ECONOMICA','SUPER-ADMIN'],
  },

  // DOCUMENTAZIONE A SUPPORTO
  {
    path: '',
    title: 'Documentazione',
    icon: 'icon-Speach-Bubble',
    class: 'has-arrow',
    extralink: false,
    permissions: [],
    submenu: [
      {
        path: 'sommario',
        title: 'Sommario',
        icon: '',
        class: '',
        extralink: false,
        submenu: [],
        permissions: ['OP_APPROVAZIONE_AMM','OP_APPROVAZIONE_ECONOMICA','OP_DIPARTIMENTALE', 'ADMIN', 'SUPER-ADMIN','OP_RISUMANE'],
      },
      {
        path: 'procedura',
        title: 'Proceduralizzazione',
        icon: '',
        class: '',
        extralink: false,
        submenu: [],
        permissions: ['OP_APPROVAZIONE_AMM','OP_APPROVAZIONE_ECONOMICA','OP_DIPARTIMENTALE', 'ADMIN', 'SUPER-ADMIN'],
      },
      {
        path: 'lineeguida/ugovdidattica',
        title: 'L.G. U-Gov Didattica',
        icon: '',
        class: '',
        extralink: false,
        submenu: [],
        permissions: ['OP_APPROVAZIONE_AMM','OP_APPROVAZIONE_ECONOMICA','OP_DIPARTIMENTALE', 'ADMIN', 'SUPER-ADMIN'],
      },
      {
        path: 'lineeguida/ugovcompensi',
        title: 'L.G. U-Gov Compensi',
        icon: '',
        class: '',
        extralink: false,
        submenu: [],
        permissions: ['OP_APPROVAZIONE_AMM','OP_APPROVAZIONE_ECONOMICA','OP_DIPARTIMENTALE', 'ADMIN', 'SUPER-ADMIN'],
      },
      {
        path: 'lineeguida/precontreditabile',
        title: 'Modulistica editabile',
        icon: '',
        class: '',
        extralink: false,
        submenu: [],
        permissions: ['OP_APPROVAZIONE_AMM','OP_APPROVAZIONE_ECONOMICA','OP_DIPARTIMENTALE', 'ADMIN', 'SUPER-ADMIN','OP_RISUMANE'],
      },
      {
        path: 'lineeguida/compilazione',
        title: 'Compilazione modulistica',
        icon: '',
        class: '',
        extralink: false,
        submenu: [],
        permissions: ['OP_DOCENTE','OP_APPROVAZIONE_AMM','OP_APPROVAZIONE_ECONOMICA','OP_DIPARTIMENTALE', 'ADMIN', 'SUPER-ADMIN'],
      },
    ],
  },

  // GESTIONE
  {
    path: '',
    title: 'Gestione',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    permissions: ['ADMIN'],
    submenu: [],
  },
  {
    path: '',
    title: 'Utenti',
    icon: 'icon-Administrator',
    class: 'has-arrow',
    extralink: false,
    permissions: ['ADMIN', 'SUPER-ADMIN'],
    submenu: [
      {
        path: 'users',
        title: 'Utenti',
        icon: '',
        class: '',
        extralink: false,
        submenu: [],
        permissions: ['ADMIN', 'SUPER-ADMIN'],
      },
      {
        path: 'roles',
        title: 'Ruoli',
        icon: '',
        class: '',
        extralink: false,
        submenu: [],
        permissions: ['ADMIN', 'SUPER-ADMIN'],
      },
      {
        path: 'permissions',
        title: 'Permessi',
        icon: '',
        class: '',
        extralink: false,
        submenu: [],
        permissions: ['ADMIN', 'SUPER-ADMIN'],
      },
      {
        path: 'mappingruoli',
        title: 'Associazione ruoli',
        icon: '',
        class: '',
        extralink: false,
        submenu: [],
        permissions: ['SUPER-ADMIN'],
      },
      {
        path: 'logattivita',
        title: 'Log',
        icon: '',
        class: '',
        extralink: false,
        submenu: [],
        permissions: ['SUPER-ADMIN'], 
      },  
    ]}, // chiude gestione utenti
    {
      path: '',
      title: 'Configurazioni',
      icon: 'icon-Gear',
      class: 'has-arrow',
      extralink: false,
      permissions: ['SUPER-ADMIN'],
      submenu: [
      {
        path: 'mappinguffici',
        title: 'Mapping uffici',
        icon: '',
        class: '',
        extralink: false,
        submenu: [],
        permissions: ['SUPER-ADMIN'],
      },
    ]}, // chiude configurazioni
    {
    path: '',
    title: 'Ricerche Titulus',
    icon: 'icon-Paint-Brush',
    class: 'has-arrow',
    extralink: false,
    permissions: ['ADMIN', 'SUPER-ADMIN'],
    submenu: [
      {
        path: 'personeinterne',
        title: 'Persone interne',
        icon: '',
        class: '',
        extralink: false,
        submenu: [],
        permissions: ['SUPER-ADMIN'],
      },
      {
        path: 'struttureinterne',
        title: 'Strutture interne',
        icon: '',
        class: '',
        extralink: false,
        submenu: [],
        permissions: ['SUPER-ADMIN'],
      },
      {
        path: 'struttureesterne',
        title: 'Strutture esterne',
        icon: '',
        class: '',
        extralink: false,
        submenu: [],
        permissions: ['SUPER-ADMIN'],
      },
      {
        path: 'documenti',
        title: 'Documenti',
        icon: '',
        class: '',
        extralink: false,
        submenu: [],
        permissions: ['SUPER-ADMIN'],
      },
    ]}, // chiude ricerche titulus

];