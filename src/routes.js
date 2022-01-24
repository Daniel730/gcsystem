import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import index from "./pages/index";
import store from "./store";

export default function Routes() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact component={index} />
                    <Route path="/:page" component={index} />
                </Switch>
            </Router>
        </Provider>
    );
}
