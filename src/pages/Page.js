import React from "react";
import { useParams } from "react-router-dom";

import { Container } from "../components/global/index";
import GetSell from "./GetSell";
import Home from "./Home";
import InOut from "./InOut";
import NewProduct from "./NewProduct";
import NewSell from "./NewSell";
import Products from "./Products";

function Body() {
    const { page } = useParams();

    switch (page) {
        case "reVenda":
            return <NewSell />;
        case "vendas":
            return <GetSell />;
        case "produto":
            return <Products />;
        case "entradaSaida":
            return <InOut />;
        case "adicionarProduto":
            return <NewProduct />;
        default:
            return <Home />;
    }
}
function Page() {
    return (
        <Container>
            <Body />
        </Container>
    );
}

export default Page;
