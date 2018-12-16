(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,t,a){e.exports=a(370)},175:function(e,t){},177:function(e,t){},204:function(e,t){},249:function(e,t){},323:function(e,t,a){},344:function(e,t,a){},346:function(e,t,a){},348:function(e,t,a){},368:function(e,t,a){},370:function(e,t,a){"use strict";a.r(t);var n,s=a(1),i=a.n(s),o=a(129),r=a.n(o),l=a(130),u=a.n(l),d=(a(323),a(131)),p=a(132),c=a(135),m=a(133),y=a(136),b=a(46),f=a(17);var w,h=function(e){n=e.app;var t="",a="https://etherscan.io/block/"+e.currentBlock;return e.currentBlock.length>0?t="Current Block: ":Object(f.useWeb3Context)().web3js.eth.getBlockNumber().then(function(e){n.setState({currentBlock:e.toString()})}),i.a.createElement("div",null,i.a.createElement("div",{className:"AccountsLabel"},i.a.createElement("p",{className:"SameLine"},i.a.createElement("b",null,"Accounts"))),i.a.createElement("div",{className:"CurrentBlock"},i.a.createElement("p",{className:"SameLine"},t),i.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},e.currentBlock)))};a(342),a(344);var v,_,x=function(e){w=e.app;var t=[];e.accounts.forEach(function(e){var a=(e.totalEthSupply/1e18).toFixed(6),n=(e.totalEthBorrow/1e18).toFixed(6),s=+(a/n).toFixed(6),i="";i=s<1.5?"unsafe":s<=2?"risky":"safe";var o=(100*s).toFixed(6)+"%",r={address:e.address,supply:a,borrow:n,ratio:o,state:i,block:e.blockUpdated};t.push(r)});var a=[{Header:"Address",accessor:"address",maxWidth:750,Cell:function(e){return i.a.createElement("a",{href:"https://etherscan.io/address/"+e.value,target:"_blank",rel:"noopener noreferrer"},e.value)}},{Header:"Last Updated",accessor:"block",maxWidth:200,className:"right",Cell:function(e){return i.a.createElement("a",{href:"https://etherscan.io/block/"+e.value,target:"_blank",rel:"noopener noreferrer"},e.value)}},{Header:"Supply",accessor:"supply",maxWidth:200,className:"right"},{Header:"Borrow",accessor:"borrow",maxWidth:200,className:"right"},{Header:"Ratio",accessor:"ratio",maxWidth:200,className:"right"},{Header:"State",accessor:"state",maxWidth:200,Cell:function(e){return i.a.createElement("span",null,i.a.createElement("span",{style:{color:"safe"===e.value?"#57d500":"risky"===e.value?"#ffbf00":"#ff2e00",transition:"all .3s ease"}},"\u25cf")," ","safe"===e.value?"Safe":"risky"===e.value?"Risky":"Unsafe")}},{Header:"",accessor:"liquidate",maxWidth:200,Cell:function(e){return i.a.createElement("button",{className:"InspectButton",onClick:function(){return t=e.row.address,a=e.original.state,void w.setState({inspected_address:t,inspected_address_state:a});var t,a}},"Inspect")}}];return i.a.createElement("div",{className:"AccountsTable"},i.a.createElement(h,{currentBlock:e.currentBlock,app:w}),i.a.createElement("br",null),i.a.createElement(b.a,{data:t,columns:a,defaultPageSize:15,showPageSizeOptions:!1,className:"-striped"}),i.a.createElement("p",null,i.a.createElement("a",{href:"https://github.com/conlan/compound-liquidator",target:"_blank",rel:"noopener noreferrer"},"Github")," ","|"," ",i.a.createElement("a",{href:"https://compound.finance",target:"_blank",rel:"noopener noreferrer"},"Compound")," ","|"," ",i.a.createElement("a",{href:"https://compound.finance/developers#liquidate",target:"_blank",rel:"noopener noreferrer"},"Documentation")," ","| Use at your own"," ",i.a.createElement("b",null,i.a.createElement("font",{color:"red"},"risk!"))))},g=a(34),B=(a(346),{tokens:[{symbol:"WETH",address:"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",decimals:18},{symbol:"DAI",address:"0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359",decimals:18},{symbol:"BAT",address:"0x0D8775F648430679A709E98d2b0Cb6250d2887EF",decimals:18},{symbol:"ZRX",address:"0xE41d2489571d322189246DaFA5ebDe1F4699F498",decimals:18},{symbol:"REP",address:"0x1985365e9f78359a9B6AD760e32412f4a445E862",decimals:18}],liquidationAddress:"0x1055be4bf7338c7606d9efdcf80593f180ba043e",liquidationABI:[{constant:!0,inputs:[],name:"moneyMarket",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"targetAccount",type:"address"},{name:"assetBorrow",type:"address"},{name:"assetCollateral",type:"address"},{name:"requestedAmountClose",type:"uint256"}],name:"liquidateBorrow",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"moneyMarket_",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{inputs:[{name:"targetAccount",type:"address",indexed:!1},{name:"assetBorrow",type:"address",indexed:!1},{name:"borrowBalanceBefore",type:"uint256",indexed:!1},{indexed:!1,name:"borrowBalanceAccumulated",type:"uint256"},{indexed:!1,name:"amountRepaid",type:"uint256"},{indexed:!1,name:"borrowBalanceAfter",type:"uint256"},{indexed:!1,name:"liquidator",type:"address"},{indexed:!1,name:"assetCollateral",type:"address"},{indexed:!1,name:"collateralBalanceBefore",type:"uint256"},{indexed:!1,name:"collateralBalanceAccumulated",type:"uint256"},{indexed:!1,name:"amountSeized",type:"uint256"},{indexed:!1,name:"collateralBalanceAfter",type:"uint256"}],name:"BorrowLiquidated",type:"event",anonymous:!1},{inputs:[{indexed:!1,name:"error",type:"uint256"},{indexed:!1,name:"info",type:"uint256"},{indexed:!1,name:"detail",type:"uint256"}],name:"Failure",type:"event",anonymous:!1}],moneyMarketAddress:"0x3FDA67f7583380E67ef93072294a7fAc882FD7E7",moneyMarketABI:[{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"address",name:""}],name:"pendingAdmin",inputs:[],constant:!0},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"bool",name:""}],name:"paused",inputs:[],constant:!0},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"address",name:""}],name:"oracle",inputs:[],constant:!0},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"uint256",name:"mantissa"}],name:"liquidationDiscount",inputs:[],constant:!0},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"bool",name:"isSupported"},{type:"uint256",name:"blockNumber"},{type:"address",name:"interestRateModel"},{type:"uint256",name:"totalSupply"},{type:"uint256",name:"supplyRateMantissa"},{type:"uint256",name:"supplyIndex"},{type:"uint256",name:"totalBorrows"},{type:"uint256",name:"borrowRateMantissa"},{type:"uint256",name:"borrowIndex"}],name:"markets",inputs:[{type:"address",name:""}],constant:!0},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"uint256",name:"mantissa"}],name:"collateralRatio",inputs:[],constant:!0},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"uint256",name:"principal"},{type:"uint256",name:"interestIndex"}],name:"supplyBalances",inputs:[{type:"address",name:""},{type:"address",name:""}],constant:!0},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"uint256",name:"mantissa"}],name:"originationFee",inputs:[],constant:!0},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"address",name:""}],name:"collateralMarkets",inputs:[{type:"uint256",name:""}],constant:!0},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"address",name:""}],name:"admin",inputs:[],constant:!0},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"uint256",name:"principal"},{type:"uint256",name:"interestIndex"}],name:"borrowBalances",inputs:[{type:"address",name:""},{type:"address",name:""}],constant:!0},{type:"constructor",stateMutability:"nonpayable",payable:!1,inputs:[]},{type:"fallback",stateMutability:"payable",payable:!0},{type:"event",name:"SupplyReceived",inputs:[{type:"address",name:"account",indexed:!1},{type:"address",name:"asset",indexed:!1},{type:"uint256",name:"amount",indexed:!1},{type:"uint256",name:"startingBalance",indexed:!1},{type:"uint256",name:"newBalance",indexed:!1}],anonymous:!1},{type:"event",name:"SupplyWithdrawn",inputs:[{type:"address",name:"account",indexed:!1},{type:"address",name:"asset",indexed:!1},{type:"uint256",name:"amount",indexed:!1},{type:"uint256",name:"startingBalance",indexed:!1},{type:"uint256",name:"newBalance",indexed:!1}],anonymous:!1},{type:"event",name:"BorrowTaken",inputs:[{type:"address",name:"account",indexed:!1},{type:"address",name:"asset",indexed:!1},{type:"uint256",name:"amount",indexed:!1},{type:"uint256",name:"startingBalance",indexed:!1},{type:"uint256",name:"borrowAmountWithFee",indexed:!1},{type:"uint256",name:"newBalance",indexed:!1}],anonymous:!1},{type:"event",name:"BorrowRepaid",inputs:[{type:"address",name:"account",indexed:!1},{type:"address",name:"asset",indexed:!1},{type:"uint256",name:"amount",indexed:!1},{type:"uint256",name:"startingBalance",indexed:!1},{type:"uint256",name:"newBalance",indexed:!1}],anonymous:!1},{type:"event",name:"BorrowLiquidated",inputs:[{type:"address",name:"targetAccount",indexed:!1},{type:"address",name:"assetBorrow",indexed:!1},{type:"uint256",name:"borrowBalanceBefore",indexed:!1},{type:"uint256",name:"borrowBalanceAccumulated",indexed:!1},{type:"uint256",name:"amountRepaid",indexed:!1},{type:"uint256",name:"borrowBalanceAfter",indexed:!1},{type:"address",name:"liquidator",indexed:!1},{type:"address",name:"assetCollateral",indexed:!1},{type:"uint256",name:"collateralBalanceBefore",indexed:!1},{type:"uint256",name:"collateralBalanceAccumulated",indexed:!1},{type:"uint256",name:"amountSeized",indexed:!1},{type:"uint256",name:"collateralBalanceAfter",indexed:!1}],anonymous:!1},{type:"event",name:"NewPendingAdmin",inputs:[{type:"address",name:"oldPendingAdmin",indexed:!1},{type:"address",name:"newPendingAdmin",indexed:!1}],anonymous:!1},{type:"event",name:"NewAdmin",inputs:[{type:"address",name:"oldAdmin",indexed:!1},{type:"address",name:"newAdmin",indexed:!1}],anonymous:!1},{type:"event",name:"NewOracle",inputs:[{type:"address",name:"oldOracle",indexed:!1},{type:"address",name:"newOracle",indexed:!1}],anonymous:!1},{type:"event",name:"SupportedMarket",inputs:[{type:"address",name:"asset",indexed:!1},{type:"address",name:"interestRateModel",indexed:!1}],anonymous:!1},{type:"event",name:"NewRiskParameters",inputs:[{type:"uint256",name:"oldCollateralRatioMantissa",indexed:!1},{type:"uint256",name:"newCollateralRatioMantissa",indexed:!1},{type:"uint256",name:"oldLiquidationDiscountMantissa",indexed:!1},{type:"uint256",name:"newLiquidationDiscountMantissa",indexed:!1}],anonymous:!1},{type:"event",name:"NewOriginationFee",inputs:[{type:"uint256",name:"oldOriginationFeeMantissa",indexed:!1},{type:"uint256",name:"newOriginationFeeMantissa",indexed:!1}],anonymous:!1},{type:"event",name:"SetMarketInterestRateModel",inputs:[{type:"address",name:"asset",indexed:!1},{type:"address",name:"interestRateModel",indexed:!1}],anonymous:!1},{type:"event",name:"EquityWithdrawn",inputs:[{type:"address",name:"asset",indexed:!1},{type:"uint256",name:"equityAvailableBefore",indexed:!1},{type:"uint256",name:"amount",indexed:!1},{type:"address",name:"owner",indexed:!1}],anonymous:!1},{type:"event",name:"SuspendedMarket",inputs:[{type:"address",name:"asset",indexed:!1}],anonymous:!1},{type:"event",name:"SetPaused",inputs:[{type:"bool",name:"newState",indexed:!1}],anonymous:!1},{type:"event",name:"Failure",inputs:[{type:"uint256",name:"error",indexed:!1},{type:"uint256",name:"info",indexed:!1},{type:"uint256",name:"detail",indexed:!1}],anonymous:!1},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"uint256",name:""}],name:"getCollateralMarketsLength",inputs:[],constant:!0},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"uint256",name:""}],name:"assetPrices",inputs:[{type:"address",name:"asset"}],constant:!0},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"uint256",name:""}],name:"_setPendingAdmin",inputs:[{type:"address",name:"newPendingAdmin"}],constant:!1},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"uint256",name:""}],name:"_acceptAdmin",inputs:[],constant:!1},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"uint256",name:""}],name:"_setOracle",inputs:[{type:"address",name:"newOracle"}],constant:!1},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"uint256",name:""}],name:"_setPaused",inputs:[{type:"bool",name:"requestedState"}],constant:!1},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"int256",name:""}],name:"getAccountLiquidity",inputs:[{type:"address",name:"account"}],constant:!0},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"uint256",name:""}],name:"getSupplyBalance",inputs:[{type:"address",name:"account"},{type:"address",name:"asset"}],constant:!0},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"uint256",name:""}],name:"getBorrowBalance",inputs:[{type:"address",name:"account"},{type:"address",name:"asset"}],constant:!0},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"uint256",name:""}],name:"_supportMarket",inputs:[{type:"address",name:"asset"},{type:"address",name:"interestRateModel"}],constant:!1},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"uint256",name:""}],name:"_suspendMarket",inputs:[{type:"address",name:"asset"}],constant:!1},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"uint256",name:""}],name:"_setRiskParameters",inputs:[{type:"uint256",name:"collateralRatioMantissa"},{type:"uint256",name:"liquidationDiscountMantissa"}],constant:!1},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"uint256",name:""}],name:"_setOriginationFee",inputs:[{type:"uint256",name:"originationFeeMantissa"}],constant:!1},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"uint256",name:""}],name:"_setMarketInterestRateModel",inputs:[{type:"address",name:"asset"},{type:"address",name:"interestRateModel"}],constant:!1},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"uint256",name:""}],name:"_withdrawEquity",inputs:[{type:"address",name:"asset"},{type:"uint256",name:"amount"}],constant:!1},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"uint256",name:""}],name:"supply",inputs:[{type:"address",name:"asset"},{type:"uint256",name:"amount"}],constant:!1},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"uint256",name:""}],name:"withdraw",inputs:[{type:"address",name:"asset"},{type:"uint256",name:"requestedAmount"}],constant:!1},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"uint256",name:""},{type:"uint256",name:""},{type:"uint256",name:""}],name:"calculateAccountValues",inputs:[{type:"address",name:"userAddress"}],constant:!0},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"uint256",name:""}],name:"repayBorrow",inputs:[{type:"address",name:"asset"},{type:"uint256",name:"amount"}],constant:!1},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"uint256",name:""}],name:"liquidateBorrow",inputs:[{type:"address",name:"targetAccount"},{type:"address",name:"assetBorrow"},{type:"address",name:"assetCollateral"},{type:"uint256",name:"requestedAmountClose"}],constant:!1},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"uint256",name:""}],name:"borrow",inputs:[{type:"address",name:"asset"},{type:"uint256",name:"amount"}],constant:!1}],erc20ABI:[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"_owner",type:"address"}],payable:!1,stateMutability:"view",type:"function",constant:!0,name:"balanceOf",outputs:[{name:"balance",type:"uint256"}]},{payable:!1,stateMutability:"view",type:"function",constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}]},{inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",type:"function",constant:!1,outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable"},{inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",type:"function",constant:!0,outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}]});var k,E,M=function(e){v=e.app;var t=e.balanceType,a=e.stateProperty,n=v.state.inspected_address,s=[],o=B.moneyMarketAddress,r=B.moneyMarketABI,l=new((_=Object(f.useWeb3Context)()).web3js.eth.Contract)(r,o);B.tokens.forEach(function(e){var a=!1;e.address in v.state.allowance_states&&(a=v.state.allowance_states[e.address]);var i={symbol:e.symbol,address:e.address,liquidateAsset:e.symbol,clickable:!1,disabled:!0,fetching:!1,allowed:a},o=e.address,r=o+t,u=Math.pow(10,e.decimals);i[t]="",o in v.state.pending_allowances&&(i.fetching=!0),"Borrowed"===t&&o in v.state.borrow_balances?i.Borrowed=v.state.borrow_balances[o]:"Supplied"===t&&o in v.state.supply_balances?i.Supplied=v.state.supply_balances[o]:Object.keys(v.state.pending_balances).length>0||(v.state.pending_balances[r]=0,i.fetching=!0,"Borrowed"===t?l.methods.getBorrowBalance(n,o).call(function(e,t){if(delete v.state.pending_balances[r],null===e){var a=v.state.borrow_balances,n=Number((t/u).toFixed(3));0===n&&(n="0"),a[o]=n,v.setState({borrow_balances:a})}else v.setState({})}):l.methods.getSupplyBalance(n,o).call(function(e,t){if(delete v.state.pending_balances[r],null===e){var a=v.state.supply_balances,n=Number((t/u).toFixed(3));0===n&&(n="0"),a[o]=n,v.setState({supply_balances:a})}else v.setState({})})),"Supplied"in i&&0==i.Supplied||"Borrowed"in i&&0==i.Borrowed?i.clickable=!1:i.clickable=!0,i.disabled=v.state.liquidateBlocked,s.push(i)});var u=[{Header:"Symbol",accessor:"symbol",maxWidth:200},{Header:"Address",accessor:"address",Cell:function(e){return i.a.createElement("a",{href:"https://etherscan.io/address/"+e.value,target:"_blank",rel:"noopener noreferrer"},e.value)}},{Header:t,accessor:t,maxWidth:200,className:"right"},{Header:"",accessor:"liquidateAsset",maxWidth:75,className:"center",Cell:function(e){return e.original.fetching?i.a.createElement("div",{className:"BalanceLoading"},i.a.createElement("img",{alt:"loading",src:"./small-loading.gif"})):!1===e.original.allowed?i.a.createElement("button",{onClick:function(){return function(e){var t=B.liquidationAddress,a=e.original.address,n=B.erc20ABI;new _.web3js.eth.Contract(n,a).methods.approve(t,new g.BigNumber(Math.pow(2,256)-1).toFixed()).send({from:_.account}).on("transactionHash",function(e){console.log("Transaction submitted: https://etherscan.io/tx/"+e),v.state.pending_allowances[a]=!0,v.setState({})}).on("confirmation",function(e,t){delete v.state.pending_allowances[a],v.state.allowance_states[a]=!0,v.setState({})})}(e)},className:"EnableButton"},i.a.createElement("span",{role:"img","aria-label":"Checkmark"},"\u2705")):e.original.clickable?i.a.createElement("input",{type:"radio",className:"LiquidateRadioInput",checked:v.state[a]===e.value,disabled:e.original.disabled,onClick:function(){"asset_repay"===a?v.setState({asset_repay:e.value}):v.setState({asset_collect:e.value})},onChange:function(){console.log(0==e.original.Supplied)}}):i.a.createElement("div",null)}}];return i.a.createElement(b.a,{data:s,columns:u,resizable:!1,showPagination:!1,sortable:!1,className:"AddressInspectorTable -striped",defaultPageSize:s.length})},A=(a(348),""),S=0,q="";function C(){var e=document.getElementById("repaySlider");return new g.BigNumber(e.value/e.max*S).toFixed(4)}function N(){A="",q="",document.getElementById("repaySlider").value=50,document.getElementById("LiquidateButton").innerText="Repay",k.setState({borrow_balances:{},supply_balances:{},pending_balances:{},asset_repay:"",asset_collect:"",repaySubmittedTxHash:"",liquidateBlocked:!0})}var R,F=function(e){if(k=e.app,E=Object(f.useWeb3Context)(),""===A){if(0===Object.keys(k.state.pending_balances).length){var t=B.moneyMarketAddress,a=B.moneyMarketABI,n=new E.web3js.eth.Contract(a,t);n.methods.getAccountLiquidity(k.state.inspected_address).call(function(e,t){if(null==e){var a=(A=(t/1e18).toFixed(6))>=0;k.setState({liquidateBlocked:a})}else console.log(e)})}k.state.liquidationDiscount<0&&n.methods.liquidationDiscount().call(function(e,t){null==e&&(t/=1e18,k.setState({liquidationDiscount:t}))})}var s=!1;Object.keys(k.state.borrow_balances).length<Object.keys(B.tokens).length?s=!0:Object.keys(k.state.supply_balances).length<Object.keys(B.tokens).length&&(s=!0);var o=!1,r="",l="",u="",d=!0;if(k.state.asset_repay.length>0&&k.state.asset_collect.length>0)if(k.state.asset_repay!==k.state.asset_collect)if(o=!0,r="You can repay up to (~"+-A+" ETH) worth of "+k.state.asset_repay+" to receive discounted "+k.state.asset_collect+". (Note: Repaying specific amounts coming soon.)",d=!1,B.tokens.forEach(function(e){e.symbol===k.state.asset_repay&&(q=e.address)}),q in k.state.asset_prices){var p=k.state.asset_prices[q];S=-A/p}else S=0;else r="Unable to repay "+k.state.asset_repay+" for same asset "+k.state.asset_collect+".";k.state.repaySubmittedTxHash.length>0&&(l="Repay submitted! View your tx: ",u="https://etherscan.io/tx/"+k.state.repaySubmittedTxHash);var c="";c=k.state.liquidationDiscount<0?"-":100*k.state.liquidationDiscount;var m="";A.length>0?m=A+" ETH":s=!0;var y="risky"===k.state.inspected_address_state?"#ffbf00":"safe"===k.state.inspected_address_state?"#57d500":"#ff2e00",b=k.state.inspected_address_state;return i.a.createElement("div",{className:"AddressInspector"},i.a.createElement("div",null,i.a.createElement("p",{className:"SameLine"},i.a.createElement("b",null,"Address:")," ",i.a.createElement("i",null,k.state.inspected_address)),i.a.createElement("button",{className:"RefreshButton",onClick:function(){return N()},disabled:s},"Refresh")),i.a.createElement("p",null,i.a.createElement("b",null,"Account Liquidity:")," ",m),i.a.createElement("span",null,i.a.createElement("p",null,i.a.createElement("b",null,"State: "),i.a.createElement("span",{style:{color:y}},"\u25cf")," ",b)),i.a.createElement("p",null,"Choose an asset to receive at ",c,"% discount:"),i.a.createElement(M,{app:k,balanceType:"Supplied",stateProperty:"asset_collect"}),i.a.createElement("p",null,"Choose a different asset to repay on behalf of borrower to return their ",i.a.createElement("b",null,"Account Liquidity")," to 0:"),i.a.createElement(M,{app:k,balanceType:"Borrowed",stateProperty:"asset_repay"}),i.a.createElement("p",{className:"LiquidationDetails"},r),i.a.createElement("p",{className:"TransactionSubmissionDetails"},l,i.a.createElement("a",{href:u,rel:"noopener noreferrer",target:"_blank"},u)),i.a.createElement("div",{className:"ButtonDiv"},i.a.createElement("button",{className:"BackButton",onClick:function(){return A="",q="",void k.setState({inspected_address:"",borrow_balances:{},supply_balances:{},pending_balances:{},asset_repay:"",asset_collect:"",repaySubmittedTxHash:"",liquidateBlocked:!0})}},"Back"),i.a.createElement("button",{className:"LiquidateButton",disabled:!o,id:"LiquidateButton",onClick:function(){return function(){var e=C();if(0===Number(e))window.alert("Please set an amount greater than 0.");else{var t=E.account,a=k.state.inspected_address,n="",s=0,i="";B.tokens.forEach(function(e){e.symbol===k.state.asset_collect&&(i=e.address),e.symbol===k.state.asset_repay&&(n=e.address,s=Math.pow(10,e.decimals))}),e=new g.BigNumber(e*s).toFixed(),console.log(e);var o=B.liquidationAddress,r=B.liquidationABI;new E.web3js.eth.Contract(r,o).methods.liquidateBorrow(a,n,i,e).send({from:t}).on("transactionHash",function(e){k.setState({asset_repay:"",asset_collect:"",repaySubmittedTxHash:e})}).on("confirmation",function(e,t){k.state.repaySubmittedTxHash===t.transactionHash&&N()})}}()}},"Repay"),i.a.createElement("input",{type:"range",onInput:function(){return function(){document.getElementById("repaySlider");var e=document.getElementById("LiquidateButton"),t=C();e.innerText="Repay "+t+" "+k.state.asset_repay}()},min:"0",max:"100",className:"slider",id:"repaySlider",disabled:d})))},I=a(134),D=a.n(I);a(368);function L(e){return R=Object(f.useWeb3Context)(),i.a.createElement("div",null)}var O=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={accounts:[],inspected_address:"",inspected_address_state:"",borrow_balances:{},supply_balances:{},pending_balances:{},pending_allowances:{},allowance_states:{},asset_prices:{},asset_repay:"",asset_collect:"",repaySubmittedTxHash:"",liquidationDiscount:-1,liquidateBlocked:!0,currentBlock:""},e}return Object(y.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){0==this.state.accounts.length&&this.refreshAccountList(),this.refreshAllowanceAmounts()}},{key:"render",value:function(){return this.state.inspected_address.length>0?i.a.createElement(F,{app:this}):0==this.state.accounts.length?i.a.createElement("div",null,i.a.createElement(L,null),i.a.createElement("img",{src:"./loading.gif",className:"Loading"})):i.a.createElement(x,{accounts:this.state.accounts,app:this,currentBlock:this.state.currentBlock})}},{key:"refreshAllowanceAmounts",value:function(){var e=this,t=B.liquidationAddress,a=B.erc20ABI,n=this,s=new R.web3js.eth.Contract(B.moneyMarketABI,B.moneyMarketAddress);B.tokens.forEach(function(i){i.address in e.state.allowance_states==0&&new R.web3js.eth.Contract(a,i.address).methods.allowance(R.account,t).call(function(e,t){null===e&&t>0&&(n.state.allowance_states[i.address]=!0,n.setState({}))});if(i.address in e.state.asset_prices==0){var o=Math.pow(10,i.decimals);s.methods.assetPrices(i.address).call(function(e,t){null===e&&(t/=o,console.log(i.symbol+" "+t),n.state.asset_prices[i.address]=t)})}})}},{key:"refreshAccountList",value:function(){var e=this;D()({method:"post",url:"https://api.compound.finance/api/risk/v1/get_account_values",headers:{Accept:"application/json","Content-Type":"application/json"},data:{page_size:100,page_number:1,min_borrow_value_in_eth:{value:"50000000000000000"},max_collateral_ratio:{value:"5"}}}).then(function(t){console.log(t),function(e,t){var a=[];e.account_values.forEach(function(e){var t={address:e.address,totalEthBorrow:e.total_borrow_value_in_eth.value,totalEthSupply:e.total_supply_value_in_eth.value,blockUpdated:e.block_updated};a.push(t)});var n="";if("URLSearchParams"in window){var s=new URLSearchParams(window.location.search);s.has("address")&&(n=s.get("address"))}t.setState({accounts:a,inspected_address:n})}(t.data,e)}).catch(function(e){console.error(e)})}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=document.getElementById("root");r.a.render(i.a.createElement(function(){return i.a.createElement(u.a,null,i.a.createElement(O,null))},null),j),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[138,8,7]]]);
//# sourceMappingURL=main.19b55f3e.chunk.js.map