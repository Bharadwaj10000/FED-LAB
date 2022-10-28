import React from 'react';
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={
        count:0
      }
    }
    render(){
      return(
        <div>
          <p>{this.state.count} times</p>
          <button onClick={()=>this.setState({count:this.state.count+1})}>
            click Me
          </button>
        </div>
      )
    }
  }

export default Counter