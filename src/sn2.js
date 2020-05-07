//父向更深的子传
// import React from "react";
// import PropTypes from "prop-types"
// class Sn2 extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <p>孙子{this.context.name}</p>
//             </div>
//         )
//     }
// }

// Sn2.contextTypes = {
//     name: PropTypes.string
// }

// export default Sn2;



// 兄弟之间传
import React from "react";
class Sn2 extends React.Component{
    constructor(props){
        super(props);
        this.state={"color":props.ys}
        this.test = this.test.bind(this);
    }
    componentWillReceiveProps(props){
        this.setState({
            color:props.ys
        })
    }
    test(){
        this.setState({
            color:"#fcc"
        })
    }
    render(){
        return(
            <div style={{"background":this.state.color}}>
                <p onClick={this.test}>二儿子</p>
            </div>
        )
    }
}

export default Sn2;








