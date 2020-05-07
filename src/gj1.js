// 高阶组件

import React from "react";
localStorage.username = "小明";
let middle = (Com) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super();
            this.state = {
                username: ""
            }
        }
        componentDidMount() {
            let username = localStorage.username;
            this.setState({
                username: username
            })
        }
        render() {
            return (
                <Com user={this.state.username} />
            )
        }
    }
    return NewComponent
}
export default middle;