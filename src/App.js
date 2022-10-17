import { Component } from "react";
import "./App.css";

import Pokemon from "./Components/Pokemon";
import pikachuPic from "./img/pikachu.png"
import charizardPic from "./img/charizard.png"

export default class App extends Component {
  state = {
    status: "Fighters are ready...",
    pikachu_hp :150,
    charizard_hp:150,
    pikachuPic: pikachuPic,
    charizardPic: charizardPic
  };

  handleAttackPikachu = () => {
    if (this.state.pikachu_hp !== 0) {
      let status = "charizard is attacking pikachu";
      this.state.pikachu_hp = this.state.pikachu_hp - 10;
      this.setState(() => {
        return {
          status,
        };
      });
    }
  };

  handleAttackCharizard = () => {
    if (this.state.charizard_hp !== 0) {
      let status = "pikachu is attacking charizard";
      this.state.charizard_hp = this.state.charizard_hp - 10;
      this.setState(() => {
        return {
          status,
        };
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="Pokemon">
          <Pokemon
            hp={this.state.pikachu_hp}
            handleAttack={this.handleAttackCharizard}
            pic = {this.state.pikachuPic}
          />
        </div>
        <div className="Pokemon">
          <Pokemon
            hp={this.state.charizard_hp}
            handleAttack={this.handleAttackPikachu}
            pic = {this.state.charizardPic}
          />
        </div>
        <h1>Status:{this.state.status}</h1>
      </div>
    );
  }
}
