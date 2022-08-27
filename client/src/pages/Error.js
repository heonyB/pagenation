import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="error" />
        <h3>홈페이지를 찾을 수 없습니다!</h3>
        <p>고객님이 보고 계시는 홈페이지를 찾을 수 없습니다</p>
        <Link to="/">홈으로 돌아가기</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
