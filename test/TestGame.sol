pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Game.sol";

contract TestGame {

  function testFireball() {
    Game game = Game(DeployedAddresses.Game());
    // GameCard fireball = GameCard(DeployedAddresses.GameCard_FireBall());

    // game.playCard(fireball)
    uint eight = 8;
    uint ten = 10;

    Assert.equal(game.player1Life(), ten, "Player 1 should have 10 life");
    Assert.equal(game.player2Life(), eight, "Player 2 should have 8 life");
  }

}
