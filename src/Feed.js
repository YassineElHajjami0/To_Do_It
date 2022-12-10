import React from 'react'
import Post from './Post'

const Feed = ({posts, handledelete}) => {
  return (
	<main className='postsize'>
		{posts.map(e =>(
		<Post key={e.id} post={e} handledelete={handledelete} />
		))}
	</main>
  )
}

export default Feed
