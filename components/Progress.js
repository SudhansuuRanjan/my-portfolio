const Progress = ({percent, info , skill , skillLogo}) => {
  return (
    <div className="my-2 md:my-4">
        <div className="flex my-1 items-center">
           <div className="flex items-center justify-center text-center bg-gray-800 dark:bg-pink-500 rounded-md h-10 w-10 mr-2">
            <p className="text-2xl font-semibold text-white">{skillLogo}</p>
           </div> 
           <div>
             <h2 className="text-xl font-medium">{skill}</h2>
             <p className="text-[#2C7A7B] dark:text-[#5fd1d3] text-sm mt-[-0.2rem]">{info}</p>
           </div>
        </div>
        <div className="md:w-[15rem] w-[20rem] h-3 bg-white border-gray-800 rounded border-2 box-content">
            <div className={`h-3 pb-[1px] mt-[-1px] ml-[-1px] bg-gray-800 dark:bg-[#399c9e] box-content rounded-bl  text-white flex items-center justify-end w-[${percent}]`}>
                <p className="text-xs">{percent}</p>
            </div>
        </div>
    </div>
  )
}

export default Progress