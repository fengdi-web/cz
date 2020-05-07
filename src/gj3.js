// 高阶组件   （优化之前）
// import React from "react";
// localStorage.username = "小明";
// class Goodbye extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             "username": ""
//         }
//     }
//     componentDidMount() {        //在render之前触发
//         let username = localStorage.username;
//         this.setState({
//             "username": username
//         })
//     }
//     render() {
//         return (
//             <div>goodbye{this.state.username}</div>
//         )
//     }
// }

// export default Goodbye;



import React from "react";
import middle from "./gj1";
class Goodbye extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>goodbye{this.props.user}</div>
        )
    }
}
var Gbc = middle(Goodbye)
export default Gbc ;