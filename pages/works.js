import React from "react";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";
import { Works } from "../data";
import Meta from "../components/Meta";

const works = () => {
  // console.log(Works);
  return (
    <>
    <Meta title={"Sudhanshu Ranjan - Works"} description={"Sudhanshu's Works."}/>
    <div className="w-[100%] md:w-[34em] m-[auto] px-[2em] md:px-[1em] pt-4">
      <Title title="My Works" />
      <div className="flex flex-wrap items-start justify-between">
        {Works.map((work, index) => {
          return (
            <ProjectCard
              key={index}
              details={work.details}
              imgUrl={work.images[0].imgUrl}
              title={work.name}
              slug={work.slug}
            />
          );
        })}
      </div>
    </div>
    </>
  );
};

export default works;
