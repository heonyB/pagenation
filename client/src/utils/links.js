import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  {
    id: 1,
    text: 'stats',
    path: '/',
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: '모든 일자리',
    path: '/all-jobs',
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: '일자리 추가하기',
    path: '/add-job',
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: '프로필',
    path: '/profile',
    icon: <ImProfile />,
  },
];

export default links;
