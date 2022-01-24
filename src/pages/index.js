import React from "react";

import { Container } from "../components/global/index";
import Navbar from "../components/Navbar/index";
import Page from "./Page";

export default function index() {
    return (
        <>
            <Navbar />
            <Container>
                <Page />
            </Container>
        </>
    );
}
