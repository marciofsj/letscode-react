import PropTypes from 'prop-types'
import { ColorArea, SizeArea } from "./styles"
import Button from "../../Button"
import ColorDisplay from "../../ColorDisplay"


const ProductSettings = ({ product }) => (
    <>
        <SizeArea>
            Size {
                product.model.sizes
                    .map(size => 
                    <Button>{size}</Button>)
            }
        </SizeArea>
        <ColorArea>
            Color
            {
                product.model.colors
                    .map(({ hex }) =>
                    <ColorDisplay color={hex} />)
            }
        </ColorArea>
    </>
)

export default ProductSettings