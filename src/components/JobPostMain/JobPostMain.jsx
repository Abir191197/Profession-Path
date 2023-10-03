import React from 'react';
import { useNavigate } from 'react-router-dom';


const JobPostMain = ({ jobSix }) => {

  const Navigate = useNavigate();
  const handleNav = () => {
    Navigate(`/JobDetails/${id}`);
  }









    const {
      job_title,
      company_name,
      id,
      logo,
      job_type,
      remote_or_onsite,
      salary,
      location,
    } = jobSix;
  return (
    <div>
      <div className=" ">
        <div className="card flex flex-col justify-start items-start  w-[580px] h-[392px]  bg-base-100 shadow-xl ">
          <figure className=" pt-10 ml-[40px]">
            <img src={logo} alt="logo" className="rounded-xl  w-20" />
          </figure>
          <div className="card-body  ">
            <h2 className="card-title justify-start items-start">
              {job_title}
            </h2>
            <h2>{company_name}</h2>

            <div className="flex flex-row gap-2  ">
              <button className="border-2 text-center rounded-md  w-[109px] h-[40px]">
                {remote_or_onsite}
              </button>
              <button className=" border-2  text-center rounded-md  w-[109px] h-[40px]">
                {job_type}
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
                {location}
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
                  {salary}
                </span>
              </div>
            </div>
            <button
              onClick={handleNav}
              className="btn  h-[27px] w-[130px]">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



 


export default JobPostMain;