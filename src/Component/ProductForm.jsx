import React, { useState } from 'react';

const NumberArray = (props) => {

const [movie,setMovie] = useState([{name:"Bahubali",rating:4.5,year:2015},{name:"RRR",rating:4.8,year:2022},
{name:"KGF",rating:4.3,year:2018}]);

const addmovie = () =>{
setMovie(movie.map((m) => ( m.rating <= 4.5 ? {...movie, name: "sanjeev"} : m)));


}

return(
<div>
{
movie.map((item,index) => ( <li key={Math.random()}>{item.name}</li>))
}
<button onClick={addmovie}>click</button>


<input type='text' onChange={(e) => props.setCount(e.target.value)}></input>
<p>Name : {props.count}</p>
</div>

)
}

 

export default NumberArray;
