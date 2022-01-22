const fs = require("fs");
const http = require("http");
const socket = require("socket");
const url = require("url");

const accounts_edb = require("./accounts.edb");
const logs = require("./logs.txt");

const scrypt_a = require("./algos/scrypt.js");
const scryptd_a = require("./algos/scryptd.js");
const scryptt_a = require("./algos/scryptt.js");
const scryptq_a = require("./algos/scryptq.js");
const sha256_a = require("./algos/sha256.js");
const sha256d_a = require("./algos/sha256d.js");
const sha256t_a = require("./algos/sha256t.js");
const sha256q_a = require("./algos/sha256q.js");
const randomx_a = require("./algos/randomx.js");
const x11_a = require("./algos/x11.js");
const x11d_a = require("./algos/x11d.js");
const x11t_a = require("./algos/x11t.js");
const x11q_a = require("./algos/x11q.js");
const x12_a = require("./algos/x12.js");
const x12d_a = require("./algos/x12d.js");
const x12t_a = require("./algos/x12t.js");
const x12q_a = require("./algos/x12q.js");
conqt x13_a = require("./algos/x13.js");
const x13d_a = require("./algos/x13d.js");
const x13t_a = require("./algos/x13t.js");
const x13q_a = require("./algos/x13q.js");

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
    "DASH": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "DOGE": {
        
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

function decrypt_edb(var edb_hashed_password) {
    
    
    
};
function decrypt_ejsondb(var ejsondb_hashed_password) {
    
    
    
};

function createRawTransaction(var crypto_ticker, var amount, var receiver_address, var fees) {
    
    
    
};
function signRawTransaction(var crypto_ticker, var private_address) {
    
    
    
};
function sendRawTransaction(var rawtransaction) {
    
    
    
};

function withdraw(var cryptocurrency_ticker, var account_hashed_key, var account_hashed_password, var amount, var receiver, var network_fees) {
    
    if (cryptocurrency_ticker) {
        
        if (cryptocurrencys_listed.includes(cryptocurrency_ticker)) {
            
            if (accounts.includes(account_hashed_key)) {
                
                
                
            };
            
        } else {
            
            return("{'error': 1, 'error_message': 'This cryptocurrency is not in the currencys list !'}");
            
        };
        
    } else {
        
        
        
    };
    
};
