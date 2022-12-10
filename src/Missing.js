import React from 'react'
import {Link} from 'react-router-dom';
import {FaSadTear} from 'react-icons/fa'
import {RiEmotionHappyLine} from 'react-icons/ri'
import {FaTrashAlt} from 'react-icons/fa'


const Missing = () => {
	return (
		<main style={{padding: "10px"}}>
			<p style={{color:"tomato"}}>Page not found!</p>
			<p className='postdate'>Well that's dissapointing <FaSadTear /> </p>
			<Link className='visitourhome' to='/'>Visit our Home <RiEmotionHappyLine /></Link>
		</main>
	)
}

export default Missing
