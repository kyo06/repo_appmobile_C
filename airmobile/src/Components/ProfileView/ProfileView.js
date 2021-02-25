import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faUser } from '@fortawesome/free-solid-svg-icons';
import { Card, Image} from 'react-bootstrap';

const ProfileView = () => {
  return (<>
    
    <Card style={{ width: '18rem' }}>
      <Card.Header>
      <Image src="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg" roundedCircle />
      </Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
       <Card.Footer>

       </Card.Footer>
      </Card.Body>
    </Card>
  </>)
};

export default ProfileView;
