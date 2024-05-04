import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import JobListings from './components/JobListings';



const App = () => {
  return (
    <Provider store={store}>
      <div>
        <JobListings />
      </div>
    </Provider>
  );
};

export default App;
