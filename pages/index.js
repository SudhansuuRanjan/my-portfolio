import Image from "next/image";
import Title from "../components/Title";
import Link from "next/link";
import Progress from "../components/Progress";
import { Skill, Skills } from "../data";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMail,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Home() {
  const biodata = [
    {
      date: "2000",
      event: "Born in Gaya (Bihar), India.",
    },
    {
      date: "2019",
      event:
        "Completed my Secondary School Education from British English School, Gaya, Bihar.",
    },
    {
      date: "2020 to present",
      event:
        "Started the Bachlor's Program in the Electrical Engineering Department at Narional Institute of Technology, Patna.",
    },
  ];

  return (
    <div className="w-[100%] md:w-[34em] m-[auto] text-gray-800 dark:text-white">
      <section className="flex flex-col items-center justify-center mb-4 mt-10">
        <div
          data-aos="fade-up"
          className=" w-[100%] md:w-[34em] text-center px-[1em] my-4"
        >
          <p className="dark:bg-gray-600 bg-pink-50  px-10 py-3 rounded-md">
            Hello, I&apos;m a frontend developer based in India!
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="flex  justify-between  w-[100%] md:w-[34em] px-[2em] md:px-[1em] mt-10"
        >
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold mt-2">
              Sudhanshu Ranjan
            </h1>
            <p className="text-sm md:text-base">
              ( FrontEnd Developer / Designer )
            </p>
          </div>
          <div data-aos="flip-up">
            <img
              src="https://avatars.githubusercontent.com/u/77230416?v=4"
              alt="profile"
              className="rounded-full h-[5rem] md:h-[6.5rem] border-4 border-white border-y-indigo-500 dark:border-y-pink-500 "
            />
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="w-[100%] md:w-[34em] m-[auto] px-[2em] md:px-[1em] mb-4 mt-10"
      >
        <Title title="About" />
        <p className="indent-5 py-3 text-justify">
          I am a full-stack developer based in India with a passion for building
          digital services/stuff. I have a knack for all things building
          products, from planning and designing all the way to solving real-life
          problems with code. When not online, I love hanging out with his
          camera. Currently, he is living off of his own product called{" "}
          <a
            href="www.google.com"
            target="blank"
            className="text-blue-500 dark:text-pink-500"
          >
            Inkdrop
          </a>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <a
            href="www.google.com"
            target="blank"
            className="text-blue-500 dark:text-pink-500"
          >
            Dev as Life
          </a>
          &quot; has more than 100k subscribers.
        </p>
      </section>

      <section
        data-aos="fade-up"
        className="w-[100%] md:w-[34em] m-[auto] px-[2em] md:px-[1em] mb-4 mt-10"
      >
        <Title title="Projects" />
        <p className="indent-5 py-3 text-justify">
          The best way to learn something is to build some awesome projects
          based on what you have learnt. I also follow the same and make some
          cool projects using the technologies I have learnt.
        </p>
        <div className="flex items-center justify-center">
          <Link href="/works">
            <button
              type="button"
              className="text-white  hover:bg-[#4caaab] border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:border-gray-700 dark:text-gray-800 dark:hover:bg-[#53b9ba] mr-2 mb-2 bg-[#309799] dark:bg-[#5fd1d3]"
            >
              Projects {" >"}
            </button>
          </Link>
          <a href="Sudhanshu_Resume.pdf" download>
            <button
              type="button"
              className="text-white bg-[#2557D6] dark:bg-pink-400 dark:hover:bg-pink-500 hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:focus:ring-pink-400/50 mr-2 mb-2 dark:text-gray-800"
            >
              Resume {" >"}
            </button>
          </a>
        </div>
      </section>

      {/* Bio Section*/}
      <section
        data-aos="fade-up"
        className="w-[100%] md:w-[34em] m-[auto] px-[2em] md:px-[1em] mb-4 mt-10"
      >
        <Title title="Bio" />
        <table className="my-3">
          <tbody>
            {biodata.map((bio, index) => {
              return (
                <tr key={index}>
                  <th className="align-top pr-2 text-justify">{bio.date}</th>
                  <td className="align-top text-justify">{bio.event}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      {/* Hobbies */}
      <section
        data-aos="fade-up"
        className="w-[100%] md:w-[34em] m-[auto] px-[2em] md:px-[1em] pb-4 mt-10"
      >
        <Title title="I ♥" />
        <p className="indent-5 py-3 text-justify">
          Anime, Documentry, Music, Books, Shows, Machine Learning.
        </p>
      </section>

      {/* Achievements */}

      <section
        data-aos="fade-up"
        className="w-[100%] md:w-[34em] m-[auto] px-[2em] md:px-[1em] pb-4 mt-10"
      >
        <Title title="Experience" />
        <div data-aos="fade-up">
          <ul className="list-[square] p-5 pb-0">
            <li>
              <h1 className="text-xl font-bold text-gray-800 dark:text-pink-500">
                Hackaruto (Founder & Tech Lead)
              </h1>
              <p className="text-xs text-[#2C7A7B] dark:text-[#5fd1d3]">
                An open source club affiliated to Hackclub
              </p>
              <ul className="list-disc ml-5 text-md mt-1">
                <li>Founded Hackaruto Club</li>
                <li>
                  Designed and developed the official website of Hackaruto ( an
                  open source club affiliated to Hackclub)
                </li>
                <li>
                  Organized sessions on hot topics like Web3, Open Source.
                </li>
                <li>
                  Conducted hands on session on Github fundamentals and guided
                  juniors about Open Source.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div data-aos="fade-up">
          <ul className="list-[square] p-5 pb-0">
            <li>
              <h1 className="text-xl font-bold text-gray-800 dark:text-pink-500">
                HackSlash (Projects Lead)
              </h1>
              <p className="text-xs text-[#2C7A7B] dark:text-[#5fd1d3]">
                Coding club at NIT, Patna
              </p>
              <ul className="list-disc ml-5 text-md mt-1">
                <li>Built Hack-Nitp (Hackathon) website.</li>
                <li>Worked on full stack projects.</li>
                <li>Made UI of 3 apps and Hackslash Website.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <ul className="list-[square] p-5 pb-0">
            <li>
              <h1 className="text-xl font-bold text-gray-800 dark:text-pink-500">
                Robotics Club (Web Coordinator)
              </h1>
              <p className="text-xs text-[#2C7A7B] dark:text-[#5fd1d3]">
                Robotics club at NIT, Patna
              </p>
              <ul className="list-disc ml-5 text-md mt-1">
                <li>
                  Contributed to official website of robotics club and currently
                  maintaining it.
                </li>
                <li>Worked on various IoT projects.</li>
                <li>Organized events and guided peers.</li>
              </ul>
            </li>
          </ul>
        </div>

      </section>

      {/* Skills Section */}

      <section
        data-aos="fade-up"
        className="w-[100%] md:w-[34em] m-[auto] px-[2em] md:px-[1em] mb-4 mt-10"
      >
        <Title title="Skills" />
        <div className="flex flex-wrap items-center justify-center  m-[auto] p-10">
          {/* {Skills.map((skill, index) => {
            return (
              <Progress
                key={index}
                info={skill.text}
                percent={skill.percent}
                skill={skill.skill}
                skillLogo={skill.skillLogo}
              />
            );
          })} */}
          <img
            data-aos="fade-up"
            className="h-[4rem] m-2"
            src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667"
            alt="skill-image"
          />
          <img
            data-aos="fade-up"
            className="h-[4rem] m-2"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="skill-image"
          />
          <img
            data-aos="fade-up"
            className="h-[4rem] m-2"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="skill-image"
          />
          <img
            data-aos="fade-up"
            className="h-[4rem] m-2"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="skill-image"
          />
          <img
            data-aos="fade-up"
            className="h-[4rem] m-2"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="skill-image"
          />
          <img
            data-aos="fade-up"
            className="h-[4rem] m-2"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="skill-image"
          />
          <img
            data-aos="fade-up"
            className="h-[3rem] m-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/311px-Nextjs-logo.svg.png?20190307203525"
            alt="skill-image"
          />
          <img
            data-aos="fade-up"
            className="h-[3rem] m-2"
            src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg"
            alt="skill-image"
          />
          <img
            data-aos="fade-up"
            className="h-[4rem] m-2"
            src="https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667"
            alt="skill-image"
          />
          <img
            data-aos="fade-up"
            className="h-[4rem] m-2"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
            alt="skill-image"
          />
          <img
            data-aos="fade-up"
            className="h-[4rem] m-2"
            src="https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667"
            alt="skill-image"
          />
          <img
            data-aos="fade-up"
            className="h-[4rem] m-2"
            src="https://camo.githubusercontent.com/b3a1cdd20d0f308634ddd4598cdaa729c2d77047f51e66fa7206b9b4bac94c23/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61726475696e6f2d312e737667"
            alt="skill-image"
          />
        </div>
      </section>

      {/* Socials */}
      <section
        data-aos="fade-up"
        className="w-[100%] md:w-[34em] m-[auto] px-[2em] md:px-[1em] pb-4 mt-10"
      >
        <Title title="On the web" />
        <ul className="pt-4">
          <li className="hover:bg-cyan-100 dark:hover:bg-cyan-900 py-2 px-6 w-fit rounded-md ">
            <a
              href="mailto:sudhanshur.ug20.ee@nitp.ac.in"
              className="flex items-center text-[#2C7A7B] dark:text-[#5fd1d3] font-medium"
            >
              <AiFillMail className="mr-2" />
              <p className="hover:underline underline-offset-2 decoration-sky-400 dark:decoration-pink-400 decoration-3">
                sudhanshur.ug20.ee@nitp.ac.in
              </p>
            </a>
          </li>
          <li className="hover:bg-cyan-100 dark:hover:bg-cyan-900 py-2 px-6 w-fit rounded-md ">
            <a
              href="https://github.com/SudhansuuRanjan"
              className="flex items-center text-[#2C7A7B] dark:text-[#5fd1d3] font-medium"
            >
              <AiFillGithub className="mr-2" />
              <p className="hover:underline underline-offset-2 decoration-sky-400 dark:decoration-pink-400 decoration-3">
                @SudhansuuRanjan
              </p>
            </a>
          </li>
          <li className="hover:bg-cyan-100 dark:hover:bg-cyan-900 py-2 px-6 w-fit rounded-md ">
            <a
              href="https://twitter.com/Sudhanss_u"
              className="flex items-center text-[#2C7A7B] dark:text-[#5fd1d3] font-medium"
            >
              <AiOutlineTwitter className="mr-2" />
              <p className="hover:underline underline-offset-2 decoration-sky-400 dark:decoration-pink-400 decoration-3">
                @Sudhanss_u
              </p>
            </a>
          </li>
          <li className="hover:bg-cyan-100 dark:hover:bg-cyan-900 py-2 px-6 w-fit rounded-md ">
            <a
              href="https://instagram.com/sudhanss_uu"
              className="flex items-center text-[#2C7A7B] dark:text-[#5fd1d3] font-medium"
            >
              <AiOutlineInstagram className="mr-2" />
              <p className="hover:underline underline-offset-2 decoration-sky-400 dark:decoration-pink-400 decoration-3">
                @sudhanss_uu
              </p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
