import React from 'react';
import {Link} from 'react-router-dom';
 import {FaSearch} from 'react-icons/fa';
const Nav = ({search, setSearch}) => {
  return (
	<nav className='Nav'>
		<form>
			<input
				placeholder='search'
				id='search'
				type='text'
				value={search}
				onChange={(e)=>setSearch(e.target.value)}
			/>
			<FaSearch className='searchico'/>
		</form>
		<ul>
			<li><Link className='link' to="/">Home</Link></li>
			<li><Link className='link' to="/post">Post</Link></li>
			<li><Link className='link' to="/about">About</Link></li>
			<li><span></span><span></span><span></span></li>
		</ul>
	</nav>
  )
}

export default Nav
