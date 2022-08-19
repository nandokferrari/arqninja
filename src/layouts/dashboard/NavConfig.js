// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Home',
    path: '/home',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Data Ingestion',
    path: '#',
    icon: getIcon('eva:people-fill'),
    children: [
      { title: 'Novo Job', path: '/data-ingestion/job' },
      { title: 'Consulta Job', path: '/data-ingestion' },
    ],
  },
  {
    title: 'Management',
    path: '#',
    icon: getIcon('eva:shopping-bag-fill'),
    children: [
      { title: 'Sandbox', path: '/em-breve' },
      { title: 'Data Quality', path: '/em-breve' },
      { title: 'Iniciativas', path: '/em-breve' },
    ],
  },
  {
    title: 'Observability',
    path: '#',
    icon: getIcon('eva:file-text-fill'),
    children: [
      { title: 'Billing', path: '/em-breve' },
      { title: 'Perfomance', path: '/em-breve' },
      { title: 'Status Plataforma', path: '/em-breve' },
      { title: 'ArqNinja', path: '/em-breve' },
    ],
  },
];

export default navConfig;
