'use strict';

function MarketsController(options) {
    this.marketsService = options.marketsService
}

MarketsController.prototype.getBlockchainInfo = function(req, res) {
    return this.marketsService.getBlockchainInfo(function (err, info) {
        return res.json(info);
    });
};

module.exports = MarketsController;