import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const JobCard = ({ job }) => {
  return (
    <Card>
      <CardContent>
       
        <img src={job.logoUrl} alt={job.companyName} style={{ width: 100, height: 'auto' }} />
        
        <Typography variant="h6">{job.jobRole}</Typography>
       
        <Typography variant="body1">{job.companyName}</Typography>
        
        <Typography variant="body2">{job.location}</Typography>
       
        <Typography variant="body2">{job.jobDetailsFromCompany}</Typography>
       
        <Typography variant="body2">Experience: {job.minExp} - {job.maxExp} years</Typography>
        
        <Typography variant="body2">Salary: {job.minJdSalary} - {job.maxJdSalary} {job.salaryCurrencyCode}</Typography>
    
        <Button variant="contained" color="primary" href={job.jdLink} target="_blank">Apply</Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
