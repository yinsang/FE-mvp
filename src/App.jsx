import React from 'react'
import './index.module.scss';

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
      <>
        <div
        //  className={styles['is-invalid']}
        styleName="is-invalid"
        >
        
        </div>
        <div>11</div>
        <div  
        // className={styles.validationError}
        styleName="validationError"
        >123</div>
      </>
    )
  }
}
