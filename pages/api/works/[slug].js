import { Works } from '../../../data'

export default function handler({ query: { slug } }, res) {
  const filtered = Works.filter((work) =>  work.slug === slug)

  if (filtered.length > 0) {
    res.status(200).json(JSON.stringify(filtered[0]))
  } else {
    res
      .status(404)
      .json({ message: `Works with the slug of ${slug} is not found` })
  }
}