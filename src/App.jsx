import React, { useState, useEffect } from "react";
import ComponentThree from "./Component/ComponentThree";
const App = () => {
const [username,SetUsename] = useState('');
return (
<>
<ComponentThree name="ReactJs"></ComponentThree>
</>
)
}
export default App;