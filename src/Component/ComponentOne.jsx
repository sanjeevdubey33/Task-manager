import { useState } from "react";
import ComponentTwo from "./ComponentTwo";
import ComponentThree from "./ComponentThree";
const ComponentOne = () => {
const [count,setCount] = useState(() => Math.floor(Math.random()*100));

return (
<section>
<ComponentTwo count={count} onClickHandler={() => setCount(count+1)}></ComponentTwo>
{count}
</section>

)


}

export default ComponentOne;