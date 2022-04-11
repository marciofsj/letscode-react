import { useState } from 'react'
import { Container, InfoArea, PhotoArea} from './styles'
import ProductInfos from './Productinfos'
import ProductSettings from './ProductSettings'
import Actions from './Actions'

const Product = ({product}) => {
    
    const [settings, setSettings] = useState ({
        color: null,
        size: null
    });

    return (
        <>
            <Container>
                <PhotoArea>
                    <img src={product.photos[0]}/>
                </PhotoArea>
                <InfoArea>
                    <ProductInfos product={product}/>
                    <ProductSettings product={product}/>
                    <Actions/>
                </InfoArea>
            </Container>
            <div>
                {JSON.stringify(settings)}
            </div>
        </>
    )
}

export default Product