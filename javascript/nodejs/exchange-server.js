var fs = require("fs");
var http = require("http");
var socket = require("socket");
var url = require("url");

var cryptocurrencys_listed = ["BTC", "LTC", "MARS", "MOON", "SPACE", "XMR"];
var cryptocurrencys_listed_database = {
    
    "BTC": {
        
        
        
    },
    "LTC": {
        
        
        
    },
    "MARS": {
        
        
        
    },
    "MOON": {
        
        
        
    },
    "SPACE": {
        
        
        
    },
    "XMR": {
        
        "deposabled": 0,
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
        
        
        
    };
    
};
