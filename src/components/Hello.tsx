import * as React from "react";
import { hot } from 'react-hot-loader'

export interface HelloProps { compiler: string; framework: string; }

class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hellooooo from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}

export default hot(module)(Hello)
