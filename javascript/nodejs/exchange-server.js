const fs = require("fs");
const http = require("http");
const socket = require("socket.io");
const url = require("url");

const logs = require("./logs.txt");
const users_edb = require("./users.edb");

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
const x13_a = require("./algos/x13.js");
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

// crypto wallets client and http server functions

var internetServer = http.createServer(function(req, res) {
    
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(fs.readFile("./pages/home.html"));
    res.end();
    
});
internetServer.listen(config["servers"["web"["port"]]]);

var wallets_client = socket.Socket();

// exchange functions

function decrypt_edb(var edb_hashed_password) {
    
    
    
};
function encrypt_edb(var edb_hashed_password) {
    
    
    
};

function check_balance(var cryptocurrency_ticker) {
    
    
    
};
function createPublicKey(var cryptocurrency_ticker) {
    
    if (cryptocurrency_ticker.isUpperCase() == true && cryptocurrencys_listed.includes(cryptocurrency_ticker) == true) {
        
        wallets_client.connect(cryptocurrencys_listed_datas["wallet_ip_address"], cryptocurrencys_listed_datas["wallet_port"]);
        wallets_client.send("getnewaddress");
        return (wallets_client.receive())
        
    } else {
        
        return ("{'error': 1, 'error_message': 'The cryptocurrency ticker was not in uppercases or is not listed in the exchange !'}")
        
    };
    
};

function addwithdraw(var cryptocurrency_ticker, var sender, var receiver, var amount, var fees) {
    
    cryptocurrencys_listed["withdraws"].append(`, "${cryptocurrencys_listed["withdraws"].size() +1}": {"from": "${transaction["sender"]}"}`)
    
};
function confirmedwithdraw(var withdraw_id) {
    
    
    
};

function createRawTransaction(var cryptocurrency_ticker, var amount, var receiver_address, var fees) {
    
    return ("")
    
};
function signRawTransaction(var cryptocurrency_ticker, var private_address) {
    
    
    
};
function sendRawTransaction(var cryptocurrency_ticker, var rawtransaction) {
    
    wallets_client.connect(cryptocurrencys_listed[(cryptocurrency_ticker)[""]]);
    
};
function sendFrom(var cryptocurrency_ticker, var sender, var receiver, var amount) {
    
    wallets_client.connect()
    
};

function withdraw(var cryptocurrency_ticker, var account_hashed_key, var account_hashed_password, var receiver, var amount, var fees) {
    
    var raw_transaction = "";
    if (cryptocurrency_ticker.isUpperCase() && cryptocurrencys_listed.includes(cryptocurrency_ticker) && users.includes(account_hashed_key) && account_hashed_password == users[(account_hashed_key)["account_hashed_password"]] && (receiver.size() == cryptocurrencys_listed_datas[(cryptocurrency_ticker)["public_key"["size"]]] || receiver == cryptocurrencys_listed_datas[(cryptocurrency_ticker)["burn_address"]]) && amount < 0 && fees < cryptocurrencys_listed_datas[(cryptocurrency_ticker)["minimum_fees"]]) {
        
        addwithdraw(cryptocurrency_ticker, users[(account_hashed_key)["public_key"]], receiver, amount, fees);
        return (`A withdraw transaction of ${amount} coins from the address ${users[(account_hashed_key)["public_key"]]} was added in the withdraws list, waiting for confirmation from the account owner !`)
        
    } else {
        
        
        return (`{'error': 1, 'error_message': 'Error, when trying to withdraw some coins !`)
        
    };
    
};
