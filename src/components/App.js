import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [allSushi, setAllSushi] = useState([])
  const [amountInWallet, setAmountInWallet] = useState(200)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch(API)
    .then(r=>r.json())
    .then(sushiArray=> {
      const updatedSushis = sushiArray.map((sushi) => {
        return {...sushi, eaten:false}
      })
      setAllSushi(updatedSushis)

    })

  }, [])


  function returnFourSushi (index) {
    const fourSushiAtATime = allSushi.slice(index, index + 4 ) 
    return fourSushiAtATime

  }

  function changeIndex (index) {
    setIndex((index)=> index+4)
    return index
  }

  function balance (sushi) {
    if ( amountInWallet >= sushi.price)
    {setAmountInWallet((amountInWallet)=> amountInWallet - sushi.price)
      const updatedSushi = allSushi.map((sush)=> {
        if (sush.id ===sushi.id) return {...sush, eaten:true}
        return sush
      })
      setAllSushi(updatedSushi)
      setAmountInWallet((amountInWallet)=> amountInWallet - sushi.price)
    }
    else 
    {alert ("Need more  💸")}
  }

  const fourSushi = returnFourSushi(index)
  const eatenSushis = allSushi.filter((sushi) => sushi.eaten)





  return (
    <div className="app">
      <SushiContainer fourSushi = {fourSushi} changeIndex = {changeIndex}  balance = {balance}/>
      <Table wallet = {amountInWallet} plates = {eatenSushis}/>
    </div>
  );
}