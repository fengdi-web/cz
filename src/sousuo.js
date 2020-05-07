import React from "react";
import './fd';
// import { reqSearchProducts } from '../api/index'
class Sousuo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchName: '',  //搜索的关键字
            pageNum: 1,
            pageSize: 2,
            searchType: 'productName',
            timerId: null, //整数 定时器的编号 用来取消这个定时器
            list: []   //搜索成功之后的数据,
        }
    }

    render() {
        const { searchName } = this.state
        return (
            <div className="hei">
                <div className="wrap">
                    <a href="#" className="logo left"></a>
                    <div className="gw_wrap right">
                        <a href="#" className="car_wrap">
                            <span className="iconfont icon-gouwuche car"></span>
                            <span className="car_text">购物车</span>
                        </a>
                    </div>
                    <from className="right bd">
                        <input type="text" className="kuang" value={searchName} onChange={(e) => this.change(e)} />
                        <button className="btn" onClick={this.found}><i className="iconfont icon-fangdajing1 ico"></i>搜索</button>
                    </from>
                </div>
            </div>
        )
    }
    //搜索功能
    //ajax请求
    ajax = async (params) => {
        let result = await reqSearchProducts(params)
        console.log("异步", result)
        if (result.status === 0) {
            console.log("搜索成功")
            const list = result.data.list
            this.setState({
                list
            })
        }
    }
    //防抖函数
    fd = (callback, timer) => {
        return (...rest) => {
            let args = rest;
            console.log("参数", args)
            if (this.state.timerId) {
                clearTimeout(this.state.timerId) //要用this.timerId 而不能直接定义var timerId=null;
            }
            this.state.timerId = setTimeout(() => { callback.apply(this, args) }, timer)
        }
    }
    //onChange事件搜索
    change(e) {
        let val = e.target.value
        this.setState({
            searchName: val
        }, () => {    //使用回调函数目的 => 先拿到searchName 再向下执行
            if (!this.state.searchName) {
                return;
            }
            const { pageNum, pageSize, searchName, searchType } = this.state
            let result = this.fd(this.ajax, 3000)
            result({ pageNum, pageSize, searchName, searchType })
        })

    }
    ajax_btn = async (params) => {
        console.log("点击", params)
        let result = await reqSearchProducts(params)
        console.log("异步", result)
        if (result.status === 0) {
            console.log("搜索成功")
            window.location.href = 'search.html?q=' + this.state.searchName
        }
    }
    found = () => {
        if (!this.state.searchName) {
            return;
        }
        const { pageNum, pageSize, searchType, searchName } = this.state
        let result = this.fd(this.ajax_btn, 3000)
        result({ pageNum, pageSize, searchName, searchType })
    }
}

export default Sousuo;