import Loader from "react-loader-spinner";
import { Component } from 'react'

class loader extends Component {
  //other logic
    render() {
    return (
        <div className="center">
    <Loader
        type="Puff"
        color="rgb(117,84,160)"
        height={100}
        width={100}
        margin={0}
        timeout={3000} //3 secs
    />
    </div>
    );
}
}
export default loader;