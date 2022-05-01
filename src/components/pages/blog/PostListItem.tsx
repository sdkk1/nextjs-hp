import Link from 'next/link'

import { Post } from 'src/types/post'

type Props = {
  post: Post
}

const PostListItem = ({ post }: Props) => {
  return (
    <div>
      <span>{post.id}:</span>
      <Link href={`/posts/${post.id}`}>
        <a className='ml-2 cursor-pointer border-b border-blue-500 text-blue-500 hover:bg-gray-200'>
          {post.title}
        </a>
      </Link>
    </div>
  )
}

export default PostListItem
