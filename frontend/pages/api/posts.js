import fetch from 'isomorphic-unfetch';


export default async (req, res) => {
  let url = `http://127.0.0.1:8000/api/posts/`

  const postResp = await fetch(url)
  const postData = await postResp.json()

  const responseData = {
    results: postData
  }
  res.status(200).json(responseData)
}
