import React from 'react';

const SingleJob = ({ remaining }) => {

    console.log(remaining);
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




    return (
      <React.Fragment>
        <div>
          <h1>{job_description}</h1><br />
          <h1>{job_responsibility}</h1><br />
          <h1>{educational_requirements}</h1> <br />
          <h1>{experiences}</h1>
        </div>
      </React.Fragment>
    );
};

export default SingleJob;