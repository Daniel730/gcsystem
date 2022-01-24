import { AiOutlineHome } from "react-icons/ai";
import {
    BsBagPlus,
    BsBarChartLine,
    BsCartCheck,
    BsCartPlus,
} from "react-icons/bs";

export const links = [
    { to: "/", icon: AiOutlineHome, text: "Página inicial", path: undefined },
    {
        to: "reVenda",
        icon: BsCartPlus,
        text: "Realizar venda",
        path: "reVenda",
    },
    { to: "vendas", icon: BsCartCheck, text: "Vendas", path: "vendas" },
    {
        to: "produto",
        icon: BsBagPlus,
        text: "Produtos",
        path: "produto",
    },
    {
        to: "entradaSaida",
        icon: BsBarChartLine,
        text: "Entrada e Saída",
        path: "entradaSaida",
    },
];
