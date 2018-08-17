import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class App extends Component {
    constructor() {
      super();
      this.state = {
        board : [0, 0, 0, 0, 0, 0, 0, 0, 0],
        times: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        chance: 0,
      }
    }

    checkBoard() {
      const { board, times, chance } = this.state;
      let win_char;
      if(board[0] == board[1] && board[1] == board[2] && board[0] !== 0 && board[1] !== 0 && board[2] !== 0) {
        win_char = board[0];
        $("#0, #1, #2").css({
          backgroundColor: "#000",
          color: "#fff",
        })
      }
      else if(board[3] == board[4] && board[4] == board[5] && board[3] !== 0 && board[4] !== 0 && board[5] !== 0) {
        win_char = board[0];
        $("#3, #4, #5").css({
          backgroundColor: "#000",
          color: "#fff",
        })
      }
      else if(board[6] == board[7] && board[7] == board[8] && board[6] !== 0 && board[7] !== 0 && board[8] !== 0) {
        win_char = board[0];
        $("#6, #7, #8").css({
          backgroundColor: "#000",
          color: "#fff",
        })
      }

      else if(board[0] == board[3] && board[3] == board[6] && board[0] !== 0 && board[3] !== 0 && board[6] !== 0) {
        win_char = board[0];
        $("#0, #3, #6").css({
          backgroundColor: "#000",
          color: "#fff",
        })
      }

      else if(board[1] == board[4] && board[4] == board[7] && board[1] !== 0 && board[4] !== 0 && board[7] !== 0) {
        win_char = board[0];
        $("#1, #4, #7").css({
          backgroundColor: "#000",
          color: "#fff",
        })
      }
      else if(board[2] == board[5] && board[5] == board[8] && board[2] !== 0 && board[5] !== 0 && board[8] !== 0) {
        win_char = board[0];
        $("#2, #5, #8").css({
          backgroundColor: "#000",
          color: "#fff",
        })
      }

      else if(board[0] == board[4] && board[4] == board[8] && board[0] !== 0 && board[4] !== 0 && board[8] !== 0) {
        win_char = board[0];
        $("#0, #4, #8").css({
          backgroundColor: "#000",
          color: "#fff",
        })
      }
      else if(board[2] == board[4] && board[4] == board[6] && board[2] !== 0 && board[4] !== 0 && board[6] !== 0) {
        win_char = board[0];
        $("#2, #4, #6").css({
          backgroundColor: "#000",
          color: "#fff",
        })
      }
    }

    move(e) {
      let val = e.target.value;
      const { board, times, chance } = this.state;
      if(times[val] !== 0) {
        alert("Already played tile !");
      }
      else {
        let turn_char = chance === 0 ? "X" : "O";
        $("#" + val + "").html(turn_char);
        let board_copy = board;
        board_copy[val] = turn_char;
        let times_copy = times;
        times[val] = 1;
        let next = 1 - chance;
        this.setState({
          board: board_copy,
          times: times_copy,
          chance: next,
        });
        this.checkBoard();
      }
    }

    newGame() {
      let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      let times = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      let chance = 0;

      for(var i=0;i<9;i++) {
        $("#" + i + "").html("");
        $("#" + i + "").css({
          backgroundColor: '#fff',
          color: '#000',
        })
      }

      this.setState({
        board,
        times,
        chance,
      });
    }

    render() {
      return(
        <div>
          <div className="App container tic-tac-toe">
            <div className="row">
              <div className="col-md-4 each_box">
                  <button value="0" onClick={this.move.bind(this)}  className="butt"  id="0"></button>

              </div>
              <div className="col-md-4 each_box">
                  <button value="1" onClick={this.move.bind(this)}  className="butt" id="1"></button>

              </div>
              <div className="col-md-4 each_box">
                  <button value="2" onClick={this.move.bind(this)}  className="butt" id="2"></button>

              </div>
            </div>

            <div className="row">
              <div className="col-md-4 each_box">
                  <button value="3" onClick={this.move.bind(this)}  className="butt" id="3"></button>

              </div>
              <div className="col-md-4 each_box">
                  <button value="4" onClick={this.move.bind(this)}  className="butt" id="4"></button>

              </div>
              <div className="col-md-4 each_box">
                  <button value="5" onClick={this.move.bind(this)}  className="butt" id="5"></button>

              </div>
            </div>

            <div className="row">
              <div className="col-md-4 each_box">
                  <button value="6" onClick={this.move.bind(this)}  className="butt" id="6"></button>

              </div>
              <div className="col-md-4 each_box">
                  <button value="7" onClick={this.move.bind(this)}  className="butt" id="7"></button>

              </div>
              <div className="col-md-4 each_box">
                  <button value="8" onClick={this.move.bind(this)}  className="butt" id="8"></button>

              </div>
            </div>
            <button className="new_game" onClick={this.newGame.bind(this)}>NEW GAME</button>
          </div>
        </div>
      );
    }
}

export default App;
