import "./App.css";
var p1 = window.prompt("Enter player 1 name:");
var p2 = window.prompt("Enter player 2 name:");
while (!p1 || !p2) {
  window.alert("Player name should not be blank!");
  p1 = window.prompt("Enter player 1 name:");
  p2 = window.prompt("Enter player 2 name:");
}
while (p1 === p2) {
  window.alert("Both player's should not be same");
  p1 = window.prompt("Enter player 1 name:");
  p2 = window.prompt("Enter player 2 name:");
}
function App() {
  // Function called whenever user tab on any box
  function myfunc() {
    // Setting DOM to all boxes or input field
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    // Checking if Player X won or not and after
    // that disabled all the other fields
    if (
      (b1 === "x" || b1 === "X") &&
      (b2 === "x" || b2 === "X") &&
      (b3 === "x" || b3 === "X")
    ) {
      document.getElementById("print").innerHTML = `${p1} won!`;
      document.getElementById("b4").disabled = true;
      document.getElementById("b5").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b8").disabled = true;
      document.getElementById("b9").disabled = true;
      window.alert(`${p1} won!`);
    } else if (
      (b1 === "x" || b1 === "X") &&
      (b4 === "x" || b4 === "X") &&
      (b7 === "x" || b7 === "X")
    ) {
      document.getElementById("print").innerHTML = `${p1} won!`;
      document.getElementById("b2").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b5").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b8").disabled = true;
      document.getElementById("b9").disabled = true;

      window.alert(`${p1} won!`);
    } else if (
      (b7 === "x" || b7 === "X") &&
      (b8 === "x" || b8 === "X") &&
      (b9 === "x" || b9 === "X")
    ) {
      document.getElementById("print").innerHTML = `${p1} won!`;
      document.getElementById("b1").disabled = true;
      document.getElementById("b2").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b5").disabled = true;
      document.getElementById("b6").disabled = true;
      window.alert(`${p1} won!`);
    } else if (
      (b3 === "x" || b3 === "X") &&
      (b6 === "x" || b6 === "X") &&
      (b9 === "x" || b9 === "X")
    ) {
      document.getElementById("print").innerHTML = `${p1} won!`;
      document.getElementById("b1").disabled = true;
      document.getElementById("b2").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b5").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b8").disabled = true;
      window.alert(`${p1} won!`);
    } else if (
      (b1 === "x" || b1 === "X") &&
      (b5 === "x" || b5 === "X") &&
      (b9 === "x" || b9 === "X")
    ) {
      document.getElementById("print").innerHTML = `${p1} won!`;
      document.getElementById("b2").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b8").disabled = true;
      window.alert(`${p1} won!`);
    } else if (
      (b3 === "x" || b3 === "X") &&
      (b5 === "x" || b5 === "X") &&
      (b7 === "x" || b7 === "X")
    ) {
      document.getElementById("print").innerHTML = `${p1} won!`;
      document.getElementById("b1").disabled = true;
      document.getElementById("b2").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b8").disabled = true;
      document.getElementById("b9").disabled = true;
      window.alert(`${p1} won!`);
    } else if (
      (b2 === "x" || b2 === "X") &&
      (b5 === "x" || b5 === "X") &&
      (b8 === "x" || b8 === "X")
    ) {
      document.getElementById("print").innerHTML = `${p1} won!`;
      document.getElementById("b1").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b9").disabled = true;
      window.alert(`${p1} won!`);
    } else if (
      (b4 === "x" || b4 === "X") &&
      (b5 === "x" || b5 === "X") &&
      (b6 === "x" || b6 === "X")
    ) {
      document.getElementById("print").innerHTML = `${p1} won!`;
      document.getElementById("b1").disabled = true;
      document.getElementById("b2").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b8").disabled = true;
      document.getElementById("b9").disabled = true;
      window.alert(`${p1} won!`);
    }

    // Checking of Player X finish
    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if (
      (b1 === "0" || b1 === "0") &&
      (b2 === "0" || b2 === "0") &&
      (b3 === "0" || b3 === "0")
    ) {
      document.getElementById("print").innerHTML = `${p2} won!`;
      document.getElementById("b4").disabled = true;
      document.getElementById("b5").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b8").disabled = true;
      document.getElementById("b9").disabled = true;
      window.alert(`${p2} won!`);
    } else if (
      (b1 === "0" || b1 === "0") &&
      (b4 === "0" || b4 === "0") &&
      (b7 === "0" || b7 === "0")
    ) {
      document.getElementById("print").innerHTML = `${p2} won!`;
      document.getElementById("b2").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b5").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b8").disabled = true;
      document.getElementById("b9").disabled = true;
      window.alert(`${p2} won!`);
    } else if (
      (b7 === "0" || b7 === "0") &&
      (b8 === "0" || b8 === "0") &&
      (b9 === "0" || b9 === "0")
    ) {
      document.getElementById("print").innerHTML = `${p2} won!`;
      document.getElementById("b1").disabled = true;
      document.getElementById("b2").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b5").disabled = true;
      document.getElementById("b6").disabled = true;
      window.alert(`${p2} won!`);
    } else if (
      (b3 === "0" || b3 === "0") &&
      (b6 === "0" || b6 === "0") &&
      (b9 === "0" || b9 === "0")
    ) {
      document.getElementById("print").innerHTML = `${p2} won!`;
      document.getElementById("b1").disabled = true;
      document.getElementById("b2").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b5").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b8").disabled = true;
      window.alert(`${p2} won!`);
    } else if (
      (b1 === "0" || b1 === "0") &&
      (b5 === "0" || b5 === "0") &&
      (b9 === "0" || b9 === "0")
    ) {
      document.getElementById("print").innerHTML = `${p2} won!`;
      document.getElementById("b2").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b8").disabled = true;
      window.alert(`${p2} won!`);
    } else if (
      (b3 === "0" || b3 === "0") &&
      (b5 === "0" || b5 === "0") &&
      (b7 === "0" || b7 === "0")
    ) {
      document.getElementById("print").innerHTML = `${p2} won!`;
      document.getElementById("b1").disabled = true;
      document.getElementById("b2").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b8").disabled = true;
      document.getElementById("b9").disabled = true;
      window.alert(`${p2} won!`);
    } else if (
      (b2 === "0" || b2 === "0") &&
      (b5 === "0" || b5 === "0") &&
      (b8 === "0" || b8 === "0")
    ) {
      document.getElementById("print").innerHTML = `${p2} won!`;
      document.getElementById("b1").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b4").disabled = true;
      document.getElementById("b6").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b9").disabled = true;
      window.alert(`${p2} won!`);
    } else if (
      (b4 === "0" || b4 === "0") &&
      (b5 === "0" || b5 === "0") &&
      (b6 === "0" || b6 === "0")
    ) {
      document.getElementById("print").innerHTML = `${p2} won!`;
      document.getElementById("b1").disabled = true;
      document.getElementById("b2").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("b7").disabled = true;
      document.getElementById("b8").disabled = true;
      document.getElementById("b9").disabled = true;
      window.alert(`${p2} won!`);
    }

    // Checking of Player 0 finish
    // Here, Checking about Tie
    else if (
      (b1 === "X" || b1 === "0") &&
      (b2 === "X" || b2 === "0") &&
      (b3 === "X" || b3 === "0") &&
      (b4 === "X" || b4 === "0") &&
      (b5 === "X" || b5 === "0") &&
      (b6 === "X" || b6 === "0") &&
      (b7 === "X" || b7 === "0") &&
      (b8 === "X" || b8 === "0") &&
      (b9 === "X" || b9 === "0")
    ) {
      document.getElementById("print").innerHTML = "Match Tie";
      window.alert("Match Tie");
    } else {
      // Here, Printing Result
      if (flag === 1) {
        document.getElementById("print").innerHTML = `${p1}'s Turn`;
      } else {
        document.getElementById("print").innerHTML = `${p2}'s Turn`;
      }
    }
  }

  // Function to reset game
  function myfunc_2() {
    document.getElementById("b1").value = "";
    document.getElementById("b2").value = "";
    document.getElementById("b3").value = "";
    document.getElementById("b4").value = "";
    document.getElementById("b5").value = "";
    document.getElementById("b6").value = "";
    document.getElementById("b7").value = "";
    document.getElementById("b8").value = "";
    document.getElementById("b9").value = "";
  }

  // Here onwards, functions check turn of the player
  // and put accordingly value X or 0
  var flag = 1;
  function myfunc_3() {
    if (flag === 1) {
      document.getElementById("b1").value = "X";
      document.getElementById("b1").disabled = true;
      flag = 0;
    } else {
      document.getElementById("b1").value = "0";
      document.getElementById("b1").disabled = true;
      flag = 1;
    }
  }

  function myfunc_4() {
    if (flag === 1) {
      document.getElementById("b2").value = "X";
      document.getElementById("b2").disabled = true;
      flag = 0;
    } else {
      document.getElementById("b2").value = "0";
      document.getElementById("b2").disabled = true;
      flag = 1;
    }
  }

  function myfunc_5() {
    if (flag === 1) {
      document.getElementById("b3").value = "X";
      document.getElementById("b3").disabled = true;
      flag = 0;
    } else {
      document.getElementById("b3").value = "0";
      document.getElementById("b3").disabled = true;
      flag = 1;
    }
  }

  function myfunc_6() {
    if (flag === 1) {
      document.getElementById("b4").value = "X";
      document.getElementById("b4").disabled = true;
      flag = 0;
    } else {
      document.getElementById("b4").value = "0";
      document.getElementById("b4").disabled = true;
      flag = 1;
    }
  }

  function myfunc_7() {
    if (flag === 1) {
      document.getElementById("b5").value = "X";
      document.getElementById("b5").disabled = true;
      flag = 0;
    } else {
      document.getElementById("b5").value = "0";
      document.getElementById("b5").disabled = true;
      flag = 1;
    }
  }

  function myfunc_8() {
    if (flag === 1) {
      document.getElementById("b6").value = "X";
      document.getElementById("b6").disabled = true;
      flag = 0;
    } else {
      document.getElementById("b6").value = "0";
      document.getElementById("b6").disabled = true;
      flag = 1;
    }
  }

  function myfunc_9() {
    if (flag === 1) {
      document.getElementById("b7").value = "X";
      document.getElementById("b7").disabled = true;
      flag = 0;
    } else {
      document.getElementById("b7").value = "0";
      document.getElementById("b7").disabled = true;
      flag = 1;
    }
  }

  function myfunc_10() {
    if (flag === 1) {
      document.getElementById("b8").value = "X";
      document.getElementById("b8").disabled = true;
      flag = 0;
    } else {
      document.getElementById("b8").value = "0";
      document.getElementById("b8").disabled = true;
      flag = 1;
    }
  }

  function myfunc_11() {
    if (flag === 1) {
      document.getElementById("b9").value = "X";
      document.getElementById("b9").disabled = true;
      flag = 0;
    } else {
      document.getElementById("b9").value = "0";
      document.getElementById("b9").disabled = true;
      flag = 1;
    }
  }

  return (
    <div className="App">
      <h1>TIC TAC TOE GAME - CREATED BY SABYASACHI RAKSHIT</h1>

      <p id="ins">
        Start the game by just clicking on any box
        <br />
        To start a new game with new players, reload the page
        <br />
        First Player starts as X
        <br />
        <b>{p1} starts first</b>
        <br />
        And
        <br />
        Second Player as <b>{p2}</b>
      </p>

      <br />
      <br />
      <input
        type="text"
        id="b1"
        onClick={() => {
          myfunc_3();
          myfunc();
        }}
        readonly
      />

      <input
        type="text"
        id="b2"
        onClick={() => {
          myfunc_4();
          myfunc();
        }}
        readonly
      />

      <input
        type="text"
        id="b3"
        onClick={() => {
          myfunc_5();
          myfunc();
        }}
        readonly
      />
      <br />
      <br />

      <input
        type="text"
        id="b4"
        onClick={() => {
          myfunc_6();
          myfunc();
        }}
        readonly
      />

      <input
        type="text"
        id="b5"
        onClick={() => {
          myfunc_7();
          myfunc();
        }}
        readonly
      />

      <input
        type="text"
        id="b6"
        onClick={() => {
          myfunc_8();
          myfunc();
        }}
        readonly
      />
      <br />
      <br />

      <input
        type="text"
        id="b7"
        onClick={() => {
          myfunc_9();
          myfunc();
        }}
        readonly
      />

      <input
        type="text"
        id="b8"
        onClick={() => {
          myfunc_10();
          myfunc();
        }}
        readonly
      />

      <input
        type="text"
        id="b9"
        onClick={() => {
          myfunc_11();
          myfunc();
        }}
        readonly
      />

      <br />
      <br />
      <br />

      <button id="but" onClick={myfunc_2}>
        RESET
      </button>

      <br />
      <br />

      <p id="print"></p>
    </div>
  );
}

export default App;
