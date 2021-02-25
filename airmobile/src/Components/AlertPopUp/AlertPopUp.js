import React, {useState} from "react";
import { Button, Alert } from 'react-bootstrap';

const AlertPopUp = () => {

  const [show, setShow] = useState(true);

  return ( <>
              <Alert show={show} variant="success">
        <Alert.Heading>Votre Reservation a bien été payer!</Alert.Heading>
        <p>
          Vous receverez une confirmation d'ici quelques heures. Une fois la reservation validé toute annulation ne sera aucunement remboursé! c'est la crise mes ami(e)s!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success" href="reservation">
            Continuer
          </Button>
        </div>
      </Alert>

     
  
  </>);
};

export default AlertPopUp;
