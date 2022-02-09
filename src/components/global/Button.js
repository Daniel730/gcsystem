import PropTypes from "prop-types";
import React from "react";

import { ButtonDefault, ButtonIcon } from ".";

export default function Button(props) {
    const { onClick, text, iconButton, Icon } = props;
    if (iconButton) {
        return (
            <ButtonIcon onClick={() => onClick()}>
                <Icon />
            </ButtonIcon>
        );
    }
    return (
        <ButtonDefault onClick={() => onClick()} st>
            {text}
        </ButtonDefault>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    Icon: PropTypes.func,
    iconButton: PropTypes.bool,
};

Button.defaultProps = {
    text: "",
    onClick() {
        return false;
    },
    Icon() {
        return false;
    },
    iconButton: false,
};
