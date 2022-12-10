import React from 'react';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from 'react-icons/fa';

const Post = ({post, handledelete}) => {
  return (
	<article className='posts'>
		<Link className='potslinks' to={`/post/${post.id}`}>
			<h2 className='posttitle'>{post.title}</h2>
			<p className='postdate'>{post.datetime}</p>
		</Link>
		<p className='postbody'>
			{(post.body).length < 25 ? post.body : `${(post.body).slice(0, 25)}...`}
		</p>
		<button onClick={() => handledelete(post.id)} className="trashinhome"><FaTrashAlt /></button>
	</article>
  )
}

export default Post
