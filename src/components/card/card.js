import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css'

function BasicExample(props) {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={props.imgurl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.intro}
        </Card.Text>
        <Button variant="primary">see more</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;