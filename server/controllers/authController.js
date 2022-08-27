import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import {
  BadREquestError,
  NotFoundError,
  UnauthenticatedError,
} from '../errors/index.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadREquestError('모든 값을 적어주세요!');
  }

  const oldUser = await User.findOne({ email });
  if (oldUser) {
    throw new BadREquestError('이미 존재하는 이메일입니다!');
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadREquestError('이메일 또는 비밀번호를 입력해주세요');
  }
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new UnauthenticatedError('이메일 또는 비밀번호가 일치 하지 않습니다');
  }

  const isPassword = await user.comparePassword(password);
  if (!isPassword) {
    throw new UnauthenticatedError('이메일 또는 비밀번호가 일치 하지 않습니다');
  }

  const token = user.createJWT();

  user.password = undefined;

  res.status(StatusCodes.ACCEPTED).json({
    user,
    token,
    location: user.location,
  });
};

const updateUser = async (req, res) => {
  const { email, name, lastName, location } = req.body;
  if (!email || !name || !lastName || !location) {
    throw new BadREquestError('빈칸을 채워주세요');
  }
  
  const user = await User.findOne({ _id: req.user.userId });
  user.email = email;
  user.name = name;
  user.lastName = lastName;
  user.location = location;

  user.save();

  const token = user.createJWT();

  res.status(StatusCodes.OK).json({
    user,
    token,
    location: user.location,
  });
};

export { register, login, updateUser };
