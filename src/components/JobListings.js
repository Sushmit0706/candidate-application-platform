import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../redux/actions.js'; 
import JobCard from './JobCard'; 
import Filters from './Filters'; 
import InfiniteScroll from 'react-infinite-scroll-component';

const JobListings = () => {
    const dispatch = useDispatch(); // Create a dispatch function
    const [hasMore, setHasMore] = useState(true); // State to track if there are more jobs to fetch
    const [page, setPage] = useState(0); // State to track the current page
    const jobs = useSelector(state => state.jobs); // Get jobs state from Redux store

    
    useEffect(() => {
        dispatch(fetchJobs(10, 0)); // Fetch jobs with limit 10 and offset 0
    }, [dispatch]); // Run useEffect when dispatch function changes

    // Function to fetch more jobs when scrolling
    const fetchMoreJobs = () => {
        dispatch(fetchJobs(10, page + 1)); // Fetch more jobs with limit 10 and the next page number
        setPage(page + 1); // Update the current page number
    };

    
    return (
        <div>
            <Filters />
            <InfiniteScroll
                dataLength={jobs.length} // Length of the data
                next={fetchMoreJobs} // Function to call when reaching the end of the list
                hasMore={hasMore} // Boolean to indicate if there are more items to load
                loader={<h4>Loading...</h4>} // Loader component to display while loading more items
                endMessage={<p>No more jobs to show</p>} // Message to display when all items have been loaded
            >
                
                {jobs.map(job => (
                    <JobCard key={`${job.title}-${job.companyName}`} job={job} /> 
                ))}
            </InfiniteScroll>
        </div>
    );
};


export default JobListings;

