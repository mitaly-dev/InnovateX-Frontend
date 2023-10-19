import React from "react";

const SectionTitle = ({ content }) => {
  const { title } = content;
  return (
    <h3 className="font-roboto text-center text-4xl font-semibold pb-3 sm:pb-8 lg:pb-8 text-secondary capitalize">
      {title}
    </h3>
  );
};

export default SectionTitle;
