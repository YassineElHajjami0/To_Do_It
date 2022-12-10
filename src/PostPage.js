import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {FaSadTear} from 'react-icons/fa'
import {RiEmotionHappyLine} from 'react-icons/ri'
import {FaTrashAlt} from 'react-icons/fa'

const POSTPAGE = ({posts, handledelete}) => {
	const {id} = useParams();
	const post = posts.find(post => (post.id).toString() === id)
	return (
		<main className='postpage'>
			{post &&
			<>
				<h2 className='posttitle'>{post.title}</h2>
				<p className='postdate'>{post.datetime}</p>
				<p className='postbody'>{post.body}</p>
				<button
				onClick={() => handledelete(post.id)}
				className='deletepost'>delete <FaTrashAlt className='trash' /></button>
				<Link to={`/edit/${post.id}`}><button className='Updatepost'>Update post</button></Link>
			</>
			}
			{!post &&
				<>
					<p style={{color:"tomato"}}>Post not found!</p>
					<p className='postdate'>Well that's dissapointing <FaSadTear /> </p>
					<Link className='visitourhome' to='/'>Visit our Home <RiEmotionHappyLine /></Link>
				</>
			}
		</main>
	)
}

export default POSTPAGE
