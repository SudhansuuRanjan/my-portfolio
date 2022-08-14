import { server } from '../../../config'
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";
import Link from 'next/link'

const project = ({ work }) => {
  //   const router = useRouter();
  //   const { slug } = router.query;
  return (
    <>
      <Meta title={work.name} description={work.details} />
      <h1>{work.name}</h1>
      <p>{work.details}</p>
      <br />
      <Link href="/works">Go Back</Link>
    </>
  );
};


export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/works/${context.params.slug}`)

  const work = await res.json()

  return {
    props: {
      work,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/works`)

  const works = await res.json()

  const slugs = works.map((work) => work.slug)
  const paths =  slugs.map((slug) => ({ params: { slug: slug.toString() } }))

  return {
    paths,
    fallback: false,
  }
}


export default project;
