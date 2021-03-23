import React, {Component} from 'react';
import './MemeGen.css';

class MemeGen extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImgLink: "http://i.imgflip.com/1bij.jpg",
      imgWidth: 568,
      imgHeight: 335,
      imgList: []
    }
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(res => {
        const {memes} = res.data
        this.setState({ imgList: memes })
      })
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleGenerate = (event) => {
    event.preventDefault()
    const index = this.getRandomInt(this.state.imgList.length-1)
    const img = this.state.imgList[index]
    this.setState({ 
      imgHeight: img.height,
      imgWidth: img.width,
      randomImgLink: img.url 
    })
  }

  render() {
    const width = this.state.imgWidth;
    const height = this.state.imgHeight;
    
    let setWidth = 'auto';
    let setHeight = 'auto';
    width > height ? setWidth='50%' : setHeight='70vh';
    const imgStyle = { 
      height: setHeight,
      width: setWidth,
      display: "block",
      margin: "auto"
    }

    return (
      <div>
        <form id="text-content" onSubmit={this.handleGenerate}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Generate</button>
        </form>

        <div id="meme-content">
          <img src={this.state.randomImgLink} style={imgStyle} alt="memeImg" />
          <h2 className="top-text">
            {this.state.topText}
          </h2>
          <h2 className="bottom-text">
            {this.state.bottomText}
          </h2>
        </div>
      </div>
    )
  }
}

export default MemeGen