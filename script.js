// Initialize variables
let lottoNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 46, 47, 48, 49, 50, 51,52
];
//document.write(lottoNum);

let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

let h2 = document.querySelector("h2");

h2.innerHTML = `${day} ${hours}:${minutes}`;

let userNum = [];
let matchNum = [];
let numberOfNum =6;
let maxNum = 52;

//function responsible displaying balls
const displayBallsArena = () => {
    ballsArena.arenaArr.forEach((ball) => {
      const myBall = document.createElement("div");
      myBall.classList.add("ball");
      myBall.innerText = ball.number;
      myBall.dataset.number = ball.number;
      ballContainer.appendChild(myBall);
      ballsArena.displaydBallsArr.push(myBall);
      myBall.addEventListener("click", () => clickBall(ball, myBall));
    });
  };
  

// Function to generate random lotto numbers
function createNum(){
  while (lottoNum.length < numberOfNum) {
    let randomNum = Math.floor(Math.random() * maxNum) + 1;
    if (!lottoNum.includes(randomNum)) {
        lottoNum.push(randomNum);
    }
}
document.getElementById("result").innerHTML = "Lotto Numbers: " + lottoNum.join(', ');
}

function getNumBox() {
    const container = document.getElementById('numberContainer');
    for (let i = 1; i <= maxNum; i++) {
        let box = document.createElement('div');
        box.className = `box ${getColor(i)}`;
        box.id = `box${i}`;
        box.innerHTML = i;
        box.onclick = () => selectNumber(i);
        container.appendChild(box);
    }
}
function getColor(num) {
    if (num <= 13) return 'boxred';
    if (num <= 25) return 'boxyellow';
    if (num <= 37) return 'boxgreen';
    return 'boxblue';
}



function selectNumber(num) {
    let box = document.getElementById("box" + num);
    if (userNum.includes(num)) {
        userNum = userNum.filter(n => n !== num);
        box.classList.remove("selected");
    } else {
        if (userNum.length < numberOfNum) {
            userNum.push(num);
            box.classList.add("selected");
        } else {
            alert("You can only select " + numberOfNum + " numbers.");
        }
    }
}
  

function getInputNum(){
    let input = document.getElementById("numberInput").value;
    let inputArray = input.split(',').map(num => parseInt(num.trim()));
    for (let num of inputArray) {
        if (isNaN(num) || num < 1 || num > maxNum) {
            alert("Invalid input. Please enter numbers between 1 and " + maxNum);
            return;
        }
    }
    userNum = inputArray;
    document.getElementById("result").innerHTML = "User Numbers: " + userNum.join(', ');
}

  
 let winTicket = createNum();
 document.querySelector(".winnumber");

    function checkNum() {
        matchNum = userNum.filter(num => lottoNum.includes(num));
        document.write("Matching Numbers: " + matchNum.join(', ') + "<br>");
        document.write("Number of Matches: " + matchNum.length + "<br>");
    }

createNum()
getInputNum()
checkNum()

<<<<<<< HEAD
/*function displayTickets(){
    let ticketElement = document.querySelector(".keyboard");
    let tickets = ["Ticket1", "Ticket2", "Ticket3", "Ticket4", "Ticket5", "Ticket6", "Ticket7", "Ticket8", "Ticket9", "Ticket10"];
    let ticketHTML = '<div class="row">';
    tickets.forEach(function(ticket){
        ticketHTML = ticketHTML +
        ''
    });
}*/
=======
    simulateDrawButton.addEventListener('click', simulateDraw);

    function generateBoards(boardCount, lottoPlus1, lottoPlus2) {
        boardContainer.innerHTML = '';
        ticketInfo.innerHTML = '';
        let ticketPrice = 0;
        let ticket = {
            id: generateTicketId(),
            date: new Date().toISOString(),
            boards: [],
            lottoPlus1: lottoPlus1,
            lottoPlus2: lottoPlus2,
            price: 0
        };

        for (let i = 0; i < boardCount; i++) {
            let board = createBoard();
            ticket.boards.push(board);
            ticketPrice += 5;

            if (lottoPlus1) ticketPrice += 2.5;
            if (lottoPlus2) ticketPrice += 2.5;
        }

        ticket.price = ticketPrice;
        userTickets.push(ticket);
        localStorage.setItem('userTickets', JSON.stringify(userTickets));

        ticketInfo.textContent = `Ticket ID: ${ticket.id}, Total Price: R${ticket.price.toFixed(2)}`;
    }
>>>>>>> 4cdaf445aa7af93b1a70c23c91150cbe624673f2
