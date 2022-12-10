import React from 'react'
import Feed from './Feed'

const Home = ({posts, handledelete}) => {
	return (
		<main>
			{posts.length ? (<Feed posts={posts} handledelete={handledelete} />) : (<p className='nopost'>No Posts To Display!</p>) }
		</main>
	)
}

export default Home
