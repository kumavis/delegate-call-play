pragma solidity ^0.4.4;

contract GameState {

  uint32 public player1Life;
  uint32 public player2Life;

}

contract GameCard is GameState {
  function play() returns (bool) {
    return false;
  }
}

contract GameCard_FireBall is GameCard {
  function play() returns (bool) {
    player2Life -= 2;
    return true;
  }
}

contract Game is GameState {

  GameCard testCard;

  function Game() {
    player1Life = 10;
    player2Life = 10;
    testCard = new GameCard_FireBall();
    playCard(testCard);
  }

  function playCard(address card) {
    bytes4 signature = bytes4(bytes32(sha3("play()")));
    bool status = card.delegatecall(signature);
    if (!status) throw;
  }

}
