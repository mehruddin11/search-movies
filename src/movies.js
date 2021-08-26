import {useGlobalContext} from './context';
import {Link} from 'react-router-dom'
let url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/archive/a/ac/20121003093557!No_image_available.svg/120px-No_image_available.svg.png'
const Movies =() =>{
	const {isLoading, movies} = useGlobalContext()
if(isLoading){
	return <div className='loading'></div>}
	return <section className='movies'>
	{
		movies.map((movie)=>{
	 		const {imdbID:id,Poster:img,Title:title,Year:year}=movie;
	 		return <Link to = {`movies/${id}`} key ={id}> 
	 		<article className='movie'>
	 		<img src={img === 'N/A'?url:img} alt ={title}/>
	 		<div className='movie-info'>
	 		<h4>{title}</h4>
	 		<p> {year}</p>
	 		</div>
	 		</article>
	 		</Link>
	 	})
	 }
	 
	 </section>
}
export default Movies;