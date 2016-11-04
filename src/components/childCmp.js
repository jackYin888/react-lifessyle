import React,{Component} from 'react'

export default class ChildCmp extends Component {
    constructor(){
        super()
    }
    componentWillReceiveProps(nextProps) {
        //收到新的props时执行（新的props不一定是改变的props）
        //在此方法执行setState操作不会引起额外render
        console.log('child:--componentWillReceiveProps');
    }
    componentShouldUpdate(nextProps,nextState){
        console.log('child:--componentShouldUpdate')
     }
    componentWillUpdate(nextProps,nextState) {
        console.log('child:--componentWillUpdate');
    }
    componentDidUpdate(nextProps,nextState){
        //可以在此操作dom
        console.log('child:--componentDidUpdate')
    }
    componentWillMount() {
        console.log('child:---componentWillMount');
    }
    componentDidMount() {
        console.log('child:--componentDidMount')
    }
    componentWillUnMount() {
        console.log('child:--componentWillUnMount')
    }
    clickHandle() {
        let count = this.state.count;
        count++
        this.setState({ count: count })
    }
    render() {
          console.log('child:--render')
       const conut =this.props.count;
        return (
            <div className="index">

                <h2>{this.props.count}</h2>
            </div>
        );
    }
}