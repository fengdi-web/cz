// 父向子传
// import React from "react";
// import Sn1 from "./sn1";
// class Fa extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { "name": "梵克雅宝" };
//         this.test=this.test.bind(this);
//     }
//     test() {
//         this.setState({
//             "name": "施华洛世奇"
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <p onClick={this.test}>父亲</p>
//                 <Sn1 name={this.state.name} />
//             </div>
//         )
//     }
// }
// export default Fa;



//父向更深的子传
// import React from "react";
// import PropTypes from "prop-types";
// import Sn1 from "./sn1";
// class Fa extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             "name": "梵克雅宝"
//         }
//     }
//     getChildContext() {
//         return { name: this.state.name }
//     }
//     render() {
//         return(
//             <div>
//                 <p>父亲</p>
//                 <Sn1 />
//             </div>
//         )
//     }
// }
// Fa.childContextTypes = {
//     name: PropTypes.string
// }
// export default Fa;


// 子向父传
// import React from "react";
// import Sn1 from "./sn1";

// class Fa extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { "color": "#f00" }
//     }
//     test(soncolor) {
//         this.setState({
//             color: soncolor
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <p style={{"background":this.state.color}}>父亲</p>
//                 <Sn1 cc={(soncolor)=>{this.test(soncolor)}}/>
//             </div>
//         )
//     }
// }
// export default Fa;



// 兄弟之间传
import React from "react";
import Sn1 from "./sn1";
import Sn2 from "./sn2";
class Fa extends React.Component{
    constructor(props){
        super(props)
        this.state ={"color":"#f00"}
    }
    test(soncolor){
         this.setState({
             color:soncolor
         })
    }
    render(){
        return(
            <div>
                <p style={{"background":this.state.color}}>父亲</p>
                <Sn1 cc={(soncolor)=>{this.test(soncolor)}}/>
                <Sn2 ys={this.state.color}/>
            </div>
        )
    }
}

export default Fa;




//组件传值
// 父向子传值
// 通过props来传
// 父向更深的子传值
// 子向父传值
// 在父组件中创建一个函数来接收子组件传过来的参数值，
// 然后通过父组件将这个函数作为子组件的属性传递到子组件中
// 在然后子组件通过props接收并且调用该函数同时传参
// 兄弟传值


