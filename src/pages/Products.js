import React from "react";

import { Content, Title } from "../components/global";
import TableComponent from "../components/Table";

export default function Products() {
    const th = [
        "Nome do Produto",
        "Custo do Produto",
        "Preço de venda",
        "Quantidade",
    ];

    const tbList = [
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
        { name: "Tenis", cost: "R$45,00", price: "R$90,00", quantity: "100" },
    ];

    return (
        <Content>
            <div
                style={{
                    display: "flex",
                    width: "90%",
                    height: "90%",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "absolute",
                    top: "0",
                    zIndex: "999",
                }}
            >
                <Title>Listar Produtos</Title>
                <TableComponent th={th} tb={tbList} tableList />
            </div>
        </Content>
    );
}
