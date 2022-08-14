import { useRouter } from "next/router";
import { Works } from "../data";
import { useState } from 'react'

const Work = () => {
  const [Data, setData] = useState()
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);


  return(
  <div>
    slug : {slug}
  </div>
  )
};

export default Work;



