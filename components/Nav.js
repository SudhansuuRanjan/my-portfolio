import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { AiFillGithub } from 'react-icons/ai'

const Nav = () => {

  return (
    <div className="flex flex-row fixed bg-orange-200  backdrop-filter backdrop-blur-md w-[100vw] items-center justify-center text-gray-800">
      <div className="flex items-center justify-between w-[100%] md:w-[48em] px-2 py-1.5">
        <div className="flex items-center ">
          <p className="text-xl font-bold mr-2"><Link href="/">🐾Sudhanshu Ranjan</Link></p>
          <ul className="md:flex hidden">
            <li className="hover:underline mx-3">
              <Link href="/works">Works</Link>
            </li>
            <li className="hover:underline mx-3">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="hover:underline mx-3">
              <a href="https://github.com/SudhansuuRanjan/my-portfolio" className="flex items-center"><AiFillGithub className="mr-1"/>Source</a>
            </li>
          </ul>
        </div>
        <div>
          <button
            type="button"
            className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-lg p-2.5 text-center inline-flex items-center mr-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
          >
            <MdDarkMode />
            <span className="sr-only">Icon description</span>
          </button>

          <button
            type="button"
            className="md:hidden block text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-2.5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
