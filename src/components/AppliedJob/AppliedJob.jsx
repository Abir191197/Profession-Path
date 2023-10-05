import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../localstorage';

const AppliedJob = () => {

  // const jobs = useLoaderData();
  const [jobs, setjobsData] = useState([]);
  

 useEffect(() => {
   fetch(
     "https://raw.githubusercontent.com/Abir191197/Profession-Path/main/data/jobs.json"
   )
     .then((res) => res.json())
     .then((data) => setjobsData(data));
 }, []);









   const [appliedJobs, setAppliedJobs] = useState([]);
   const [displayJobs, setDisplayJobs] = useState([]);

   const handleJobsFilter = (filter) => {
     if (filter === "all") {
         setDisplayJobs(appliedJobs);
         

     } else if (filter === "remote") {
       const remoteJobs = appliedJobs.filter(
         (job) => job.remote_or_onsite === "Remote"
         );
         

       setDisplayJobs(remoteJobs);
     } else if (filter === "onsite") {
       const onsiteJobs = appliedJobs.filter(
         (job) => job.remote_or_onsite === "Onsite"
       );
       setDisplayJobs(onsiteJobs);
     }
   };

   useEffect(() => {
     const storedJobIds = getStoredJobApplication();
     if (jobs.length > 0) {
       // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

       const jobsApplied = [];
       for (const id of storedJobIds) {
         const job = jobs.find((job) => job.id === id);
         if (job) {
           jobsApplied.push(job);
         }
       }
       setAppliedJobs(jobsApplied);
       setDisplayJobs(jobsApplied);
       // console.log(jobs, storedJobIds, jobsApplied)
     }
   }, [jobs]);
    return (
      <div>
        <div className="max-w-6xl mx-auto">
          <h1 className="font-bold h-[100px] ml-[500px] text-3xl mt-14 max-w-6xl mx-auto   ">
            Job applied: {appliedJobs.length}
          </h1>
          <details className="dropdown   ">
            <summary className="m-1 btn  ">Filter By</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={() => handleJobsFilter("all")}>
                <a>All</a>
              </li>
              <li onClick={() => handleJobsFilter("remote")}>
                <a>Remote</a>
              </li>
              <li onClick={() => handleJobsFilter("onsite")}>
                <a>onsite</a>
              </li>
            </ul>
          </details>
          <ul>
            {displayJobs.map((job) => (
              <li key={job.id}>
                <div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="card mt-7 flex flex-row justify-center items-center  w-[600px] h-[300px] border-2  bg-[#e4e4ff] shadow-xl ">
                      <figure className=" pt-10 ml-[40px]">
                        <img
                          src={job.logo}
                          alt="logo"
                          className="rounded-xl  w-20"
                        />
                      </figure>
                      <div className="card-body  ">
                        <h2 className="card-title justify-start items-start">
                          {job.job_title}
                        </h2>
                        <h2>{job.company_name}</h2>

                        <div className="flex flex-row gap-2  ">
                          <button className="border-2 text-center rounded-md  w-[109px] h-[40px]">
                            {job.remote_or_onsite}
                          </button>
                          <button className=" border-2  text-center rounded-md  w-[109px] h-[40px]">
                            {job.job_type}
                          </button>
                        </div>
                        <div className="flex flex-row gap-10 pt-4">
                          <span>
                            <img
                              className="inline-flex mr-2 "
                              width="30"
                              height="30"
                              src="https://img.icons8.com/ios-glyphs/30/map-marker.png"
                              alt="map-marker"
                            />
                            {job.location}
                          </span>
                          <div>
                            <span>
                              <img
                                className="inline-flex mr-2 "
                                width="24"
                                height="24"
                                src="https://img.icons8.com/material-two-tone/24/money-yours.png"
                                alt="money-yours"
                              />
                              {job.salary}
                            </span>
                          </div>
                          <Link
                            to={`/jobDetails/${job.id}`}
                            className="btn bg-gradient-to-r from-purple-300 to-blue-500">
                            Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default AppliedJob;