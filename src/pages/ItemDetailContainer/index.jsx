import { json, useParams } from "react-router"
import { NavBar } from "../../components/NavBar"
import './ItemDetailContainer.css'
import { Card } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from "react"
import { getData } from '../../data'
import Skeleton from "react-loading-skeleton"

export const ItemDetailContainer = () => {
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const [shopData, setShopData] = useState([])
    useEffect(() => {
        setLoading(true)
        getData()
            .then(data => {
                const findData = data.find(item => item.id === Number(params.id))
                setShopData(findData)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])
    return (
        <>
            <NavBar />
            {loading
                ? <Skeleton cards={1} />
                : <article>
                    <Card className="text-center" style={{ width: '42rem' }}>
                        <Card.Header>{shopData.name}</Card.Header>
                        <Card.Body>
                        <Card.Img variant="top" src={''} onError={(e) => (
                            (e.target.src =
                              "https://png.pngtree.com/png-vector/20230705/ourmid/pngtree-electronic-store-logo-vector-png-image_7481117.png")
                          )
                          } style={{ height: 310, objectFit: 'cover' }} />
                            <Card.Title>${shopData.price}</Card.Title>
                            <Card.Text>
                                {shopData.description}
                            </Card.Text>
                            <Button variant="primary">Agregar a Carrito</Button>{' '}
                            <Button variant="success">Comprar Ahora</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Ultimo Disponible!</Card.Footer>
                    </Card>
                </article>}
        </>
    )
}
