import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends PureComponent {

    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }


    //组件第一次存在于虚拟DOM中，函数不会被执行
    //如果已经存在与DOM中，函数才会被执行
    // UNSAFE_componentWillReceiveProps(){
    //     console.log('child-componentWillReceiveProps------组件将要接受参数时刻')
    // }

    // componentWillUnmount(){
    //     console.log('child-componentWillUnmount------组件将要被删除时刻')
    // }

    render() {
        console.log('child-render------组件渲染中')
        return (
            <li onClick={this.handleClick}>
              {this.props.avname}为你服务-{this.props.content}
            </li>
        )
    }

    handleClick(){
        console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}

XiaojiejieItem.propTypes={
    avname:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
XiaojiejieItem.defaultProps={
    avname:'松岛枫'
}

export default XiaojiejieItem;