import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Card, Button, ListGroup} from 'react-bootstrap';

import Switch from "react-switch";

const ProfileView = () => {

    const [checkedNotif, setCheckedNotif] = useState(false);
    const [checkedVibr, setCheckedVibr] = useState(false);

    const handleChange = nextChecked => {
      setCheckedNotif(nextChecked);
    };     
    const handleChangeV = nextChecked => {
      setCheckedVibr(nextChecked);
    }; 

  return (<>
    
            <Card className="text-center">
              <Card.Header>
              <FontAwesomeIcon  icon={faUser}/>
              </Card.Header>
              <Card.Body>
                <Card.Title>Voyageur Galactique</Card.Title>
                <ListGroup>
                  <ListGroup.Item>
                    Date de naissance: xx/xx/xx
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Num Passeport: XXxxxXxxxXxxx
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Point Bonus: 1000 pts
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Passeport Covid: Oui
                  </ListGroup.Item>
                    <ListGroup.Item>
                   Notifications<Switch
                        onChange={handleChange}
                        checked={checkedNotif}
                        className="react-switch"
                      />
                    </ListGroup.Item>
                    <ListGroup.Item>
                    Vibrations
                    <Switch
                      onChange={handleChangeV}
                      checked={checkedVibr}
                      className="react-switch"
                    />
                    
                    </ListGroup.Item>
                </ListGroup>
              <Card.Footer>
                  <Button  href="/reservation">Mes Reservations</Button>
              </Card.Footer>
              </Card.Body>
            </Card>
          </>)
};

export default ProfileView;