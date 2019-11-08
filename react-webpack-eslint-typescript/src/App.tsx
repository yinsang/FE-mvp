import * as React from 'react'
interface HelloProps {
  compiler:string,
  framework:string
}
export default class App extends React.Component<HelloProps> {
  render () {
    const {compiler, framework} = this.props;
    return (
      <div>hello, world, 1111compiler is {compiler}, framework is {framework}</div>
    )
  }
}
