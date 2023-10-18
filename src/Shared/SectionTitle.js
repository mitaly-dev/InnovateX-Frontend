import React from "react";

const SectionTitle = ({ content }) => {
  const { heads, title } = content;
  return (
    <div className="font-roboto text-center ">
      <p className="text-primary text-lg italic mb-2">{heads}</p>
      <p className="text-4xl font-semibold pb-7 sm:pb-14 lg:pb-16 text-secondary capitalize">
        {title}
      </p>
    </div>
  );
};

export default SectionTitle;
