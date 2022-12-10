import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {FaSadTear} from 'react-icons/fa'
import {RiEmotionHappyLine} from 'react-icons/ri'
import {FaTrashAlt} from 'react-icons/fa'

const UpdatePost = ({posts, editTitle, setEditTitle, editBody, setEditBody, handleEdit}) => {
	const {id} = useParams();
	const post = posts.find(e => (e.id).toString() === id);
	useEffect(() => {
		if(post)
		{
			setEditTitle(post.title);
			setEditBody(post.body);
		}
	},[])
	return (
	<main className='updatePost'>
				{editTitle &&
				<>
						<form className='formnewpost' onSubmit={(e)=>e.preventDefault()}>
					<label htmlFor='title'>Title</label>
					<input id='title'  type='text' placeholder='title'
					value={editTitle}
					required
					onChange={(e)=>{setEditTitle(e.target.value)}}
					/>
					<label htmlFor='title'>Body</label>
					<textarea
					required
					type='text' placeholder='body'
					value={editBody}
					onChange={(e)=>{setEditBody(e.target.value)}}
					/>
					<button type='submit' onClick={() => handleEdit(post.id)}>Update</button>
					</form>
				</>}
				{ !editTitle &&
					<>
						<p style={{color:"tomato"}}>Post not found!</p>
						<p className='postdate'>Well that's dissapointing <FaSadTear /> </p>
						<Link className='visitourhome' to='/'>Visit our Home <RiEmotionHappyLine /></Link>
					</>
				}
		</main>
  )
}

export default UpdatePost
