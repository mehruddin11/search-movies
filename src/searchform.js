import {useRef, useEffect} from 'react'
import  {useGlobalContext} from './context'

const SearchForm =() =>{
	const createRef = useRef();
	const {Query, setQuery,isError} =useGlobalContext();
	useEffect(()=>{
		createRef.current.focus();
	
},[])
const hadlesubmit= (e)=>{
	e.preventDefault();
}
	return <form className='search-form' onChange ={hadlesubmit}>
	<h2> SearchForm </h2>
	<input type ="text" className='form-input' 
	value ={Query} 
	onChange ={(e)=>setQuery(e.target.value)} 
	 ref ={createRef} />
	{isError.show && <div className='error'>{isError.msg}</div>}
	</form >
}
export default SearchForm;