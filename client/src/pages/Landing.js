import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';

import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              일자리 <span>알아보기</span>앱
            </h1>
            <p>
              He tried to sacrifice the Second Doctor and his companions to his
              goddess. They were rescued by Zaroff, but later Zaroff gave the
              Doctor and Ramo to Lolem to sacrifice them to Amdo. When the
              goddess appeared to speak, Lolem and the other Atlanteans bowed
              their heads. When he raised his head,
            </p>
            <Link to='/register' className="btn btn-hero">로그인/회원가입</Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;
