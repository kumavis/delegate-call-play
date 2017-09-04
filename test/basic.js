// // var Promise = require('bluebird').Promise;
// // var jsonfile = Promise.promisifyAll(require('jsonfile'));
// // var TokenA = artifacts.require("./TokenA.sol");
// // var TokenB = artifacts.require('./TokenB.sol');
// // var TokenC = artifacts.require('./TokenC.sol');
// // var TokenD = artifacts.require('./TokenD.sol');
// // var TokenE = artifacts.require('./TokenE.sol');
// // var Settle = artifacts.require('./Settle.sol');
// // var obj = require(`${process.cwd()}/../test/setup/tokens.json`);
// // var keys = require(`${process.cwd()}/../test/keys.json`);
// // var web3 = require('../../config.js').web3;
// // var users = require(`${process.cwd()}/../test/test.json`).addr;
// // var eth = Promise.promisifyAll(web3.eth)
// // var supply = 1 * Math.pow(10, 20)
// // var prm = require('../../config.js').secrets.prm_addr;

// contract('Game', function(accounts) {
// //   var tokenA;
// //   var tokenB;

//   it('Should deploy Settlement contract and get address', function() {
//     return Game.deployed()    
// //     return Settle.deployed()
// //     .then(function(instance) {
// //       assert.notEqual(instance.address, null);
// //       obj.version = instance.address;
// //       obj.tokens = {};
// //       // Send some ether to the prm
// //       var sendObj = { from: accounts[0], value: 5*Math.pow(10, 18), to: prm };
// //       return Promise.resolve(eth.sendTransactionAsync(sendObj))
// //       .then(() => {
// //         sendObj.to = users.alice;
// //         return Promise.resolve(eth.sendTransactionAsync(sendObj));
// //       })
// //       .then(() => {
// //         sendObj.to = users.bob;
// //         return Promise.resolve(eth.sendTransactionAsync(sendObj));
// //       })
// //     })
// //   })

// //   it("Should deploy tokenA and send it to the PRM", function() {
// //     return TokenA.deployed()
// //     .then(function(instance) {
// //       tokenA = instance;
// //       assert.notEqual(instance.address, null);
// //       obj.tokens.a1 = instance.address;
// //       return tokenA.transfer.sendTransaction(prm, supply, { from: accounts[0] })
// //     });
// //   });

// //   it("Should deploy tokenB and get the address", function() {
// //     return TokenB.deployed()
// //     .then(function(instance) {
// //       tokenB = instance;
// //       assert.notEqual(instance.address, null);
// //       obj.tokens.a7 = instance.address;
// //       return tokenB.transfer.sendTransaction(prm, supply, { from: accounts[0] })
// //     });
// //   });

// //   it("Should deploy tokenC and get the address", function() {
// //     return TokenC.deployed()
// //     .then(function(instance) {
// //       tokenC = instance;
// //       assert.notEqual(instance.address, null);
// //       obj.tokens.b1 = instance.address;
// //       return tokenC.transfer.sendTransaction(prm, supply, { from: accounts[0] })
// //     });
// //   });

// //   it("Should deploy tokenD and get the address", function() {
// //     return TokenD.deployed()
// //     .then(function(instance) {
// //       tokenD = instance;
// //       assert.notEqual(instance.address, null);
// //       obj.tokens.b7 = instance.address;
// //       return tokenD.transfer.sendTransaction(prm, supply, { from: accounts[0] })
// //     });
// //   });

// //   it("Should deploy tokenE and get the address", function() {
// //     return TokenE.deployed()
// //     .then(function(instance) {
// //       tokenE = instance;
// //       assert.notEqual(instance.address, null);
// //       obj.tokens.dollar = instance.address;
// //       return tokenE.transfer.sendTransaction(prm, supply, { from: accounts[0] })
// //     });
// //   });


// //   it('Should save the addresses to a json file', function() {
// //     jsonfile.writeFileAsync(`./../test/setup/tokens.json`, obj, {spaces: 2});
// //     jsonfile.writeFileAsync(`./../exchange.json`, { addr: obj.version }, { spaces: 2 });
// //   })

// // })

// // function timeout(n) {
// //   return new Promise(function(accept, reject) {
// //    setTimeout(function() {
// //      accept();
// //    }, n);
// //  });
// // }