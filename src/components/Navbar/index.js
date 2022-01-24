import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import {
    BsBagPlus,
    BsBarChartLine,
    BsCartCheck,
    BsCartPlus,
} from "react-icons/bs";
import { useParams, Link } from "react-router-dom";

import {
    FooterText,
    Sidebar,
    SideContent,
    SideFooter,
    SideHeader,
    SideItem,
} from "../global";

export default function Navbar() {
    const { page } = useParams();
    console.log(page);
    return (
        <Sidebar>
            <SideHeader>GC - Gestor de caixa</SideHeader>
            <SideContent>
                <Link to="/" style={{ width: "100px", textDecoration: "none" }}>
                    <SideItem
                        style={
                            page === undefined
                                ? { backgroundColor: "#045de9" }
                                : {}
                        }
                    >
                        <AiOutlineHome size={18} />
                        Página inicial
                    </SideItem>
                </Link>
                <Link
                    to="/reVenda"
                    style={{ width: "100px", textDecoration: "none" }}
                >
                    <SideItem
                        style={
                            page === "reVenda"
                                ? { backgroundColor: "#045de9" }
                                : {}
                        }
                    >
                        <BsCartPlus size={18} />
                        Realizar venda
                    </SideItem>
                </Link>
                <Link
                    to="/vendas"
                    style={{ width: "100px", textDecoration: "none" }}
                >
                    <SideItem
                        style={
                            page === "vendas"
                                ? { backgroundColor: "#045de9" }
                                : {}
                        }
                    >
                        <BsCartCheck size={18} />
                        Vendas
                    </SideItem>
                </Link>
                <Link
                    to="/cadProduto"
                    style={{ width: "100px", textDecoration: "none" }}
                >
                    <SideItem
                        style={
                            page === "cadProduto"
                                ? { backgroundColor: "#045de9" }
                                : {}
                        }
                    >
                        <BsBagPlus size={18} />
                        Cadastrar Produto
                    </SideItem>
                </Link>
                <Link
                    to="/entradaSaida"
                    style={{ width: "100px", textDecoration: "none" }}
                >
                    <SideItem
                        style={
                            page === "entradaSaida"
                                ? { backgroundColor: "#045de9" }
                                : {}
                        }
                    >
                        <BsBarChartLine size={18} />
                        Entrada e Saída
                    </SideItem>
                </Link>
            </SideContent>
            <SideFooter>
                <FooterText>Desenvolvido por: Daniel Silva</FooterText>
                <FooterText>Contato: daniel.730@outlook.com</FooterText>
            </SideFooter>
        </Sidebar>
    );
}
