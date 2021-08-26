import {useParams,Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {Accesskey} from './context';
const SingleMovies =() =>{
	const {id}= useParams();
	const [movie, setMovie]= useState({});
	const [isLoading, setisLoading]= useState(true);
	const [isError, setError]= useState({show:false,msg:''})
	const fetchmovies= async(url)=>{
		const response= await fetch(url);
		const data = await response.json();
		if(data.Response === 'False'){
			setError({show:true,msg:data.Error})
			setisLoading(false)
		}
		setError({show:false,msg:''})
		setisLoading(false)
		setMovie(data);
	}
	useEffect(()=>{
		fetchmovies(`${Accesskey}&i=${id}`)
	},[id])
	if(isLoading){
		return <div className='loading'> </div>
	}
	if(isError.show){
		return <div className='page-error'>
		<h1>{isError.msg}</h1>
		<Link to ='/' className='btn'> Back to Home </Link> 
		</div>
	}
	const {Poster:img,Title:title,Year:year,Plot:plot}=movie;
	return <section className='single-movie'>
	<img  src={img} alt = {title}/>
	<div className='single-movei-info'>
	<h2> {title}</h2>
	<p> {plot}</p>
	<h4> {year}</h4>
	<Link to ='/' className='btn'> Back to Home </Link> 
	</div>
</section>
}
export default SingleMovies;