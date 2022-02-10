import React from "react";

import { Content, Input, Title } from "../components/global";
import Button from "../components/global/Button";

export default function NewProduct() {
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
                <Title>Adicionar Produto</Title>
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "90%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Input type="text" placeholder="Nome do produto" />
                    <Input type="text" placeholder="Custo do produto" />
                    <Input type="text" placeholder="Preço de venda" />
                    <Input type="text" placeholder="Quantidade disponível" />
                    <Input type="text" placeholder="Código de barras" />
                    <Button style={{ width: "200px" }} text="Salvar" />
                </form>
            </div>
        </Content>
    );
}
