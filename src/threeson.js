// import React from 'react';
// import PropTypes from "prop-types"

// class Son2 extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return(
//             <div>
//                  孙子：{this.context.name}
//             </div>
//         )
//     }
// }

// Son2.contextTypes = {
//     name : PropTypes.string
// }
// export default Son2


import React from 'react';

class Son2 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div> 
                二儿子：{this.props.name}
            </div>
        )
    }
}

export default Son2