import React, { useState } from "react";

const [jobList, setJobList] = useState([]);
const [isLoading, setIsLoading] = useState(true);

const JobAdmin = () => {
  async function getJobData(jobId) {
    setIsLoading(true);
    setJobList([]);

    const options = {
      method: "GET",
      headers: new Headers({
        authorization:
          "Bearer " + localStorage.getItem("access") ||
          authCtx.credentials.access,
        "Content-Type": "application/json",
      }),
    };
    const res = await fetch(`http://localhost:5001/api/jobs`, options);
    console.log(res);
    if (!res.ok) {
      const err = await res.json();
      throw Error(err.message);
    }
    const data = await res.json();

    data.items.forEach((item) => {
      item.jobId = data.job._id;
      item.title = data.title;
      item.dateTime = data.dateTime;
      item.neighbourhood = data.neighbourhood;
      item.kakiName = data.kakiName;
      item.kakiAddress = data.kakiAddress;
      item.kakiContact = data.kakiContact;
      item.description = data.description;
      item.priority = data.priority;
      item.pax = data.pax;
      item.specialRequirements = data.specialRequirements;
      item.volunteers = [data.volunteers];
    });
  }
  getJobData();

  return (
    <div>
      <h1>List of jobs</h1>
      <div>{item.jobId}</div>
      <p>{item.title}</p>
      <p>{item.dateTime}</p>
      <p>{item.neighbourhood}</p>
      <p>{item.kakiName}</p>
      <p>{kakiAddress}</p>
      <p>{kakiContact}</p>
      <p>{item.description}</p>
      <p>{item.priority}</p>
      <p>{item.pax}</p>
      <p>{item.specialRequirements}</p>
      <p>{volunteers}</p>
    </div>
  );
};

export default JobAdmin;
