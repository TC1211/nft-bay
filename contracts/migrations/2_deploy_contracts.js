var AuctionFactory = artifacts.require("AuctionFactory");

module.exports = function (deployer) {
  deployer.deploy(AuctionFactory);
};
