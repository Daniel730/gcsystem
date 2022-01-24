import { AiOutlineHome } from "react-icons/ai";
import {
    BsBagPlus,
    BsBarChartLine,
    BsCartCheck,
    BsCartPlus,
} from "react-icons/bs";

export const links = [
    { to: "/", icon: AiOutlineHome, text: "Página inicial" },
    { to: "reVenda", icon: BsCartPlus, text: "Realizar venda" },
    { to: "vendas", icon: BsCartCheck, text: "Vendas" },
    { to: "cadProduto", icon: BsBagPlus, text: "Cadastrar Produto" },
    { to: "entradaSaida", icon: BsBarChartLine, text: "Entrada e Saída" },
];
