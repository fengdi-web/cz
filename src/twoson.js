// import React from 'react';

// class Son1 extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return(
//             <div>
//                {this.props.name}
//             </div>
//         )
//     }
// }

// export default Son1


// import React from 'react';
// import Son2 from './threeson';

// class Son1 extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return(
//             <div>
//                儿子：{this.props.name}
//                <Son2 />
//             </div>
//         )
//     }
// }

// export default Son1



// import React from 'react';

// class Son1 extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             name : '神仙水'
//         }
//         this.change = this.change.bind(this);
//     }
//     change(){
//        this.props.name(this.state.name) 
//     }
//     render(){
//         return(
//             <div>
//                <button onClick={this.change}>点击</button>
//                儿子：{this.state.name}
//             </div>
//         )
//     }
// }

// export default Son1


import React from 'react';

class Son1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : '神仙水'
        }
        this.change = this.change.bind(this);
    }
    change(){
       this.props.name(this.state.name) 
    }
    render(){
        return(
            <div>
               <button onClick={this.change}>点击</button>
               儿子：{this.state.name}
            </div>
        )
    }
}

export default Son1