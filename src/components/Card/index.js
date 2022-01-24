import PropTypes from "prop-types";
import React from "react";

import { CardBody, CardText } from "./style";

export default function Card(props) {
    const { text, Icon } = props;
    return (
        <CardBody>
            <CardText>{text}</CardText>
            <Icon size={40} />
        </CardBody>
    );
}

Card.propTypes = {
    text: PropTypes.string,
    Icon: PropTypes.func,
};

Card.defaultProps = {
    text: "",
    Icon() {
        return false;
    },
};
