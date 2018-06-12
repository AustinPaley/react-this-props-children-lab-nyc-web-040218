import React from 'react'

export default class ThemedParty extends React.Component{
  constructor(){
    super()
    this.state={
      value: ''
    }
  }

  render(){
    debugger
    const Children = React.Children.map(this.props.children, child => React.cloneElement(child, {
      className: this.props.theme
    }))

    return(

      <div>
        {Children}
      </div>
    )

  }
}
