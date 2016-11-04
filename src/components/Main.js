import React from 'react';
import ChildCmp from './childCmp'

class AppComponent extends React.Component {
  constructor(props){
    super(props)
      this.state={
        count:1
      }
    this.clickHandle =this.clickHandle.bind(this)
  }
  componentWillReceiveProps(){
    console.log('father:--componentWillReceiveProps');
  }
  componentShouldUpdate(){
    console.log('father:--componentShouldUpdate')
  }
  componentWillUpdate(){
    console.log('father:---componentWillUpdate');
  }
   componentWillUpdate(nextProps,nextState) {
        console.log('father:--componentWillUpdate');
    }
  componentWillMount(){
    console.log('father:--componentWillMount');
  }
  componentDidMount(){
    console.log('father:---componentDidMount')
  }
  componentWillUnMount(){
    console.log('father:--componentWillUnMount')
  }
  clickHandle(){
    let count =this.state.count;
    count++
    this.setState({count:count})
     // this.setState({count:1})
  }
  render() {
    console.log('father:--render')
    const count =this.state.count;
    return (
      <div className="index">
        <button onClick={this.clickHandle}>test</button>
        <ChildCmp count={count} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
