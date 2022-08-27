import { useAppContext } from '../assets/context/appContext';
import NavLinks from './NavLinks';
import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/BigSidebar';

const BigSidebar = () => {
  const { showSideBar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
