import React, { useState } from "react";
import { getUserInfo } from "../../utils/local-storage";
import { useCreateFeedbackMutation } from "../../redux/api/feedback";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Feedback = () => {
  const [feedback, setFeedback] = useState();
  const userInfo = getUserInfo();
  const [createFeedback, { isSuccess }] = useCreateFeedbackMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Feedback submit successfully");
      setFeedback("");
    }
  }, [isSuccess]);
  const submitFeedback = (e) => {
    e.preventDefault();
    if (!userInfo?.userId) {
      return toast.error("User not found,please login");
    }
    createFeedback({ userId: userInfo?.userId, feedback });
  };
  return (
    <div className="mb-3 bg-[#00000081] px-4 sm:px-8 lg:px-12 py-16 my-10 relative w-full text-center">
      <h3 className="font-semibold text-xl font-roboto mb-3">
        Submit your Feedback
      </h3>
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
