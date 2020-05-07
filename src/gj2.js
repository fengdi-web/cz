// 高阶组件    （优化之前）
// import React from "react";
// localStorage.username = "小明";
// class Welcome extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             "username": ""
//         }
//     }
//     componentDidMount() {       //在render之前触发
//         let username = localStorage.username;
//         this.setState({
//             "username": username
//         })
//     }
//     render() {
//         return (
//             <div>welcome{this.state.username}</div>
//         )
//     }
// }
// export default Welcome;



import React from "react";
import middle from "./gj1";
class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>welcome{this.props.user}</div>
        )
    }
}
var Wce = middle(Welcome);
export default Wce;