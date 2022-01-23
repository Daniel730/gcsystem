import React from "react";
import { useParams } from "react-router-dom";

import { Container } from "../components/global/index";

function Body() {
    const { page } = useParams();

    switch (page) {
        default:
            return <div />;
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
