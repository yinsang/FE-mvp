import React from 'react'
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      framework:'react'
    }
  }
  render () {
    const {framework} = this.state;
    return (
      <div>hello, {framework}</div>
    )
  }
}
