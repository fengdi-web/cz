// 2、父向更深的子组件传
// import React from "react";
// import PropTypes from "prop-types";
// class Gson extends React.Component {
//     constructor(props) {
//         super();
//     }
//     render() {
//         return (
//             <div>
//                 <p>孙子组件{this.context.name}</p>
//             </div>
//         )
//     }
// }
// Gson.contextTypes={
//     name: PropTypes.string
// }
// export default Gson;


// 4、兄弟之间
// import React from "react";
// class Gson extends React.Component {
//     constructor(props) {
//         super();
//     }
//     render() {
//         return (
//             <div style={{"background":this.props.gcolor}}>
//                 <p>二子组件</p>
//             </div>
//         )
//     }
// }
// export default Gson;