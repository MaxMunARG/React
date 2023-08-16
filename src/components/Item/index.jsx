import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export const Item = ({ id, description, price, name }) => {
  return (
    <Col>
      <Card style={{ minHeight: '100%' }}>
        <Card.Img variant="top" src={''} onError={(e) => (
          (e.target.src =
            "https://png.pngtree.com/png-vector/20230705/ourmid/pngtree-electronic-store-logo-vector-png-image_7481117.png")
        )
        } style={{ height: 310, objectFit: 'cover' }} />
        <Card.Body style={{ minHeight: '180px' }}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>${price}</ListGroup.Item>
          <ListGroup.Item><Link to={`/Item/${id}`}>Ver Detalles</Link></ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary">Agregar a Carrito</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
