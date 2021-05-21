import React from "react";
import Big from "./component/big/big";
import Center from "./component/center/center";
import Back from "./component/back/back";
import Trio from "./component/trio/trio";


export default function App(){
  return(
      <div>
        <h5>Hi Filip,</h5>
        <p>Checkout your latest projects and their progress.</p>
        <Big/>
        <Center/>
        <Back/>
        <Trio/>
      </div>
  )
}
