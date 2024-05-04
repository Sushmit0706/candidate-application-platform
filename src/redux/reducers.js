import { FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE, UPDATE_FILTERS } from './actions.js';

const initialState = {
  jobs: [], // Array to store job listings
  filters: {
    minExperience: 0,
    companyName: '',
    location: '',
    techStack: '',
    role: '',
    minBasePay: '',


  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
      };
    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
