import React from "react";
import Activity from "./Activity";
import backgroundImage from "../../assets/images/background-image.jpg";

const Activities = () => {
  const activities = [
    {
      id: 1,
      icon: "https://i.ibb.co/Lhs0qMj/calendar-2.png",
      title: "241",
      description: "Usefull Sessions",
    },
    {
      id: 2,
      icon: "https://i.ibb.co/jyzKJLQ/mic.png",
      title: "137",
      description: "Great Speakers",
    },
    {
      id: 3,
      icon: "https://i.ibb.co/4TqSksK/sofa.png",
      title: "241",
      description: "Usefull Sessions",
    },
    {
      id: 4,
      icon: "https://i.ibb.co/LChx7Gs/man.png",
      title: "137",
      description: "Great Speakers",
    },
  ];

  return (
    <section className="px-4 sm:px-8 lg:px-12 py-28 my-20 relative">
      <img
        src={backgroundImage}
        className="absolute inset-0 top-0 w-full h-full"
        alt=""
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-white bg-transparent w-full absolute top-2/4 left-0">
        {activities.map((activity) => (
          <Activity key={activity._id} activity={activity}></Activity>
        ))}
      </div>
    </section>
  );
};

export default Activities;
