import React, {useContext, useEffect,useState}from'react';
export const Accesskey =`http://www.omdbapi.com/?apikey=
${process.env.REACT_APP_MOVIES_ACCESS_KEY}`
// console.log(Accesskey);
const AppContext = React.createContext();
 export const AppProvider = ({children}) =>{
 	const [isLoading, setisLoading] = useState(true)
 	const [isError, setError] = useState({show:false,msg:''});
 	const [Query, setQuery] = useState('movies')
 	const [movies, setMovies] = useState([]);
 	 const ftechMovies= async(url)=>{
 	 	setisLoading(true)
 	 	try{
 	 		const response = await fetch(url);
 	 		const data= await response.json();
 	 		// console.log(data);
 	 		if(data.Response === 'True'){
 	 			setMovies(data.Search);
 	 			setError({show:false,msg:''})
 	 		}else{

 	 		// setMovies(data.Search);
 	 		setError({show:true, msg:data.Error});
 	 		}
 	 		setisLoading(false);
 	 	}catch(err){
 	 		console.log(err)
 	 		setisLoading(false)
 	 	}
 	 }
 useEffect(()=>{
 	ftechMovies(`${Accesskey}&s=${Query}`);
 },[Query])
	return <AppContext.Provider value = {
		{
			isLoading,
			isError
			,movies,
			Query, 
			setQuery
		}
	} > 
	{children} 
	</AppContext.Provider>
}
export const useGlobalContext= () =>{
	return useContext(AppContext);
}