
import { Deck , Player , PileDeck , TableDeck , Card , playersScore } from './export-tomain.js';



const tableDeck = new TableDeck();
const pileDeck = new PileDeck();

const Ben = new Player(tableDeck.deal5Cards(),"Ben");
const amit = new Player(tableDeck.deal5Cards(),"amit");

let cards = [Ben.playerDeck[2] ,Ben.playerDeck[3]]
Ben.throwCards( cards , pileDeck);
console.log(Ben);
console.log(amit);
Ben.Yaniv([Ben , amit]);
console.log(Ben);
console.log(amit);
Ben.score = 3;
playersScore([Ben , amit]);
////ben&gil:
// let tableDeck = new TableDeck;
// // playerDeck = tableDeck.deal5Cards();
// // console.log(playerDeck);
// let player1 = new Player(tableDeck.deal5Cards);
// console.log(tableDeck);

// player1.drawTableCard(tableDeck.drawCard());
// console.log(player1);
// console.log(tableDeck);
// // guess a card and run in console.
//     guessACard(tableDeck);





























// console.log(deck.shuffle());
// console.log(deck.shuffle());
//  tasks
    //   1 - create basic deck class with only drawTopCard method
    //   2   - create tableDeck: - constructor, shuffle, dealCards and inherit drawTopCard      !!extend Deck!!
    //   3   - pileDeck - method: transition to tableDeck and inherit drawTopCard
    //   4 - player class diffuclty level its over 9000 !!!!
    //          -   drawTableCard
    //          -   drawPileCard
    //          -   throwCards(1card,2cards,3cards,4cards,seria)
    //          -   Yaniv
    //          -   (stickCard)



// const deck = new Deck();
// console.log(deck);
// deck.Shuffle();
// deck.Bla();
// // console.log(deck[0].CardName());
// console.log(deck.cards);
// let deck = new Deck();
// deck.shuffle();
// player1 = deck.dealCards();
// player2 = deck.dealCards();
// player3 = deck.dealCards();
// player4 = deck.dealCards();
// console.log(deck);

















// OBJECTS-
//   - BOARD 
//   - (Reminders of cards) Deck => ([cards]);
//   - PileDeck => ([cards]);





// Use Class name 'Card' with properties 'suit': (Spade, Heart, Club, Diamond), 'rank'(A, 1-10, J, Q, K), 'isJocker'(true, false).

// button 

loadGameSetup(); // players creation
// const players = [{player1}, {player2}, {player3}, {player4}];
// createGame(players) {
//     while(!winner){
//        round(players);
//         playersUpdate(players)
//         //   -optional removePlayers();
//         scoreUpdate(players);
//         showScore();
//     }

// // }; // Deck => playerDeck TableDeck', 'PileDeck'for each player
// async function round(players){
// const currentPlayer = player[0]
//     while(!Yaniv){
//        await turn(currentPlayer);
//        passTurn();
//     }
    
//     scoreCount(players);

// };
// startTurn(player);
// callYaniv();
// chooseCard();

// function trun(player) {
//     player.throwCards(cards);
//     player.drawTableCard(deck.drawCard())
// }
// // function removePlayer(player) {
    
// }

// scoreCount(players) {
//     for (const player in players) {
//         players.score = sum(players.cards);
//     }
// }

// function playersUpdate() {
    
    //     if(player.score > 200) {
        //       players = removePlayer(playerToRemove);
        //     }
        // }
        
        // YanivDecleration() {
            
            // }
            // function renderTable(Board);
            // function renderTable([players], tableDeck, pileDeck);
            
      // Use Class name 'Deck', and classes 'PlayerDeck', 'TableDeck', and 'PileDeck' which inherit from 'Deck'.
    
     










      function guessACard() {
        const deck = new TableDeck();
        deck.shuffle();
        const player = new Player([], "Danks", 'male');
    
        player.drawTableCard(deck.drawCard());
        console.log(player.playerDeck[0]);
    }
      
   
      