import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/AxiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [count, setCount] = useState(0)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth().get(`/colors`)
      .then(res => {
        setColorList(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [count])
  
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} count = {count} setCount = {setCount} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
