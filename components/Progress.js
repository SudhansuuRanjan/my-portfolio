import React from 'react'

const Progress = ({percent, info , skill , skillLogo}) => {
    console.log(typeof(percent))
  return (
    <div className="my-2 md:my-4">
        <div className="flex my-1 items-center">
           <div className="flex items-center justify-center text-center bg-gray-800 rounded-md h-10 w-10 mr-2">
            <p className="text-2xl font-semibold text-white">Ps</p>
           </div> 
           <div>
             <h2 className="text-xl font-medium">{skill}</h2>
             <p className="text-gray-700 text-sm mt-[-0.2rem]">{info}</p>
           </div>
        </div>
        <div className="md:w-[15rem] w-[20rem] h-3 bg-white border-gray-800 rounded border-2 box-content">
            <div className={`h-3 pb-[1px] mt-[-1px] ml-[-1px] bg-gray-800 box-content rounded-bl  text-white flex items-center justify-end w-[${percent}]`}>
                <p className="text-xs">{percent}</p>
            </div>
        </div>
    </div>
  )
}

export default Progress