import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SectionTop from "../../Shared/SectionTop";
import { useTitle } from "../../Hook/useTitle";

const Blog = () => {
  useTitle("Blog");
  const [blogs, setBlog] = useState([
    {
      id: 1,
      question: "Business Conference Events",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      question: "Meetup Conference 2015",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      question: "Business Events 2015",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-background min-h-screen items-center">
      <SectionTop title="Frequently Asked Questions"></SectionTop>
      <div
        className="container flex flex-col justify-center p-4 mx-auto md:p-8"
        data-aos="fade-up"
      >
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          {blogs.map((blog) => {
            const { id, answer, question } = blog;
            return (
              <details key={id}>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  {question}
                </summary>
                <div className="px-4 pb-4">
                  <p>{answer}</p>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
