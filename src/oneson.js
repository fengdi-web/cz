// import React from 'react';
// import Son1 from './twoson';

// class One extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: '梵克雅宝'
//         }
//     }
//     test(){
//         this.setState({
//             name:'蒂凡尼'
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={() => this.test()}>按钮</button>
//                 <div>{this.state.name}</div>
//                 <Son1 name={this.state.name} />
//             </div>
//         )
//     }
// }

// export default One


// import React from 'react';
// import Son1 from './twoson';
// import PropTypes from 'prop-types'

// class Son extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: 'SKII'
//         }
//     }
//     getChildContext() {
//         return {name:this.state.name}
//     }
//     render() {
//         return (
//             <div>
//                 <p>护肤品牌：{this.state.name}</p>
//                 <Son1 />
//             </div>
//         )
//     }
// }

// Son.childContextTypes = {
//     name: PropTypes.string
// }
// export default Son



// import React from 'react';
// import Son1 from './twoson';

// class One extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: '梵克雅宝'
//         }
//     }
//     test(can){
//         this.setState({
//             name:can
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <div>{this.state.name}</div>
//                 <Son1 name={(can) => this.test(can)} />
//             </div>
//         )
//     }
// }

// export default One


import React from 'react';
import Son1 from './twoson';
import Son2 from './threeson';

class One extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '梵克雅宝'
        }
    }
    test(can){
        this.setState({
            name:can
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.name}</div>
                <Son1 name={(can) => this.test(can)} />
                <Son2 name={this.state.name} />
            </div>
        )
    }
}

export default One