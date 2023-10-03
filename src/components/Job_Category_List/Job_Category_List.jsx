import React from 'react';


const Job_Category_List = ({ job }) => {

    const { job_title, available_job,img } = job;
  return (
    <React.Fragment>
      <div className="w-[311px] h-[243px] ">
        <div className="card bg-base-100 shadow-xl bodyy">
          <figure className="px-10 pt-10">
            <img src={img} alt="logo" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title">{job_title}</h2>
            <p>{available_job}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Job_Category_List;