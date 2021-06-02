import React from "react";

function Sushi({sushi, balance}) {
  function handleClick () {
    if (!sushi.eaten) {balance(sushi)}
    else {alert("There's no sushi on this plate, silly!")} 
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        { sushi.eaten? null : 
         (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );

         }