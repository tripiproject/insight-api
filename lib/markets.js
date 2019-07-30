'use strict';

function MarketsController(options) {
    this.marketsService = options.marketsService
}

MarketsController.prototype.getBlockChainInfo = function(req, res) {
    return this.marketsService.getBlockChainInfo(function (err, info) {
        return res.json(info);
    });
};

module.exports = MarketsController;