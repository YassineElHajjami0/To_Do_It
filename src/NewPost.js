import React from 'react'

const NewPOst = ({title, setTitle, body, setBody, handlesubmit}) => {
  return (
	<main className='newpost'>
		<form className='formnewpost' onSubmit={handlesubmit}>
			<label htmlFor='title'>Title</label>
			<input id='title'  type='text' placeholder='title'
			value={title}
			required
			onChange={(e)=>{setTitle(e.target.value)}}
			/>
			<label htmlFor='title'>Body</label>
			<textarea
			required
			type='text' placeholder='body'
			value={body}
			onChange={(e)=>{setBody(e.target.value)}}
			/>
			<button type='submit'>Submit</button>
		</form>
	</main>
  )
}

export default NewPOst
