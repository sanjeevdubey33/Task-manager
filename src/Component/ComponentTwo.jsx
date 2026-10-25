import { useState } from "react";

const ComponentTwo = ({count,onClickHandler}) =>{
const HandleClick = () =>{
    return onClickHandler();
}


return(
<div>
<p>{count}</p>
<button onClick={HandleClick}>Click</button>
</div>
)



}

export default ComponentTwo;