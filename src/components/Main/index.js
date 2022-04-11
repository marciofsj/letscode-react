import products from './products.json'
import Product from "../Product"
import { Container } from './styles'
import UserCard from '../UserCard'

const Main = () => (
  <Container>
    <h2>Listagem</h2>
    {
      products.map(product =>
        <Product key={product.id} product={product} />
      )
    }
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <UserCard/>
  </Container>
)

export default Main