import React from "react";
import { useParams } from "react-router-dom";

import { Container } from "../components/global/index";

function Body() {
    const { page } = useParams();

    switch (page) {
        case "reVenda":
            return <div>Realizar vendas</div>;
        case "vendas":
            return <div>Vendas</div>;
        case "cadProduto":
            return <div>Cadastrar Produto</div>;
        case "entradaSaida":
            return <div>Entrada e saida</div>;
        default:
            return <div>Home</div>;
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
