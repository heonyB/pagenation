import { useState, useEffect } from 'react';

import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo, FormRow, Alert } from '../components';
import { useAppContext } from '../assets/context/appContext';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser ,setupUser } =
    useAppContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    if (isMember) {
      setupUser({currentUser, endPoint:'login', alertText:'성공적으로 로그인했습니다!'});
    } else {
      setupUser({currentUser, endPoint:'register', alertText:'성공적으로 회원가입했습니다!'});
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? '로그인' : '회원가입'}</h3>
        {showAlert && <Alert />}
        {/* 네임 인풋 */}
        {!values?.isMember && (
          <FormRow
            type="text"
            name="name"
            labelText="이름"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          labelText="이메일"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          labelText="비밀번호"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {values.isMember ? '로그인' : '회원가입'}
        </button>
        <p>
          {values.isMember ? '아이디가 없으신가요?' : '회원이신가요?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? '회원가입 하러가기' : '로그인 하러가기'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
