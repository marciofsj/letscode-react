import { Container, InfoArea, PhotoArea} from './styles'
import ProductInfos from './Productsinfos'
import ProductSettings from './ProductSettings'
import Actions from './Actions'

const Product = ({product}) => (
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
)

export default Product