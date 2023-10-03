import React from 'react';
import Lottie from "lottie-react";
import animation from "../Home/animation.json";

const UpperPart = () => {
    return (
      <div>
        <div className="mt-10 ">
          <div className="card card-side bg-base-100 shadow-xl bodyy">
            <div className="card-body">
              <div className="card-title text-4xl">
                <h1 className="font-bold text-7xl">
                  One Step <br /> Closer To Your <br />
                  <span className="text-blue-500 ">Dream Job</span>
                  <br />
                  <p className="text-sm mt-10">
                    Explore thousands of job opportunities with all the <br />
                    information you need. Its your future. Come find it. Manage
                    <br />
                    all your job application from start to finish
                  </p>
                  <button className="btn btn-primary ">Get Started</button>
                </h1>

                <div className="w-1/2">
                  <figure>
                    <Lottie animationData={animation} loop={true} />
                  </figure>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col  justify-center items-center m-28">
          <h1 className="font-bold text-4xl">Job Category List</h1>
          <span className=" mt-6 font-thin">
            Explore thousands of job opportunities with all the information you
            need. Its your future.
          </span>
        </div>
      </div>
    );
};

export default UpperPart;