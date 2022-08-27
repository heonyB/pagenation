import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err.statusCode);
  const defaultError = {
    statusCodes: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || '무엇인가 잘못되었습니다. 다시 시도해주세요',
  };

  if (err.name === 'ValidationError') {
    defaultError.statusCodes = StatusCodes.BAD_REQUEST;
    // defaultError.message = err.message
    defaultError.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(',');
  }
  if (err.code && err.code === 11000) {
    defaultError.statusCodes = StatusCodes.BAD_REQUEST;
    defaultError.message = `${Object.keys(err.keyValue)} 이 중복됩니다!`;
  }

  res.status(defaultError.statusCodes).json({ message: defaultError.message });
};

export default errorHandlerMiddleware;
