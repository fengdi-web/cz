// 父向子传
// import React from "react";
// class Sn1 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={"sname":props.name}
//         this.setName = this.setName.bind(this);
//     }
//     componentWillReceiveProps(props){
//         this.setState({
//             "sname": props.name
//         })
//     }
//     setName() {
//         this.setState({
//             "sname": "蒂凡尼"
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <p onClick={this.setName}>大儿子{this.state.sname}</p>
//                 {/* <p onClick={this.setName}>大儿子{this.props.name}</p> */}
//             </div>
//         )
//     }
// }

// export default Sn1;



//父向更深的子传
// import React from "react";
// import Sn2 from './sn2';
// class Sn1 extends React.Component{
//    constructor(props){
//        super(props);
//    }
//    render(){
//        return(
//            <div>
//                <p>大儿子</p>
//                <Sn2 />
//            </div>
//        )
//    }
// }

// export default Sn1;



// 子向父传
// import React from "react";
// class Sn1 extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { "color": "#0f0" }
//         this.setColor = this.setColor.bind(this);
//     }
//     setColor() {
//         this.props.cc(this.state.color);
//     }
//     render() {
//         return (
//             <div style={{"background":this.state.color}}>
//                 <p onClick={this.setColor}>大儿子</p>
//             </div>
//         )
//     }
// }

// export default Sn1;


// 兄弟之间传
import React from "react";
class Sn1 extends React.Component{
    constructor(props){
        super(props);
        this.state={"color":"#0f0"}
        this.setColor = this.setColor.bind(this);
    }
    setColor(){
        this.props.cc(this.state.color);
    }
    render(){
        return(
            <div style={{"background":this.state.color}}>
                <p onClick={this.setColor}>大儿子</p>
            </div>
        )
    }
}

export default Sn1;









