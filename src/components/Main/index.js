import airmax from "./airmax.json"
import Product from "../Product"
import UserCard from "../UserCard"
import { Container } from './styles'

const Main = () => (
  <Container>
    <Product product={airmax}/>
    <br/><br/>
    <UserCard/>
  </Container>
)

export default Main