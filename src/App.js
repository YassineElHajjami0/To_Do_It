import React, { useEffect } from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import About from './About';
import PostPage from './PostPage';
import Missing from './Missing';
import Boobles from './Boobles';
import UpdatePost from './UpdatePost';
import {Route, Routes, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import api from './api/posts';

function App() {
	const [posts, setposts] = useState([])
	const [search, setsearch] = useState('');
	const [searched, setsearchedres] = useState([]);
	const history = useNavigate();
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [editTitle, setEditTitle] = useState(''); 
	const [editBody, setEditBody] = useState('');
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		const fetchdata = async() => {
			try {
				const response = await api.get('/posts');
				setposts(response.data);
			} catch (err) {
				console.log(err.response.data);
				setLoading(true);
			}
		}
		setTimeout(()=> {
			setLoading(false);
			fetchdata();
		},4000);
	}, [])

	useEffect(() => {
		const filtredRes = posts.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase())
		|| ((post.title).toLowerCase()).includes(search.toLowerCase()));
		setsearchedres(filtredRes);
	}, [posts, search])
	const handledelete = async (id) =>
	{
		try{
			await api.delete(`/posts/${id}`);
			const listposts = posts.filter(e => e.id !== id);
			console.log('lstposts =>',listposts);
			setposts(listposts);
			history('/');
		} catch (err) {
			console.log(err.message);
		}
	}
	const handlesubmit = async (e) =>
	{
		e.preventDefault();
		let d = new Date();
		let id = posts.length ? posts[posts.length -1].id +1: 1;
		const newposts= {id: id,  title:title, datetime:d.toLocaleDateString() ,body: body};
		try {
			const response = await api.post('/posts',newposts);
			const allposts = [...posts, response.data];
			setposts(allposts);
			setTitle('');
			setBody('');
			history('/');
		} catch(err) {
			console.log(err.message);
		}
	}
	const handleEdit = async(id) =>
	{
		let d = new Date();
		const updateedpost = {id : id, title : editTitle, datetime : d.toLocaleDateString(), body:editBody};
		try{
			const response = await api.put(`/posts/${id}`, updateedpost)
			setposts(posts.map((post) => post.id === id ? {...response.data} : post));
			history('/');
			editBody('');
			editTitle('');
		} catch (err) {
			console.log(err.message);
		}
	}
	return (
	<div className="App">
		{ !loading &&
			<div>
				<Boobles />
				<div className='flexall'>
						<div className='fixed'>
							<Header />
							<Nav search={search} setSearch={setsearch}/>
						</div>
						<div>
							<Routes className='thebigest'>
								<Route path='/' element={<Home handledelete={handledelete} posts={searched}/>} />
								<Route path='/post' element={<NewPost handlesubmit={handlesubmit} title={title} setTitle={setTitle} body={body} setBody={setBody} />} />
								<Route path='/post/:id' element={<PostPage posts={posts} handledelete={handledelete}/>} />
								<Route path='/about' element={<About />} />
								<Route path='*' element={<Missing />} />
								<Route path='/edit/:id' element={<UpdatePost editTitle={editTitle} setEditTitle={setEditTitle}
												editBody={editBody} setEditBody={setEditBody} handleEdit={handleEdit} posts={posts} />} />
							</Routes>
							<Footer />
						</div>
				</div>
			</div>
			}
			{ loading &&
				<div  className='bgLoading'>
					<p className='loading'><p className='box'></p><span></span></p>
				</div>
			}
	</div>
)}
export default App;


