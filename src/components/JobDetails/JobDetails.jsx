import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleJob from '../SingleJob/SingleJob';


const JobDetails = () => {
  const dynamic = useParams();
  const idInt = parseInt(dynamic.jobId);
  

  // main theke asse dynamic

  const [jobDet, setJobDet] = useState([]);
  

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/Abir191197/Profession-Path/main/data/jobs.json`
    )
      .then((res) => res.json())
      .then((data) => setJobDet(data));
  }, []);

  const remaining = jobDet.find((jd) => dynamic.jobId == jd.id);

  return (
    <div>
      {remaining && (
        <div className="grid-cols-2">
          <SingleJob remaining={remaining} idInt={idInt}></SingleJob>
        </div>
      )}
    </div>
  );
};

export default JobDetails;