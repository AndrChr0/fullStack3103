
import { useState } from "react";
import { useTitleContext } from "../Context";


function TitleComponent({ title }) {

    const [count, setCount] = useState(0)

    const {titleText} = useTitleContext()
    console.log(titleText)

    return (
        <>
    <div className="title-component">
      <h1>{title}: {count}</h1>


      <button
      onClick={()=>setCount(count + 1)}
      type="button">click</button>
    </div>
    </>
  );
}

export default TitleComponent