import { Component } from 'react'
import SimpleComponent from './components/SimpleComponent'
import PureComponents from './components/PureComponents'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <>
<SimpleComponent/>
<PureComponents/>
      </>
    )
  }
}
