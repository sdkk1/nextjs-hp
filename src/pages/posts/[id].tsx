import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Head from 'next/head'

import PostDetail from 'src/components/pages/blog/PostDetail'
import { getAllPostIds, getPostData } from 'src/lib/Post'
import { Post } from 'src/types/post'

type Props = {
  post: Post
}
type Params = {
  id: string
} & ParsedUrlQuery

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      {post && <PostDetail post={post} />}
    </>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = await getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const post = await getPostData(params?.id ?? '')

  return {
    props: {
      post,
    },
  }
}

export default Post
