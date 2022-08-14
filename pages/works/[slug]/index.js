import { server } from "../../../config";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";
import Link from "next/link";
import axios from "axios";

const project = ({work}) => {
  return (
    <div className="w-[100%] md:w-[34em] m-[auto] text-gray-800 px-[1em] dark:text-white pt-5">
      <Meta title={work.name} description={work.details} />
      <div
        data-aos="fade-up"
        className="flex items-center w-[100%] md:w-[34em] text-left px-[1em] my-4"
      >
        <Link href="/works">
          <p className="text-sky-500 cursor-pointer dark:text-pink-500 font-medium text-lg mr-2">
            Works
          </p>
        </Link>
        <p className="mr-2 text-sm"> &gt; </p>
        <h1 className="text-xl font-bold mr-2"> {work.name}</h1>
        <p className="py-[1px] px-[0.25rem] text-sm rounded-md font-semibold dark:bg-gray-600 bg-gray-300">
          {work.date}
        </p>
      </div>

      <div
        className=" w-[100%] md:w-[34em] text-left px-[1em] my-4"
      >
        <div>
          <p className="indent-5  text-justify pb-5">{work.details}</p>
        </div>
        <div data-aos="fade-up" className="flex items-start py-1">
          <h2 className="py-[1px] px-[0.25rem] text-sm rounded dark:bg-green-800 bg-green-200 dark:text-green-100 text-green-800 mr-2 font-semibold">
            STACK
          </h2>{" "}
          <h3>{work.stack}</h3>
        </div>
        <div data-aos="fade-up" className="flex items-start py-1">
          <h2 className="py-[2px] px-[0.25rem] text-sm rounded dark:bg-green-800 bg-green-200 dark:text-green-100 text-green-800 mr-2 font-semibold">
            PLATFORM
          </h2>{" "}
          <h3>{work.platform}</h3>
        </div>
        {work.blog !== "" ? (
          <div data-aos="fade-up" className="flex items-start py-1">
            <h2 className="py-[2px] px-[0.25rem] text-sm rounded dark:bg-green-800 bg-green-200 dark:text-green-100 text-green-800 mr-2 font-semibold">
              BLOG
            </h2>{" "}
            <a
              href={work.blog}
              target="blank"
              class="text-sky-500 cursor-pointer dark:text-pink-500"
            >
              {work.blog}
            </a>
          </div>
        ) : (
          <></>
        )}

        <h1 data-aos="fade-up" className="text-center font-semibold text-lg my-4">Links</h1>

        <div data-aos="fade-up" className="flex items-start py-1">
          <h2 className="py-[2px] px-[0.25rem] text-sm rounded dark:bg-green-800 bg-green-200 dark:text-green-100 text-green-800 mr-2 font-semibold">
            LIVE
          </h2>{" "}
          <a
            href={work.website}
            target="blank"
            class="text-sky-500 cursor-pointer dark:text-pink-500"
          >
            {work.website}
          </a>
        </div>

        <div data-aos="fade-up" className="flex items-start py-1">
          <h2 className="py-[2px] px-[0.25rem] text-sm rounded dark:bg-green-800 bg-green-200 dark:text-green-100 text-green-800 mr-2 font-semibold">
            REPO
          </h2>{" "}
          <a
            href={work.repo}
            target="blank"
            class="text-sky-500 cursor-pointer dark:text-pink-500"
          >
            {work.repo}
          </a>
        </div>

        <h1 data-aos="fade-up" className="text-center font-semibold text-lg my-4">Snapshot(s)</h1>

        {work.images.map((image, index) => {
          return (
            <div data-aos="fade-up" key={index} className="p-5 m-[auto] overflow-hidden">
              <img
                className="object-cover hover:scale-[1.02] rounded-xl"
                src={image.imgUrl}
                alt="project_image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/works/${context.params.slug}`);
  const work = await res.json();

  return {
    props: {
      work,
    },
  };
};

export default project;
