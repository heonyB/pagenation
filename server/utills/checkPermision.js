import { UnauthenticatedError } from '../errors/index.js';

const checkPermissions = (reqestUser, resourceUserId) => {
  if (reqestUser.userId === resourceUserId.toString()) return;

  throw new UnauthenticatedError('접근할 권한이 없습니다');
};
export default checkPermissions;
