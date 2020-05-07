import React from "react";
// 无状态-函数组件
// let ss = {"background":"#f40","color":"#00f"};
// function Component(){
//     return(
//         <div>
//             <h3 style={ss}>梵克雅宝</h3>
//         </div>
//     )
// }

// export default Component;



// 有状态  --- es6
// let ss = {"background":"#f40","color":"#00f"};
// class Fkyb extends React.Component{
//     constructor(props){
//         super();
//         this.name = props.name;
//     }
//     sayName(){
//         console.log("梵克雅宝");
//     }
//     render(){
//         return(
//         <div onClick={this.sayName}>
//             <h3 style={ss}>梵克雅宝</h3>
//         </div>
//         )
//     }
// }

// export default Fkyb;


// //嵌套
// import Login from "./fom.js";
// //构造函数中绑定this
// let mynav5style = { "list-style-type":"none",'float':"left",'color': '#000', 'background': "#f40", 'width': 200,"height":100,'text':"center" }
// class Mynav5 extends React.Component {
//     constructor() {
//         super();
//         this.name = "小明";
//         this.test = this.test.bind(this);    //绑定this
//     }
//     test(){
//         console.log(this.name);
//     }
//     render() {
//         return (
//             //div的作用，使用一个根标记，把子集放里
//             <div>  
//                <Login name ="lily" pwd="123456"/>
//                <ul>
//                   <li onClick={this.test} style={mynav5style}><a href="#">首页</a></li>
//                   <li style={mynav5style}><a href="#">首页</a></li>
//                   <li style={mynav5style}><a href="#">首页</a></li>
//                   <li style={mynav5style}><a href="#">首页</a></li>
//                </ul>
//             </div>
//         )
//     }
// }

// export default Mynav5;




// 在定义阶段使用箭头函数绑定(报错--自己搭建的环境箭头函数总出问题，解决方法---使用脚手架搭建)
// let mynav5style = { "list-style-type": "none", 'float': "left", 'color': '#000', 'background': "#f40", 'width': 200, "height": 100, 'text': "center" }
// class Mynav5 extends React.Component {
//     constructor(props) {
//         super();
//         this.name = "小明";
//     }
//     test=()=>{
//         console.log(this.name);
//     }
//     render() {
//         return (
//             <ul>
//                 <li onClick={this.test} style={mynav5style}><a href="#">首页</a></li>
//                 <li style={mynav5style}><a href="#">首页</a></li>
//                 <li style={mynav5style}><a href="#">首页</a></li>
//                 <li style={mynav5style}><a href="#">首页</a></li>
//             </ul>
//         )
//     }
// }

// export default Mynav5;


// 使用bind来绑定
// let mynav5style = { "list-style-type":"none",'float':"left",'color': '#000', 'background': "#f40", 'width': 200,"height":100,'text':"center" }
// class Mynav5 extends React.Component {
//     constructor() {
//         super();
//         this.name = "小明";
//     }
//     test(){
//         console.log(this.name);
//     }
//     render() {
//         return (
//             <ul>
//                 <li onClick={this.test.bind(this)} style={mynav5style}><a href="#">首页</a></li>
//                 <li style={mynav5style}><a href="#">首页</a></li>
//                 <li style={mynav5style}><a href="#">首页</a></li>
//                 <li style={mynav5style}><a href="#">首页</a></li>
//             </ul>
//         )
//     }
// }

// export default Mynav5;



// 使用（arrow function）箭头函数来绑定
// let mynav5style = { "list-style-type":"none",'float':"left",'color': '#000', 'background': "#f40", 'width': 200,"height":100,'text':"center" }
// class Mynav5 extends React.Component {
//     constructor() {
//         super();
//         this.name = "小明";
//     }
//     test(){
//         console.log(this.name);
//     }
//     render() {
//         return (
//             <ul>
//                 <li onClick={()=>this.test()} style={mynav5style}><a href="#">首页</a></li>
//                 <li style={mynav5style}><a href="#">首页</a></li>
//                 <li style={mynav5style}><a href="#">首页</a></li>
//                 <li style={mynav5style}><a href="#">首页</a></li>
//             </ul>
//         )
//     }
// }

// export default Mynav5;




//状态state
//嵌套
// import Login from "./fom.js";
// //构造函数中绑定this
// let mynav5style = { "list-style-type":"none",'float':"left",'color': '#000', 'background': "#f40", 'width': 200,"height":100,'text':"center" }
// class Mynav5 extends React.Component {
//     constructor() {
//         super();
//         this.state={"name":"梵克雅宝","age":20}
//         this.test = this.test.bind(this);    //绑定this
//     }
//     test(){
//         this.setState({"name":"fd"})
//     }
//     render() {
//         return (
//             //div的作用，使用一个根标记，把子集放里
//             <div>  
//                <Login name ={this.state.name} pwd="123456"/>
//                <ul>
//                   <li onClick={this.test} style={mynav5style}><a href="#">首页</a></li>
//                   <li style={mynav5style}><a href="#">{this.state.name}</a></li>
//                   <li style={mynav5style}><a href="#">首页</a></li>
//                   <li style={mynav5style}><a href="#">首页</a></li>
//                </ul>
//             </div>
//         )
//     }
// }

// export default Mynav5;


// 1、父向子传
import Login from "./fom.js";
let mynav5style = { "list-style-type": "none", 'float': "left", 'color': '#000', 'background': "#f40", 'width': 200, "height": 100, 'text': "center" }
class Mynav5 extends React.Component {
    constructor() {
        super();
        this.state = { "name": "梵克雅宝" }
        this.test = this.test.bind(this);    //绑定this
    }
    test() {
        this.setState({ "name": "fd" })
    }
    render() {
        return (
            //div的作用，使用一个根标记，把子集放里
            <div>
                <p onClick={this.test}>父组件的内容</p>
                <Login name={this.state.name} />
            </div>
        )
    }
}

export default Mynav5;



// 2、父向更深的子组件传
// import Login from "./fom.js";
// import PropTypes from "prop-types";
// class Mynav5 extends React.Component {
//     constructor(props) {
//         super();
//         this.state={"name":"梵克雅宝"}
//     }
//     getChildContext(){
//         return{
//             name:this.state.name
//         }
//     }
//     render() {
//         return (
//             <div>  
//                <p>父组件</p>
//                <Login />
//             </div>
//         )
//     }
// }
// Mynav5.childContextTypes={
//     name:PropTypes.string
// }
// export default Mynav5;



// 3、子向父传
// import Login from "./fom.js";
// class Mynav5 extends React.Component {
//     constructor(props) {
//         super();
//         this.state={"color":"#fcc"}
//     }
//     changeColor(soncolor){
//         this.setState({color:soncolor})
//     }
//     render() {
//         return (
//             <div>  
//                <p style={{"background":this.state.color}}>父组件</p>
//                <Login cc={(soncolor)=>{this.changeColor(soncolor)}}/>
//             </div>
//         )
//     }
// }

// export default Mynav5;


// 4、兄弟之间
// import Login from "./fom.js";
// import Gson from "./gson.js";
// class Mynav5 extends React.Component {
//     constructor(props) {
//         super();
//         this.state = {
//             "color": "#fcc",
//             "gc": "#0f0"
//         }
//     }
//     changeColor(color) {
//         this.setState({ gc: color })
//     }
//     render() {
//         return (
//             <div>
//                 <p style={{ "background": this.state.color}}>父组件</p>
//                 <Login cc={(color) => { this.changeColor(color) }} />
//                 <Gson gcolor={this.state.gc} />
//             </div>
//         )
//     }
// }

// export default Mynav5;