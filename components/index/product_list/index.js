import { Container } from "@material-ui/core";
import { Fragment } from "react"
import GridList from "./grid_list";

const cards = [1, 2, 3, 4, 5, 6];

const ProductList = () => {
    return <Fragment>
        <Container sx={{ py: 8 }} maxWidth="md">
        <GridList cards={cards}/>
        </Container>
    </Fragment>
}

export default ProductList;