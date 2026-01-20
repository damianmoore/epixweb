import fetch from 'isomorphic-unfetch';


export default async (req, res) => {
  const { slug } = req.query
  let url = `http://127.0.0.1:8000/api/blog/${slug}/`

  const postResp = await fetch(url)
  const postData = await postResp.json()

  res.status(200).json(postData)
}
