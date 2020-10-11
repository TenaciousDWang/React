import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
class Xiaojiejie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.inputChange = this.inputChange.bind(this)
        this.addList = this.addList.bind(this)
    }

    // UNSAFE_componentWillMount(){
    //     console.log('componentWillMount------组件将要挂载到页面时刻')
    // }
    // componentDidMount(){
    //     console.log('componentDidMount------组件挂载完成时刻')
    // }


    // shouldComponentUpdate(){
    //     console.log('1~shouldComponentUpdate------组件更新之前执行')
    //     return true
    // }
    // UNSAFE_componentWillUpdate(){
    //     console.log('2~componentWillUpdate------组件更新将要执行')
    // }
    // componentDidUpdate(){
    //     console.log('4~componentDidUpdate------组件更新完成时刻')
    // }

    //推荐在componentDidMount里面动态加载数据
    componentDidMount() {
        axios.get('http://127.0.07:8001/payment/hystrix/ok/31')
            .then((res) => { console.log('axios 获取数据成功:' + JSON.stringify(res)) })
            .catch((error) => { console.log('axios 获取数据失败:' + error) })

            this.setState({
            
                list: ['基础按摩', '精油推背'],
                inputValue: ""
                
            })
    }


    render() {
        //console.log('3~render------组件渲染中')
        return (
            <Fragment>
                {/* 第一次写JSX注释 */}
                <div>
                    <label htmlFor="shuru">增加服务</label>
                    <input
                        id="shuru"
                        className="input"
                        /*value={this.state.inputValue}*/
                        onChange={this.inputChange}
                        ref={(input) => (this.input = input)}
                    />
                    <button onClick={this.addList}>增加服务</button>
                </div>
                <ul ref={(ul) => { this.ul = ul }}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    /*
                                        <li key={index+item} onClick={this.deleteItem.bind(this,index)}
                                    // dangerouslySetInnerHTML={{__html:item}}
                                    >
                                    {item}
                                        
                                </li> */

                                    /*单向数据流，父组件给子组件的属性，子组件不可以修改，只能读取 */
                                    <CSSTransition
                                        timeout={1000}
                                        classNames='boss-text'
                                        unmountOnExit
                                        appear={true}
                                        key={index + item}
                                    >
                                        <XiaojiejieItem
                                            key={index + item}
                                            content={item}
                                            index={index}
                                            deleteItem={this.deleteItem}
                                        />
                                    </CSSTransition>


                                )

                            })
                        }
                    </TransitionGroup>
                </ul>
                <Boss />
            </Fragment>
        )
    }

    inputChange(e) {
        //console.log(e.target.value)
        this.setState({
            //inputValue: e.target.value
            inputValue: this.input.value
        })
    }

    addList() {
        this.setState({
            
            list: [...this.state.list, this.state.inputValue],
            inputValue: ""
            
        },()=>{
            this.input.value=""
                 console.log(this.ul.querySelectorAll('li').length)
             })
            //setState的回调函数
        console.log(this.state.inputValue)
    }

    deleteItem(index) {
        console.log(index)
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Xiaojiejie

