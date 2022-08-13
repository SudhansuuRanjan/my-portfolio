import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex flex-row fixed bg-orange-100  backdrop-filter backdrop-blur-md w-[100vw] items-center justify-center text-gray-800">
      <div className="flex items-center justify-between w-[100%] md:w-[48em] px-4 md:px-2 py-2">
        <div className="flex items-center ">
          <p className="text-xl font-bold mr-2">
            <Link href="/">🐾Sudhanshu Ranjan</Link>
          </p>
          <ul className="md:flex hidden">
            <li className="hover:underline mx-3">
              <Link href="/works">Works</Link>
            </li>
            <li className="hover:underline mx-3">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="hover:underline mx-3">
              <a
                href="https://github.com/SudhansuuRanjan/my-portfolio"
                className="flex items-center"
              >
                <AiFillGithub className="mr-1" />
                Source
              </a>
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
            onClick={() => {
              if (menu == false) {
                setMenu(true);
              } else {
                setMenu(false);
              }
            }}
            className="md:hidden text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>
      {menu && (
        <div className="md:hidden fixed mt-[16rem] right-0 bg-white rounded-md w-[12rem] py-2 mr-5 shadow-md text-gray-800">
          <ul>
            <li>
              <Link href="/">
                <button
                  onClick={() => setMenu(false)}
                  className="hover:underline hover:border-sky-300  border-4 border-white py-1.5 w-[100%] pl-4 cursor-pointer hover:bg-sky-50 text-left"
                >
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <button
                  onClick={() => setMenu(false)}
                  className="hover:underline hover:border-sky-300  border-4 border-white py-1.5 w-[100%] pl-4 cursor-pointer hover:bg-sky-50 text-left"
                >
                  Works
                </button>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <button
                  onClick={() => setMenu(false)}
                  className="hover:underline hover:border-sky-300  border-4 border-white py-1.5 w-[100%] pl-4 cursor-pointer hover:bg-sky-50 text-left"
                >
                  Posts
                </button>
              </Link>
            </li>
            <li>
                <a
                href="https://github.com/SudhansuuRanjan/my-portfolio"
                target="blank"
              >
                <button
                  onClick={() => setMenu(false)}
                  className="hover:underline hover:border-sky-300  border-4 border-white py-1.5 w-[100%] pl-4 cursor-pointer hover:bg-sky-50 text-left flex items-center"
                >
                <AiFillGithub className="mr-1" />
                Source
                </button>
                </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
