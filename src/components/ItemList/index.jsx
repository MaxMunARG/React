import './ItemList.css'
import { Item } from '../Item';

import Row from 'react-bootstrap/Row'

export const ItemList = ({ products }) => {
    return (
    <Row A={1} B={2} C={3} D={4} E={5} className="g-4">
        {products.map(item => (
            <Item key={item.id} id={item.id} description={item.description} price={item.price} name={item.name} />
        ))}
    </Row>

    );
}
