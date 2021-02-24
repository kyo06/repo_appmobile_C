import React, { useState } from "react";
import {listAller} from "../../../utils/listAller";
import {listRetour} from "../../../utils/listRetour";
import {listReservation} from "../../../utils/listReservation";
import List from "../List";
import { Tabs, Tab } from 'react-bootstrap';

const TabComponent = () => {

  const [allerList, setAllerList] = useState(listAller);
  const [retourList, setRetourList] = useState(listRetour);
  const [resList, setResList] = useState(listReservation);


  return (<>
    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
        <Tab eventKey="aller" title="Aller">
         <div>
             { allerList.map((v) => (<List vol={v} key={v.id} />))}
         </div>
        </Tab>
        <Tab eventKey="retour" title="Retour">
        <div>
             { retourList.map((v) => (<List vol={v} key={v.id} />))}
         </div>
        </Tab>
        <Tab eventKey="resumer" title="Resumer" >
        <div>
             { resList.map((v) => (<List vol={v} key={v.id} />))}
         </div>
        </Tab>
    </Tabs>
   </>);
};

export default TabComponent;
