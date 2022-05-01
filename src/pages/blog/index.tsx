import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import PostListItem from 'src/components/pages/blog/PostListItem'
import { getAllPostsData } from 'src/lib/Post'

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <ul className='m-10'>
        {posts && posts.map(post => <PostListItem key={post.id} post={post} />)}
      </ul>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPostsData()

  return {
    props: {
      posts,
    },
  }
}

export default Blog
