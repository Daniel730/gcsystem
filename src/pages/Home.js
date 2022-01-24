import React from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card";
import { Content } from "../components/global";
import { links } from "../config/links";

export default function Home() {
    return (
        <Content>
            {links.map((item) =>
                item.to === "/" ? (
                    false
                ) : (
                    <Link
                        key={item.to}
                        to={item.to}
                        style={{ textDecoration: "none" }}
                    >
                        <Card text={item.text} Icon={item.icon} />
                    </Link>
                )
            )}
        </Content>
    );
}
