import React from 'react'
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.state = {
      framework:'react'
    }
  }
  handleBtnClick(){
    this.setState({
      framework:'vue'
    })

  }
  render () {
    const {framework} = this.state;
    return (
      <div className="welcome-framework">
        hello, {framework}
        <button className="btn" onClick={this.handleBtnClick}>
          改变state
        </button>
      </div>
    )
  }
}
