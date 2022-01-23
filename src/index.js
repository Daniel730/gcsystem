import React from "react";
import ReactDOM from "react-dom";
import Popup from "react-popup";

import Routes from "./routes";

ReactDOM.render(
    <>
        <Popup
            className="mm-popup"
            btnClass="mm-popup__btn"
            closeBtn
            closeHtml={null}
            defaultOk="Ok"
            wildClasses={false}
            escToClose
        />
        <React.StrictMode>
            <Routes />
        </React.StrictMode>
    </>,
    document.getElementById("root")
);
