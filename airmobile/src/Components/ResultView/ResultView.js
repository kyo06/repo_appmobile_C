import React, {useState} from "react";
import {listAller} from "../../utils/listAller";
import List from "./List";

const ResultView = () => {

  const [allerList, setAllerList] = useState(listAller);
  
  return ( <div><h2>ResultView</h2>
    <div>
      {
      allerList.map((v) => (
        <List 
        vol={v}
        key={v.id}
        />
      ))
    }
    </div>

    </div>
  );
};

export default ResultView;
