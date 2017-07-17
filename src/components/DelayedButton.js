// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
  constructor(props){
    super(props);

  }

  delayed = (event) => {
    event.persist();
    setTimeout(()=>{
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render(){
    return(
      <button onClick={this.delayed}></button>
    )
  }
}

export default DelayedButton;
