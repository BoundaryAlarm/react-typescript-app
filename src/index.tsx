import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./components/app";

import '/styles/index.scss'

ReactDOM.render(
    <App message={'Hello World!'}/>,
    document.getElementById('application')
);
