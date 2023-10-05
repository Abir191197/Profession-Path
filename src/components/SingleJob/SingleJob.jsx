import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import { saveJobApplication } from '../localstorage';

const SingleJob = ({ remaining, idInt }) => {
  const handleApplyJob = () => {
    toast.success("Congratulations Successfully Applied!");
    saveJobApplication(idInt);
  };
 ;

  const {
    job_title,
    job_description,
    experiences,
    job_responsibility,
    educational_requirements,
    contact_information,
    salary,
    location,
  } = remaining;

  const element = <FontAwesomeIcon icon={faDollarSign} />;
  const elementt = <FontAwesomeIcon icon={faAddressBook} />;

  return (
    <React.Fragment>
      <h1 className="font-extrabold h-[100px] ml-[500px] text-3xl mt-14 max-w-6xl mx-auto   ">
        Job Details
      </h1>
      <div className="flex flex-row mb-24 ">
        <div className="w-[870px] h-[450px] mr-10 bg-gradient-to-r from-purple-300 to-blue-500 shadow-md rounded-lg p-5  ">
          <h1>
            <span className="font-extrabold text-lg">
              Job Description: <br />
            </span>

            <span>{job_description}</span>
          </h1>
          <br />
          <h1>
            <span className="font-extrabold text-lg">
              Job Responsibility: <br />
            </span>
            {job_responsibility}
          </h1>
          <br />
          <h1>
            <span className="font-extrabold text-lg">
              Educational Requirements: <br />
            </span>
            {educational_requirements}
          </h1>
          <br />
          <h1>
            <span className="font-extrabold ">
              experiences: <br />
            </span>
            {experiences}
          </h1>
        </div>

        <div className="bg-gradient-to-r from-purple-300 to-blue-500  card w-80 h-[450px] shadow-md    bg-[#e4e4ff] ">
          <div className="card-body ">
            <h1 className="font-semibold">Job Details</h1>
            <div className="border-[1px]"></div>
            <h2>
              {element} Salary:{salary}
              (Per Month)
            </h2>

            <h1 className="font-semibold mt-7">
              {elementt} Contact Information: <br />
              <div className="border-[1px]"></div>
              <p> Phone: {contact_information.phone}</p>
              <br />
              <p>Email:{contact_information.email}</p>
              <br />
              <p>Address:{contact_information.address}</p>
              <br />
            </h1>
          </div>
          <button
            onClick={handleApplyJob}
            className="h-[50px] w-[150px] ml-16 bg-[#7587ff] shadow-md rounded-lg mb-12   ">
            Apply now
          </button>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleJob;