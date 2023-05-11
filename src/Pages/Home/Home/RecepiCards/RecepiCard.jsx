import React, { useEffect, useState } from "react";
import Card from "../cards/Card";

const RecepiCard = () => {
    const [cards,setCards]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        fetch('https://my-cooking-recipe-server-siite-muntasirmamuon.vercel.app/category')
        .then(res=>res.json())
        .then(data=>{
          setCards(data)
          setIsLoading(false)
        })
    },[])

  return (
  
  <div className="px-4 sm:px-6 lg:px-8">
    {/* date loading time progress show  */}
    {
      isLoading && isLoading && <progress className="progress w-56" value="0" max="100"></progress>
    }
  <h2 className="text-4xl text-center mt-5 mb-5 font-bold">Chef Category</h2>
  
  {
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {cards.map((card) => (
      <Card key={card._id}  isLoading={isLoading} card={card} />
    ))}
  </div>
  }
</div>

  );
};

export default RecepiCard;
