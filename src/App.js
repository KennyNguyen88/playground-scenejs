import React, {Component} from 'react';
import { default as Scene } from 'scenejs';
import info from './info.png';
import './App.css';

class App extends Component {

  componentDidMount() {
    let scene = new Scene({
      ".container": [
        {
          transform: "scale(.7)",
          opacity: 0,
        },
        {
          transform: "scale(1)",
          opacity: 1,
        }
      ]
    },{
      duration: 2,
      easing: Scene.EASE_IN_OUT,
      selector: true,
    }).playCSS();

    const options = {
      easing: Scene.EASE_IN_OUT,
      selector: true,
    };
    const details = {
      '#cta': {
        0: {
          transform: 'scale(1)'
        },
        .3: {
          transform: 'scale(3)'
        },
        .5: {
          transform: 'scale(1)'
        }
      },
      '.container': {
        .4: {
          transform: 'scale(1)',
          height: '5%',
          opacity: 1,
        },
        .7: {
          height: '60%',
        }
      },
      '.info': {
        .7: {
          display: 'block',
          opacity: 0,
        },
        1.5: {
          opacity: '1'
        },
      },
      '.item': (i) => {
        return {
          0: {
            opacity: '0'
          },
          .5: {
            opacity: '1'
          },
          options: {
            delay: i * 0.5,
          }
        }
      }
    };
    const scene2 = new Scene(details,options);

    this.setState({
      scene2
    })
  }

  handleClick = () => {
    const { scene2 } = this.state;
    let expand = () => {
      scene2.playCSS();
      scene2.setDirection('reverse') };
    let collapse = () => {
      scene2.removeItem('#cta');
      scene2.playCSS();
      scene2.setDirection('normal');};
    scene2.getDirection() === 'normal' ? expand() : collapse();
  };

  render() {
    return(
      <div className="container">
        <h1>My Cart</h1>
        <img src={info} alt="icon" onClick={this.handleClick} id="cta"/>
        <p className="price">$455</p>
        <div className="info">
          <div className="item">
            <div className="description">
              <a href="#">Sass Fundamentals</a>
              <p>Get sassy in this sass course!</p>
            </div>
            <p className="subprice">$55</p>
          </div>
          <div className="item">
            <div className="description">
              <a href="#">Sass Fundamentals</a>
              <p>Get sassy in this sass course!</p>
            </div>
            <p className="subprice">$55</p>
          </div>
          <div className="item">
            <div className="description">
              <a href="#">Sass Fundamentals</a>
              <p>Get sassy in this sass course!</p>
            </div>
            <p className="subprice">$55</p>
          </div>
        </div>
      </div>
  )};
}

export default App;
