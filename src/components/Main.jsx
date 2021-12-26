import React, { Component } from 'react';
import './Main.css'
let imageIndex = 0;
let nameIndex = 1;
// Data :
const imageArr = [
  'https://gdb.voanews.com/7C9F727E-D668-4F91-9643-1042092647C9_w1023_r1_s.jpg',
  'Monkey',
  'https://media.istockphoto.com/photos/deer-fawn-picture-id472096009?b=1&k=20&m=472096009&s=170667a&w=0&h=Y_7nEaSTmz0gCnoOs2l7iDqyFo4j1FSWmtXQR7v5SG4=',
  'Doe',
  'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'Fox',
  'https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  'Stork',
  'https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'White Tiger',
  'https://images.unsplash.com/photo-1475809913362-28a064062ccd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'Butterfly',
  'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80',
  'Lion',
  'https://images.unsplash.com/photo-1501706362039-c06b2d715385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80',
  'Zebra',
  'https://images.unsplash.com/reserve/RFDKkrvXSHqBaWMMl4W5_Heavy%20company%20by%20Alessandro%20Desantis%20-%20Downloaded%20from%20500px_jpg.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  'Elephant',
  'https://images.unsplash.com/photo-1560343787-b90cb337028e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  'Panda',
  'https://images.unsplash.com/photo-1445820200644-69f87d946277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
  'Parrot',
  'https://images.unsplash.com/photo-1604336755604-96ee6fa9f3f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  'Giraffe',
  'https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
  'Goat',
  'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  'Eagle',
]

class Main extends Component {
  
  constructor (props) {
    super(props)

    this.state = {
      countLeft: 0,
      countRight: 0,
      src: 'https://gdb.voanews.com/7C9F727E-D668-4F91-9643-1042092647C9_w1023_r1_s.jpg',
      name: 'Monkey'
    }
  }

  changeCountLeft() {
    this.setState((prevState, props) => ({
      countLeft: prevState.countLeft + props.addValue,
      src: imageArr[imageIndex],
      name: imageArr[nameIndex]
    }))
    imageIndex +=2 ;
    nameIndex += 2;
    if (imageIndex === imageArr.length) {
      imageIndex = 0;
      nameIndex = 1;
      alert("Photos run out, click OK to run Again")
    }
  }
  changeCountRight() {
    this.setState((prevState, props) => ({
      countRight: prevState.countRight + props.addValue,
      src: imageArr[imageIndex],
      name: imageArr[nameIndex]
    }))
    imageIndex +=2;
    nameIndex += 2;
    if (imageIndex === imageArr.length) {
      imageIndex = 0;
      nameIndex = 1;
      alert("Photos run out, click OK to run Again")
    }
  }

  render() {
    return (
      <div className="wrapper">
        {/* score */}
        <div className="topEmoji">
          <span className="score bad">👎 {this.state.countLeft}</span>
          <span className="score good">✌ {this.state.countRight}</span>
        </div>
        {/* photo */}
        <div className="photo">
          <img alt="pic" id='image' src={this.state.src} />
        </div>
        <div className="photoName">
        <h1>
          {this.state.name}
          </h1>
        </div>
        {/* buttons */}
        <div className="bottomEmoji">
          <span className="button bad" onClick={() => this.changeCountLeft()}>✖</span>
          <span className="button good" onClick={() => this.changeCountRight()}>💚</span>
        </div>
      </div>
    )
  }
}

export default Main;