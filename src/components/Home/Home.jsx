import React, { useEffect, useState } from "react";

import Job_Category_List from "../Job_Category_List/Job_Category_List";
import './Home.css';

import JobPostMain from "../JobPostMain/JobPostMain";
import UpperPart from "../UpperPart/UpperPart";




const Home = () => {

  // const jobs = useLoaderData();
  const [jobs, setjobs] = useState([]);
  console.log(jobs);
  
 useEffect(() => {
   fetch(
     "https://raw.githubusercontent.com/Abir191197/Profession-Path/main/data/categories.json"
   )
     .then((res) => res.json())
     .then((data) => setjobs(data));
 }, []);  


  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Abir191197/Profession-Path/main/data/jobs.json"
    )
      .then((res) => res.json())
      .then((data) => setJobData(data));
  }, []);
  
 

 
  return (
    <React.Fragment>
      <UpperPart></UpperPart>
      <div className="flex flex-row shrink-0 space-x-2">
        {
          jobs.map((job) => (
          <Job_Category_List key={job.id} job={job}></Job_Category_List>
          ))
        }
      </div>

      {/* Featured Jobs */}

      <div className=" flex flex-col  justify-center items-center m-28 ">
        <h1 className="font-bold text-4xl">Featured Jobs</h1>
        <span className=" mt-6 font-thin">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </span>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {
          jobData.map((jobSix) => (
          <JobPostMain key={jobSix.id} jobSix={jobSix}></JobPostMain>
        ))}
      </div>
      
    </React.Fragment>
  );
};





export default Home;
