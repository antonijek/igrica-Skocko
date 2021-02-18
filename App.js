import React, { Component } from "react";
import "./App.css";
import Red from "./red";
import Kvadratic from "./kvadratic";
import Desnastrana from "./desnastrana";
import Lijevastrana from "./lijevastrana";
import Red1 from "./ggg";
import PoslednjiRed from "./poslednjiRed";
const zvijezda =
  "https://raw.githubusercontent.com/lozobojan/js-skocko-slagalica/main/media/img/zvijezda.png";
const tref =
  "https://raw.githubusercontent.com/lozobojan/js-skocko-slagalica/main/media/img/tref.png";
const pik =
  "https://raw.githubusercontent.com/lozobojan/js-skocko-slagalica/main/media/img/pik.png";
const herc =
  "https://raw.githubusercontent.com/lozobojan/js-skocko-slagalica/main/media/img/herc.png";
const karo =
  "https://raw.githubusercontent.com/lozobojan/js-skocko-slagalica/main/media/img/karo.png";
const skocko =
  "https://raw.githubusercontent.com/lozobojan/js-skocko-slagalica/main/media/img/skocko.png";

const nizZnakova = [zvijezda, tref, pik, herc, karo, skocko];
let niz1 = [1, 2, 3, 4, 5, 6, 7];

const BR_KOLONA = 4;
const BR_REDOVA = 6;

const createInitialData = (_) => {
  const initialData = [];

  for (let i = 0; i < BR_REDOVA; i++) {
    initialData[i] = [];
    for (let j = 0; j < BR_KOLONA; j++) {
      initialData[i][j] = "";
    }
  }

  return initialData;
};

const createInitialData1 = (_) => {
  const initialData = [];

  for (let i = 0; i < BR_REDOVA; i++) {
    initialData[i] = [];
    for (let j = 0; j < BR_KOLONA; j++) {
      initialData[i][j] = "";
    }
  }

  return initialData;
};

function zadataKombinacijaZnakova() {
  let a = nizZnakova[Math.floor(Math.random() * nizZnakova.length)];
  let b = nizZnakova[Math.floor(Math.random() * nizZnakova.length)];
  let c = nizZnakova[Math.floor(Math.random() * nizZnakova.length)];
  let d = nizZnakova[Math.floor(Math.random() * nizZnakova.length)];
  let nasumicnaKombinacijaZnakova = [a, b, c, d];

  return nasumicnaKombinacijaZnakova;
}

let tajniNiz = zadataKombinacijaZnakova();
console.log(tajniNiz);

let nizRezultat = [];

// [['zvijezda', '', '', ''], ['', '', ' ', '']]

class App extends Component {
  state = {
    pokusaja: 0,
    leftPart: createInitialData(),
    centralPart: createInitialData1(),
    pogodak: ["", "", "", ""],
  };

  klik = (item) => {
    if (this.state.pogodak.indexOf("") > -1 && this.state.pokusaja < 24) {
      let pokusajaplus1 = this.state.pokusaja + 1;
      let red = Math.floor((pokusajaplus1 - 1) / 4);
      let ind = (pokusajaplus1 - 1) % 4;
      let copy = this.state.leftPart;
      copy[red][ind] = item;
      this.setState({ pokusaja: pokusajaplus1, leftPart: copy });
      if (pokusajaplus1 % 4 === 0) {
        nizRezultat = [];
        this.podudaranja(copy[red], tajniNiz);
        let a = [...this.state.centralPart];
        for (let i = 0; i < 4; i++) {
          if (nizRezultat[i] !== "red" && nizRezultat[i] !== "yellow") {
            nizRezultat[i] = "";
          }
        }
        a[red] = nizRezultat;
        this.setState({ centralPart: a });
        for (let i = 0; i < 6; i++) {
          this.provjera(this.state.leftPart[i], tajniNiz);
        }
      }
    }
  };
  podudaranja = (niz1, niz2) => {
    let a = this.brojznakovaUNizu(niz1);
    let b = this.brojznakovaUNizu(niz2);
    let brojPodudaranja = 0;
    if (a.reduce((item, sum) => item + sum) === 4) {
      for (let i = 0; i < 6; i++) {
        if (a[i] > b[i]) {
          brojPodudaranja += b[i];
        } else {
          brojPodudaranja += a[i];
        }
      }
    }
    for (let i = 0; i < 4; i++) {
      if (niz1[i] === niz2[i]) {
        nizRezultat.push("red");
      }
    }
    let razlika = brojPodudaranja - nizRezultat.length;
    for (let i = 0; i < razlika; i++) {
      nizRezultat.push("yellow");
    }

    return nizRezultat;
  };

  brojznakovaUNizu = (niz) => {
    if (niz.length !== 4)
      throw new Error("Invalid argument. Expected 4 chars array!");
    let brojzvijezda = 0;
    let brojtref = 0;
    let brojskocko = 0;
    let brojpik = 0;
    let brojkaro = 0;
    let brojherc = 0;
    for (let i = 0; i < niz.length; i++) {
      if (niz[i] === nizZnakova[0]) {
        brojzvijezda++;
      }
      if (niz[i] === nizZnakova[1]) {
        brojtref++;
      }
      if (niz[i] === nizZnakova[2]) {
        brojskocko++;
      }
      if (niz[i] === nizZnakova[3]) {
        brojpik++;
      }
      if (niz[i] === nizZnakova[4]) {
        brojkaro++;
      }
      if (niz[i] === nizZnakova[5]) {
        brojherc++;
      }
    }
    let a = [brojzvijezda, brojtref, brojskocko, brojpik, brojkaro, brojherc];

    return a;
  };

  provjera = (arr1, arr2) => {
    if (this.state.pokusaja === 23) {
      this.setState({ pogodak: tajniNiz });
    }
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    this.setState({ pogodak: tajniNiz });
  };

  render() {
     
    return (
      <div className="bg-info">
        <h1 className="text-center bg-primary display-4 shadow font-weight-bold text-warning">
          СКОЧКО
        </h1>
        <div className="inlineblok1 razmak">
          {this.state.leftPart.map((red, i) => (
            <Red1 niz={red} key={i} />
          ))}

          <div className="razmak">
            <PoslednjiRed niz={this.state.pogodak} />
          </div>
        </div>

        <div className="inlineblok1 razmak1">
          {this.state.centralPart.map((red, i) => (
            <Red niz={red} key={i} />
          ))}
        </div>
        <div className="inlineblok m-4">
          <Desnastrana nizZnakova={nizZnakova} klikNaZnak={this.klik} />
        </div>
        <div className='inlineblok2'><img  src='https://raw.githubusercontent.com/lozobojan/js-skocko-slagalica/main/media/img/sova.png' width='200%'></img></div>
      </div>
    );
  }
}

export default App;
