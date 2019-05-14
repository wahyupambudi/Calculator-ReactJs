import React, { Component } from "react";
import ReactDOM from "react-dom";
import Title from "./components/Title";
import CalcForm from "../src/components/CalcForm";
import TextResult from "../src/components/TextResult";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasil: 0,
      perhitungan: "",
      error: null
    };
  }

  onInputChange = event => {
    const { perhitungan } = this.state;
    const perhitunganText = event.target.value;
    this.setState({ perhitungan: perhitunganText });
    const hasil = this.hitung(perhitunganText);
    this.setState({ hasil: hasil });
  };

  onClearPerhitungan = () => {
    this.setState({ perhitungan: "", hasil: 0 });
  };

  onDelPerhitungan = () => {
    const { perhitungan } = this.state;
    const textLength = perhitungan.length - 1;
    const updatePerhitungan = perhitungan.substr(0, textLength);
    const updateHasil = this.hitung(updatePerhitungan);
    this.setState({ perhitungan: updatePerhitungan, hasil: updateHasil });
  };

  hitung = perhitungan => {
    const splitPerhitungan = perhitungan.split("");
    let isOperator = false;
    let operator = "";
    let angkaTerbaru = "";
    let angkaPertama = "";
    let hasil = 0;
    let isHasil = false;
    for (var i = 0; i < splitPerhitungan.length; i++) {
      switch (splitPerhitungan[i]) {
        case "+":
          if (isHasil) {
            angkaPertama = hasil;
          } else {
            angkaPertama = angkaTerbaru;
            console.log("angka terbaru = " + angkaTerbaru);
            console.log("angka pertama = " + angkaPertama);
          }
          angkaTerbaru = "";
          isOperator = true;
          operator = "+";
          break;
        case "-":
          if (isHasil) {
            angkaPertama = hasil;
          } else {
            angkaPertama = angkaTerbaru;
          }
          angkaTerbaru = "";
          isOperator = true;
          operator = "-";
          break;
        case "/":
          if (isHasil) {
            angkaPertama = hasil;
          } else {
            angkaPertama = angkaTerbaru;
          }
          angkaTerbaru = "";
          isOperator = true;
          operator = "/";
          break;
        case "*":
          if (isHasil) {
            angkaPertama = hasil;
          } else {
            angkaPertama = angkaTerbaru;
          }
          angkaTerbaru = "";
          isOperator = true;
          operator = "*";
          break;
        default:
          if (angkaTerbaru === "") {
            angkaTerbaru = splitPerhitungan[i];
          } else {
            angkaTerbaru = angkaTerbaru + String(splitPerhitungan[i]);
          }
          if (isOperator === true) {
            if (operator === "+") {
              hasil = Number(angkaPertama) + Number(angkaTerbaru);
              isHasil = true;
            }
            if (operator === "-") {
              hasil = Number(angkaPertama) - Number(angkaTerbaru);
              isHasil = true;
            }
            if (operator === "*") {
              hasil = Number(angkaPertama) * Number(angkaTerbaru);
              isHasil = true;
            }
            if (operator === "/") {
              hasil = Number(angkaPertama) / Number(angkaTerbaru);
              isHasil = true;
            }
          }
      }
    }
    return hasil;
  };

  render() {
    const { hasil, perhitungan } = this.state;
    return (
      <div align="center">
        <Title />
        <div>
          <TextResult hasil={hasil} />
          <CalcForm
            onInputChange={this.onInputChange}
            perhitungan={perhitungan}
          />
        </div>
      </div>
    );
  }
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
// _handleChange = elemen => {
//   this.setState({ angka1: elemen.target.value });
//   const hasil = Number(elemen.target.value) + Number(this.state.angka2);
//   this.setState({ hasilPerhitungan: hasil });
// };

// _handleChange2 = elemen => {
//   this.setState({ angka2: elemen.target.value });
//   const hasil = Number(this.state.angka1) + Number(elemen.target.value);
//   this.setState({ hasilPerhitungan: hasil });
// };

// render() {
//   return (
//     <div>
//       <Title />
//       <input
//         onChange={this._handleChange}
//         name="angka1"
//         value={this.state.angka1}
//       />
//       <input
//         onChange={this._handleChange2}
//         name="angka2"
//         value={this.state.angka2}
//       />

//       <h1>Hasil : {this.state.hasilPerhitungan}</h1>
//     </div>
//   );
// }
