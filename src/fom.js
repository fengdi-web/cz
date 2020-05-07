// import React from "react";
// class Login extends React.Component{
//     constructor(props){
//         super();
//         // this.pwd = props.pwd;
//     }
//     render(){
//         return( 
//         <div>
//             用户名:<input type="text" value={this.props.name}/><br />
//             密码:<input type="password" value={this.props.pwd}/><br />
//             <input type="submit" value="登录"/>
//         </div>)
//     }
// }

// export default Login;



// 1、父向子传
import React from "react";
class Login extends React.Component {
    constructor(props) {
        super();
        this.state={"sname":props.name}
        this.changeName = this.changeName.bind(this);
    }
    componentWillReceiveProps(props){        //当组件属性改变时，触发
        this.setState({"sname":props.name})
    }
    changeName(){
        this.setState({"sname":"小红"})
    }
    render() {
        return (
            <div>
                <p onClick={this.changeName}>子组件{this.state.sname}</p>
            </div>
        )
    }
}

export default Login;


// 2、父向更深的子组件传
// import React from "react";
// import Gson from "./gson";
// class Login extends React.Component {
//     constructor(props) {
//         super();
//     }
//     render() {
//         return (
//             <div>
//                 <p>子组件</p>
//                 <Gson />
//             </div>
//         )
//     }
// }

// export default Login;


// 3、子向父传
// import React from "react";
// class Login extends React.Component {
//     constructor(props) {
//         super();
//         this.state={"scolor":"#0f0"}
//         this.setColor = this.setColor.bind(this)
//     }
//     setColor(){
//         this.props.cc(this.state.scolor)
//     }
//     render() {
//         return (
//             <div style={{"background":this.state.scolor}}>
//                 <p onClick={this.setColor}>子组件</p>
//             </div>
//         )
//     }
// }

// export default Login;



// 4、兄弟之间
// import React from "react";
// class Login extends React.Component {
//     constructor(props) {
//         super();
//         this.state={"scolor":"#00f"}
//         this.setColor = this.setColor.bind(this)
//     }
//     setColor(){
//         this.props.cc(this.state.scolor)
//     }
//     render() {
//         return (
//             <div style={{"background":this.state.scolor}}>
//                 <p onClick={this.setColor}>子组件</p>
//             </div>
//         )
//     }
// }

// export default Login;