import { postsUrl } from 'src/constants/Post'
import { Post } from 'src/types/post'

export const getAllPostsData = async () => {
  const res = await fetch(postsUrl)
  const posts: Post[] = await res.json()
  return posts
}

export const getAllPostIds = async () => {
  const posts = await getAllPostsData()
  const ids = posts.map(post => {
    return {
      params: {
        id: post.id.toString(),
      },
    }
  })
  return ids
}

export const getPostData = async (id: string) => {
  const res = await fetch(`${postsUrl}/${id}`)
  const post: Post = await res.json()
  return post
}
