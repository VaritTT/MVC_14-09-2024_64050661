// External Dependencies
import axios from "axios";
import React, { useEffect, useState } from "react";

// Components
import CowForm from "../components/Form/CowInfoForm";

const CowManagement = () => {
  const [cowData, setCowData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  // search Cow milk liter by ID
  const handleCowSearchByID = (cowID) => {
    axios
      .post("http://localhost:5000/cows", { cowID }) // send ID
      .then((response) => {
        if (response.status === 200) {
          setCowData(response.data.message || {});
        } else {
          setErrorMsg(response.data.message || "");
          setCowData({});
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setErrorMsg(error.response.data.message || ""); // set error message to display
        setCowData({});
        console.error("An error occurred: ", error.message || "Something went wrong");
      });
  };

  return (
    <div>
      <h1>Find milk liter by ID</h1>
      <div className="mt-4">
        <CowForm onCowSearch={handleCowSearchByID} />
      </div>
      <ul className="list-disc bg-gray-200 rounded-lg pb-4 pt-3 mt-5 px-5">
        {cowData.cowLiter ? (
          Object.keys(cowData.cowLiter).map((keyName) => (
            <li key={keyName} className="mb-2 capitalize">
              {keyName} - {cowData.cowLiter[keyName]} liter
            </li>
          ))
        ) : (
          // when have error message
          <div className="text-red-500 font-semibold">{errorMsg}</div>
        )}
        {cowData.totalLiter && <li className="mb-2 capitalize">Total - {cowData.totalLiter} liter</li>}
      </ul>
    </div>
  );
};

export default CowManagement;
