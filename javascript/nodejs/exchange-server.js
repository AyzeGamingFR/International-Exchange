var fs = require("fs");
var http = require("http");
var socket = require("socket");
var url = require("url");

var scrypt_a = require("./algos/scrypt.js");
var scryptd_a = require("./algos/scryptd.js");
var scryptt_a = require("./algos/scryptt.js");
var scryptq_a = require("./algos/scryptq.js");
var sha256_a = require("./algos/sha256.js");
var sha256d_a = require("./algos/sha256d.js");
var sha256t_a = require("./algos/sha256t.js");
var sha256q_a = require("./algos/sha256q.js");
var randomx_a = require("./algos/randomx.js");
var x11_a = require("./algos/x11.js");
var x11d_a = require("./algos/x11d.js");
var x11t_a = require("./algos/x11t.js");
var x11q_a = require("./algos/x11q.js");
var x12_a = require("./algos/x12.js");
var x12d_a = require("./algos/x12d.js");
var x12t_a = require("./algos/x12t.js");
var x12q_a = require("./algos/x12q.js");
var x13_a = require("./algos/x13.js");
var x13d_a = require("./algos/x13d.js");
var x13t_a = require("./algos/x13t.js");
var x13q_a = require("./algos/x13q.js");

var cryptocurrencys_listed = ["BTC", "LTC", "MARS", "MOON", "SPACE", "XMR"];
var cryptocurrencys_listed_database = {
    
    "BCH": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "BTC": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "LTC": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "MARS": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "MOON": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "QBASE": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "SPACE": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "XMR": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    }
    
};

function createRawTransaction(var crypto_ticker, var amount, var receiver_address, var fees) {
    
    
    
};
function signRawTransaction(var crypto_ticker, var private_address) {
    
    
    
};
function sendRawTransaction(var rawtransaction) {
    
    
    
};

function withdraw(var cryptocurrency_ticker, var account_hashed_key, var account_hashed_password, var amount, var receiver, var network_fees) {
    
    if (cryptocurrency_ticker == cryptocurrencys_listed) {
        
        
        
    } else {
        
        return("{'error': 1, 'error_message': 'This cryptocurrency is not in the currencys list !'}");
        
    };
    
};
