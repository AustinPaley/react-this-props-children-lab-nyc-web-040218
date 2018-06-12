import React from 'react'

export default class Invitation extends React.Component{
  constructor(props){
    super(props)
    this.state={
      value: ''
    }
  }

  render(){
    debugger
    return(
      <div>
        <h1>You've been invited!</h1>
          {this.props.children}
      </div>
    )

  }
}
