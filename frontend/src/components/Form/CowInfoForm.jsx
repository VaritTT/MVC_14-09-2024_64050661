// External Dependencies
import React, { useState } from "react";

// Material-tailwind
import { Button, Input } from "@material-tailwind/react";

const CowInfoForm = ({ onCowSearch }) => {
  const [cowID, setCowID] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleCowIDChange = (e) => {
    const id = e.target.value;
    setCowID(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate ID (8 digits and not start with 0)
    // ^: Start
    // [1-9]: First character is number 1 to 9 (not start with 0)
    // [0-9]{7}: 7 more digits is number 0 to 9 (total length 8 digits)
    // $: End
    if (!/^[1-9][0-9]{7}$/.test(cowID)) {
      setErrorMsg("ID must be 8 digits and can't start with 0.");
      return;
    }

    setErrorMsg(""); // no error message
    onCowSearch(cowID); // send cowID to parent
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="w-96">
            <Input
              type="text"
              name="id"
              label="Enter 8-digit ID & start with 1-9"
              value={cowID.id}
              onChange={handleCowIDChange}
              placeholder="Enter 8-digit ID & start with 1-9"
              className="border rounded-md"
            />
          </div>
          <Button
            type="submit"
            className="px-2 py-2 rounded-lg text-white bg-green-500 hover:bg-green-600 active:bg-green-700"
          >
            Search Cow
          </Button>
        </div>
        <div className="text-sm text-red-500 font-semibold">{errorMsg}</div>
      </div>
    </form>
  );
};

export default CowInfoForm;
