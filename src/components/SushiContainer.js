import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({fourSushi, changeIndex, balance}) {

  return (
    <div className="belt">
      { fourSushi.map((sushi) => <Sushi sushi={sushi} key={sushi.id} balance = {balance}/>)}
      <MoreButton changeIndex = {changeIndex}/>
    </div>
  );
}
	