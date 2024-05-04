export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';

// Action creator to update filters
export const updateFilters = (filters) => ({
  type: UPDATE_FILTERS,
  payload: filters,
});

// Action creator to indicate job fetching has started
export const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST,
});

// Action creator for successful job fetch
export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs,
});

// Action creator for failed job fetch
export const fetchJobsFailure = (error) => ({
  type: FETCH_JOBS_FAILURE,
  payload: error,
});

export const fetchJobs = () => {
    return async (dispatch) => {
      dispatch(fetchJobsRequest()); // Dispatch action to indicate job fetching has started
  
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
  
        const body = JSON.stringify({
          "limit": 10,
          "offset": 0
        });
  
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body
        };
  
        // Make API request to fetch jobs
        const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', requestOptions);
  
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
  
        const data = await response.json();
  
        // Dispatch action for successful job fetch
        dispatch(fetchJobsSuccess(data.jdList));
      } catch (error) {
        // Dispatch action for failed job fetch
        dispatch(fetchJobsFailure(error.message));
      }
    };
  };



  