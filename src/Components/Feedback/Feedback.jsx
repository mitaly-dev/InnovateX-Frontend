import React, { useState } from "react";
import { getUserInfo } from "../../utils/local-storage";

const Feedback = () => {
  const [feedback, setFeedback] = useState();
  const userInfo = getUserInfo();

  const submitFeedback = (e) => {
    e.preventDefault();
    console.log("", feedback);
  };
  return (
    <div className="mb-3 bg-[#00000081] px-4 sm:px-8 lg:px-12 py-28 my-20 relative w-full">
      <h3 className="font-semibold text-xl ">Submit your Feedback</h3>
      <form onSubmit={(e) => submitFeedback(e)}>
        <input
          type="text"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="py-2 px-2 rounded-lg border w-6/12"
        />
        <button
          type="submit"
          className="px-3 py-2 bg-black text-white rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
