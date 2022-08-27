import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  DELETE_JOB_BEGIN,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  FILTER_JOBS_BEGIN,
  FILTER_JOBS_SUCCESS,
} from './actions';

import { initialState } from './appContext';
// isLoading: false,
// showAlert: false,
// alertText: '',
// alertType: '',

const reducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: '빈칸을 채워주세요!',
      };

    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: '',
      };
    case REGISTER_USER_BEGIN:
      return { ...state, isLoading: true };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: 'success',
        alertText: '성공적으로 회원가입 되었습니다.',
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        isLoading: false,

        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.message,
      };
    case LOGIN_USER_BEGIN:
      return { ...state, isLoading: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: 'success',
        alertText: '성공적으로 로그인 되었습니다.',
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,

        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.message,
      };
    case SETUP_USER_BEGIN:
      return { ...state, isLoading: true };
    case SETUP_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: 'success',
        alertText: action.payload.alertText,
      };
    case SETUP_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.message,
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        showSideBar: !state.showSideBar,
      };
    case LOGOUT_USER:
      return {
        ...initialState,
        user: null,
        token: null,
        jobLocation: '',
        userLocation: '',
      };
    case UPDATE_USER_BEGIN:
      return { ...state, isLoading: true };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: 'success',
        alertText: '업데이트되었습니다!',
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.message,
      };
    case HANDLE_CHANGE:
      return {
        ...state,

        [action.payload.name]: action.payload.value,
      };
    case CLEAR_VALUES:
      const initialStats = {
        isEditing: false,
        editJobId: '',
        position: '',
        company: '',
        jobLocation: state.userLocation,
        JobType: '풀타임',
        status: '구직완료',
      };

      return { ...state, ...initialStats };
    case CREATE_JOB_BEGIN:
      return { ...state, isLoading: true };
    case CREATE_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: '새로운 일자리를 추가하였습니다!',
      };
    case CREATE_JOB_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.message,
      };

    case GET_JOBS_BEGIN:
      return { ...state, isLoading: true, showAlert: false };

    case GET_JOBS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobs: action.payload.jobs,
        totalJobs: action.payload.totalJobs,
        numOfPages: action.payload.numOfPages,
      };
    case SET_EDIT_JOB:
      const job = state.jobs.find((job) => job._id === action.payload.id);
      const { _id, position, company, jobLocation, JobType, status } = job;
      return {
        ...state,
        isEditing: true,
        editJobId: _id,
        position,
        company,
        jobLocation,
        JobType,
        status,
      };
    case DELETE_JOB_BEGIN:
      return { ...state, isLoading: true };
    case EDIT_JOB_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: '수정 완료!',
      };
    case EDIT_JOB_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.message,
      };
    case SHOW_STATS_BEGIN:
      return {
        ...state,
        isLoading: true,
        showAlert: false,
      };
    case SHOW_STATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stats: action.payload.stats,
        monthlyApplications: action.payload.monthlyApplications,
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        search: '',
        searchStatus: 'all',
        searchType: 'all',
        sort: 'latest',
      };
      case FILTER_JOBS_BEGIN:
        return { ...state, isLoading: true, showAlert: false };
  
      case FILTER_JOBS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          jobs: action.payload.jobs,
          totalJobs: action.payload.totalJobs,
          numOfPages: action.payload.numOfPages,
          search:action.payload.search,
          searchStatus:action.payload.searchStatus,
          searchType:action.payload.searchType,
          sort:action.payload.sort,
        };
    default:
      throw new Error(`액션을 찾을수 없습니다: ${action.type}`);
  }
};

export default reducer;
