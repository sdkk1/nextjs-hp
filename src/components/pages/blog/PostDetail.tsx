import Link from 'next/link'

import { Post } from 'src/types/post'

type Props = {
  post: Post
}

const PostDetail = ({ post }: Props) => {
  return (
    <>
      <p className='m-4'>ID: {post.id}</p>
      <p className='mb-8 text-xl font-bold'>{post.title}</p>
      <p className='mb-8 px-10'>{post.body}</p>
      <Link href='/blog'>
        <a className='cursor-pointer border-b border-blue-500 text-blue-500 hover:bg-gray-200'>
          Back to Blog Page
        </a>
      </Link>
    </>
  )
}

export default PostDetail
