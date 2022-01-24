import React from "react";
import { useParams, Link } from "react-router-dom";

import { links } from "../../config/links";
import {
    FooterText,
    Sidebar,
    SideContent,
    SideFooter,
    SideHeader,
    SideItem,
} from "./style";

export default function Navbar() {
    const { page } = useParams();
    return (
        <Sidebar>
            <SideHeader>GC - Gestor de caixa</SideHeader>
            <SideContent>
                {links.map((item) => {
                    const { to, text, path } = item;
                    const Icon = item.icon;
                    return (
                        <Link
                            key={to}
                            to={to}
                            style={{ textDecoration: "none" }}
                        >
                            <SideItem
                                style={
                                    page === path
                                        ? { backgroundColor: "#045de9" }
                                        : {}
                                }
                            >
                                <Icon />
                                {text}
                            </SideItem>
                        </Link>
                    );
                })}
            </SideContent>
            <SideFooter>
                <FooterText>Desenvolvido por: Daniel Silva</FooterText>
                <FooterText>Contato: daniel.730@outlook.com</FooterText>
            </SideFooter>
        </Sidebar>
    );
}
