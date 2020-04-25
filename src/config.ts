let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://rollin.candy.surf/api/',
	trustedDaemonsAddresses:[
		'https://wow.candy.surf:34568/'
	],
	phpRelay:typeof window !== 'undefined' ? true : false,
	mainnetExplorerUrl: "https://explore.wownero.com/",
	mainnetExplorerUrlHash: "https://explore.wownero.com/transaction.html?hash={ID}",
	mainnetExplorerUrlBlock: "https://explore.wownero.com/block.html?height={ID}",
	testnetExplorerUrl: "http://testnet.wownero.net/",
	testnetExplorerUrlHash: "http://testnet.wownero.net/tx/{ID}",
	testnetExplorerUrlBlock: "http://testnet.wownero.net/block/{ID}",
	testnet: false,
	coinUnitPlaces: 11,
	txMinConfirms: 4,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
	txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
	addressPrefix: 4146,
	integratedAddressPrefix: 6810,
	addressPrefixTestnet: 53,
	integratedAddressPrefixTestnet: 54,
	subAddressPrefix: 12208,
	subAddressPrefixTestnet: 63,
	feePerKB: new JSBigInt('1000000000'), //20^10 - for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('1000000000'), //10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 21, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'WOW',
	openAliasPrefix: "wow",
	coinName: 'Wownero',
	coinUriPrefix: 'wownero:',
	avgBlockTime: 60,
	maxBlockNumber: 500000000,

	donationAddresses : [
		'5qfrSvgYutM1aarmQ1px4aDiY9Da7CLKKDo3UkPuUnQ7bT7tr7i4spuLaiZwXG1dFQbkCinRUNeUNLoNh342sVaqTaWqvt8',
		'5nYWvcvNThsLaMmrsfpRLBRou1RuGtLabUwYH7v6b88bem2J4aUwsoF33FbJuqMDgQjpDRTSpLCZu3dXpqXicE2uSWS4LUP',
		'9ppu34ocgmeZiv4nS2FyQTFLL5wBFQZkhAfph7wGcnFkc8fkCgTJqxnXuBkaw1v2BrUW7iMwKoQy2HXRXzDkRE76Cz7WXkD'
	]
};
