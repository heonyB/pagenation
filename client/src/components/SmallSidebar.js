import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../assets/context/appContext';

import Logo from './Logo';
import NavLinks from './NavLinks';

const SmallSidebar = () => {
  const { showSideBar, toggleSidebar } = useAppContext();

  return (
    <Wrapper>
      <div className={`sidebar-container ${showSideBar && 'show-sidebar'}`}>
        <div className="content">
          <button
            type="button"
            className="close-btn"
            onClick={() => toggleSidebar()}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            <NavLinks toggleSidebar={toggleSidebar} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
