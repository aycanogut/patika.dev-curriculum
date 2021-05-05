import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      flipping: false,
      counter: 0,
      heads: 0,
      tails: 0

    };
  }
  handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0) {
      this.setState((prevState) => ({ tails : prevState.tails + 1}))
      this.setState((prevState) => ({ counter : prevState.counter + 1}))
      this.setState({side : 'yazi'})
    }
     else if (randomNumber === 1) {
      this.setState((prevState) => ({ heads : prevState.heads + 1}))
      this.setState((prevState) => ({ counter : prevState.counter + 1}))
      this.setState({side : 'tura'})

    }
    console.log(randomNumber)

    this.setState({ flipping: true });

    setTimeout(() => this.setState({ flipping: false }), 1000);
    
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.counter} </strong>
          atıştan
          <strong> {this.state.heads} </strong>ü tura
          <strong> {this.state.tails} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;