import React, { Component } from 'react';
import './Main.css'
let imageIndex = 0;
// Data :
const imageArr = [
  'https://gdb.voanews.com/7C9F727E-D668-4F91-9643-1042092647C9_w1023_r1_s.jpg',
  'Monkey',
  'https://media.istockphoto.com/photos/deer-fawn-picture-id472096009?b=1&k=20&m=472096009&s=170667a&w=0&h=Y_7nEaSTmz0gCnoOs2l7iDqyFo4j1FSWmtXQR7v5SG4=',
  'Doe',
  'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'Fox',
  'https://images.pexels.com/photos/87403/cheetah-leopard-animal-big-87403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'Tiger',
  'https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  'Stork',
  'https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'White Tiger',
  'https://images.unsplash.com/photo-1475809913362-28a064062ccd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'Butterfly',
  'https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'Cat',
  'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'Lion',
  'https://images.pexels.com/photos/4577792/pexels-photo-4577792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'Zebra',
  'https://images.pexels.com/photos/4621386/pexels-photo-4621386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'Dolphin',
  'https://images.unsplash.com/reserve/RFDKkrvXSHqBaWMMl4W5_Heavy%20company%20by%20Alessandro%20Desantis%20-%20Downloaded%20from%20500px_jpg.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  'Elephant',
  'https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'Panda',
  'https://images.pexels.com/photos/40984/animal-ara-macao-beak-bird-40984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'Parrot',
  'https://images.unsplash.com/photo-1604336755604-96ee6fa9f3f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  'Giraffe',
  'https://images.pexels.com/photos/4666747/pexels-photo-4666747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'Seal',
  'https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
  'Goat',
  'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  'Eagle',
  'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5faad4255239c9448d6c7bcd%2FBest-Animal-Photos-Contest--Close-Up-Of-baby-monkey%2F960x0.jpg%3Ffit%3Dscale',
  'Baby Monkey',
  'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5faada47bf0dba8d4b34f82b%2FBest-Animal-Photos-Agora-Contest--a-wild--Icelandic--horse%2F960x0.jpg%3Ffit%3Dscale',
  'Horse',
  'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5faadb21437a67fe73b4ecf4%2FBest-Animal-Photos-Agora-Contest--A-llama-resting--in-Machu-Picchu--Peru%2F960x0.jpg%3Ffit%3Dscale',
  'Llama',
  'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5faadc91e654e570c05a8612%2FBest-Animal-Photos-Agora-Contest--brown-owl-under-the-rain-%2F960x0.jpg%3Ffit%3Dscale',
  'Owl',
  'https://images.pexels.com/photos/638738/pexels-photo-638738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'Peacock Bird',
  'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'Blue Whale',
  'https://images.pexels.com/photos/65289/polar-bear-bear-teddy-sleep-65289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'Polar Bear'
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
      name: imageArr[imageIndex+1]
    }))
    imageIndex +=2 ;
    if (imageIndex === imageArr.length) {
      imageIndex = 0;
      alert("Photos run out, click OK to Start over")
      this.setState((prevState, props) => ({
        countLeft: 0,
        countRight: 0,
        src: imageArr[imageIndex],
        name: imageArr[imageIndex + 1]
      }))
    }
  }
  changeCountRight() {
    this.setState((prevState, props) => ({
      countRight: prevState.countRight + props.addValue,
      src: imageArr[imageIndex],
      name: imageArr[imageIndex + 1]
    }))
    imageIndex +=2;
    if (imageIndex === imageArr.length) {
      imageIndex = 0;
      alert("Photos run out, click OK to Start over")
      this.setState((prevState, props) => ({
        countLeft: 0,
        countRight: 0,
        src: imageArr[imageIndex],
        name: imageArr[imageIndex + 1]
      }))
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