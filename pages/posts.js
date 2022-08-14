import React from "react";
import { Blogs } from "../data";
import Title from "../components/Title";
import PostCard from "../components/PostCard";
import Meta from "../components/Meta";

const posts = () => {
  return (
    <>
    <Meta title={"Sudhanshu Ranjan - Posts"} description={"Sudhanshu's Posts."}/>
    <div className="w-[100%] md:w-[34em] m-[auto] px-[2em] md:px-[1em] pt-4">
      <Title title="Popular Posts" />
      <div className="flex flex-wrap items-start justify-between">
        {Blogs.map((blog, index) => {
          return (
            <PostCard
              key={index}
              infourl={blog.link}
              details={blog.name}
              imgUrl={blog.imgUrl}
            />
          );
        })}
      </div>
    </div>
    </>
  );
};

export default posts;
