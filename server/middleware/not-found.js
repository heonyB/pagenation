const notFoundMiddleware = (req, res) => {
  res.status(404).send('찾을 수 없는 경로입니다');
};
export default notFoundMiddleware;
