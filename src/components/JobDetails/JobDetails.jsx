import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const { jobId } = useParams();
     
    // main theke asse dynamic 


    const [jobDet, setJobDet] = useState([]);

  useEffect(() => {
    fetch(`/data/jobs.json`)
      .then((res) => res.json())
        .then((data) =>
            setJobDet(data));
  }, []);

console.log(jobDet);
console.log(setJobDet);



    return (
        <div>
            
        </div>
    );
};

export default JobDetails;