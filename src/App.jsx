import React, { useState, useEffect } from "react";
import ComponentThree from "./Component/ComponentThree";
import ComponentTwo from "./Component/ComponentTwo";
const App = () => {
const [username,SetUsename] = useState('');
return (
<>
<ComponentTwo />
</>
)
}
export default App;