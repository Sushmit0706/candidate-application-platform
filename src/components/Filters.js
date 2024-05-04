import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilters, fetchJobs } from '../redux/actions.js';
import { TextField, Select, MenuItem, Button } from '@mui/material';

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateFilters({ [name]: value }));
  };

  const handleSubmit = () => {
    dispatch(fetchJobs(10, 0)); 
  };

  return (
    <div>
      <TextField
        label="Min Experience"
        type="number"
        name="minExperience"
        value={filters.minExperience}
        onChange={handleChange}
      />
      <TextField
        label="Company Name"
        name="companyName"
        value={filters.companyName}
        onChange={handleChange}
      />
      <Select
        label="Location"
        name="location"
        value={filters.location}
        onChange={handleChange}
      >
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="On-site">On-site</MenuItem>
      </Select>
      <TextField
        label="Tech Stack"
        name="techStack"
        value={filters.techStack}
        onChange={handleChange}
      />
      <TextField
        label="Role"
        name="role"
        value={filters.role}
        onChange={handleChange}
      />
      <TextField
        label="Min Base Pay"
        type="number"
        name="minBasePay"
        value={filters.minBasePay}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Apply Filters</Button>
    </div>
  );
};

export default Filters;
