const fs = require("fs");
const http = require("http");
const socket = require("socket.io");

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

var cryptocurrencys_listed = ["ANTS", "BCH", "BTC", "DASH", "DGB", "DOGE", "HTH", "LTC", "MARS", "MEGA", "MOON", "MIN", "QBASE", "SPACE", "XMR"];
var cryptocurrencys_listed_database = {
    
    "ANTS": {
        
        "deposable": 0,
        "exchangeable": 0,
        "withdrawable": 0
        
    },
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
    "DGB": {
        
        "deposable": 0,
        "exchangeable": 0,
        "withdrawable": 0
        
    },
    "DOGE": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "HTH": {
        
        "deposable": 0,
        "exchangeable": 0,
        "withdrawable": 0
        
    },
    "LONG": {
        
        "deposable": 0,
        "exchangeable": 0,
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
    "MEGA": {
        
        "deposable": 0,
        "exchangeable": 0,
        "withdrawable": 0
        
    },
    "MOON": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "MIN": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "NEO": {
        
        "deposable": 0,
        "exchangeable": 0,
        "withdrawable": 0
        
    },
    "NEURA": {
        
        "deposable": 0,
        "exchangeable": 0,
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
    "XEM": {
        
        "deposable": 0,
        "exchangeable": 0,
        "withdrawable": 0
        
    },
    "XMR": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    }
    
};
function decryptDatas(var datas, var password) {
    
    var decrypter_constants = [];
    var decrypter_version = 1;
    var decrypter_creator = "AyzeLYC#0666";
    var final_datas = "";
    var number = 0;
    
    number /= password.charCodeAt[0 : password.size()];
           
    
    return (final_datas)
    
};
function encryptDatas(var datas, var password) {
    
    var encrypter_constants = [""];
    var encrypter_version = 1;
    var encrypter_creator = "AyzeLYC#0666";
    var final_datas = "";
    var number = 0;
    var i = 1;
    
    for (datas.size() > 0) {
        
        number += (datas.charCodeAt(datas.size() - 1) * i);
        datas.pop;
        i *= 256;
        
    };
    number *= encrypter_constants.charCodeAt(0);
    number *= encrypter_constants.charCodeAt(1);
    number *= encrypter_constants.charCodeAt(2);
    number *= encrypter_constants.charCodeAt(3);
    number *= encrypter_constants.charCodeAt(4);
    number *= encrypter_constants.charCodeAt(5);
    number *= encrypter_constants.charCodeAt(6);
    number *= encrypter_constants.charCodeAt(7);
    return (final_datas)
    
};

// crypto wallets client and http server functions

var internetServer = http.createServer(function(req, res) {
    
    if (req.url == "/home") {
        
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(fs.readFile("./pages/home.html"));
        
    } else if (req.url == "/login") {
        
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(fs.readFile("./pages/login.html"));
        
    } else if (req.url == "/register") {
        
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(fs.readFile("./pages/register.html"));
        
    } else if (req.url == "/wallet") {
        
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(fs.readFile("./pages/wallet.html"));
        
    } else if (req.url == "/markets") {
        
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(fs.readFile("./pages/markets.html"));
        
    }
    
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
function createPublicKey(var cryptocurrency_ticker, var userhashedid) {
    
    if (cryptocurrency_ticker.isUpperCase() == true && cryptocurrencys_listed.includes(cryptocurrency_ticker) == true && db.includes(userhashedid)) {
        
        if (cryptocurrency_ticker == "ANTS" && db.find(userhashedid) == true && db[userhashedid["ants"["address"["pubkey"]]]] == encryptDatas("NONE", dbPassword)) {
            
            fireants_wallet.send("getnewaddress");
            return (fireants_wallet.recv())
            
        } else if (cryptocurrency_ticker == "BCH" && db.find(userhashedid) == true && db[userhashedid["bch"["address"["pubkey"]]]] == encryptDatas("NONE", dbPassword)) {
            
            bitcoincash_wallet.send("getnewaddress");
            return (bitcoincash_wallet.recv())
            
        } else if (cryptocurrency_ticker == "BTC" && db.find(userhashedid) == true && db[userhashedid["btc"["address"["pubkey"]]]] == encryptDatas("NONE", dbPassword)) {
            
            bitcoin_wallet.send("getnewaddress");
            return (bitcoin_wallet.recv())
            
        } else if (cryptocurrency_ticker == "DASH" && db.find(userhashedid) == true && db[userhashedid["dash"["address"["pubkey"]]]] == encryptDatas("NONE", dbPassword)) {
            
            dash_wallet.send("getnewaddress");
            return (dash_wallet.recv())
            
        } else if (cryptocurrency_ticker == "DGB" && db.find(userhashedid) == true && db[userhashedid["dgb"["address"["pubkey"]]]] == encryptDatas("NONE", dbPassword)) {
            
            digibyte_wallet.send("getnewaddress");
            return (digibyte_wallet.recv())
            
        } else if (cryptocurrency_ticker == "DOGE" && db.find(userhashedid) == true && db[userhashedid["doge"["address"["pubkey"]]]] == encryptDatas("NONE", dbPassword)) {
            
            dogecoin_wallet.send("getnewaddress");
            return (dogecoin_wallet.recv())
            
        } else if (cryptocurrency_ticker == "LTC" && db.find(userhashedid) == true && db[userhashedid["ltc"["address"["pubkey"]]]] == encryptDatas("NONE", dbPassword)) {
            
            litecoin_wallet.send("getnewaddress");
            return (litecoin_wallet.recv())
            
        } else if (cryptocurrency_ticker == "MARS" && db.find(userhashedid) == true && db[userhashedid"mars"["address"["pubkey"]]]] == encryptDatas("NONE", dbPassword)) {
            
            marscoin_wallet.send("getnewaddress");
            return (marscoin_wallet.recv())
            
        } else if (cryptocurrency_ticker == "MEGA" && db.find(userhashedid) == true && db[userhashedid["mega"["address"["pubkey"]]]] == encryptDatas("NONE", dbPassword)) {
            
            megacoin_wallet.send("getnewaddress");
            return (megacoin_wallet.recv())
            
        } else if (cryptocurrency_ticker == "MOON" && db.find(userhashedid) == true && db[userhashedid["moon"["address"["pubkey"]]]] == encryptDatas("NONE", dbPassword)) {
            
            mooncoin_wallet.send("getnewaddress");
            return (mooncoin_wallet.recv())
            
        } else if (cryptocurrency_ticker == "MIN" && db[userhashedid["min"["address"["pubkey"]]]] == encryptDatas("NONE", dbPassword)) {
            
            mincoin_wallet.send("getnewaddress");
            return (mincoin_wallet.recv())
            
        } else if (cryptocurrency_ticker == "QBASE" && db[userhashedid["qbase"["address"["pubkey"]]]] == encryptDatas("NONE", dbPassword)) {
            
            qbasecoin_wallet.send("getnewaddress");
            return (qbasecoin_wallet.recv())
            
        };
        
    } else {
        
        return ("{'error': 1, 'error_message': 'The cryptocurrency ticker was not in uppercases or is not listed in the exchange !'}")
        
    };
    
};

function addwithdraw(var cryptocurrency_ticker, var sender, var receiver, var amount, var fees) {
    
    var tx = sender + receiver + amount + fees;
    cryptocurrencys_listed["withdraws"].append(`, "${cryptocurrencys_listed["withdraws"].size()}": {"from": "${transaction["sender"]}", "to": "${receiver}", "amount": ${amount}, "fees": ${fees * (tx.size() / 1000)}}`)
    
};
function confirmedwithdraw(var withdraw_id) {
    
    
    
};

function createRawTransaction(var ticker, var sender, var amount, var receiver, var fees) {
    
    var tx = "";
    
    if (ticker == "ANTS" && sender.size() == config.ants.pubkeysize && receiver.size() == config.ants.pubkeysize && amount > 0 && fees >= config.ants.minfees) {
        
        tx.join(sender);
        tx.join(receiver);
        tx.join(amount);
        tx.join(fees);
        return (tx)
        
    } else if (ticker == "BCH" && sender.size() == config.bch.pubkeysize && receiver.size() == config.bch.pubkeysize && amount > 0 && fees >= config.bch.minfees) {
        
        tx.join(sender);
        tx.join(receiver);
        tx.join(amount);
        tx.join(fees);
        return (tx)
        
    } else if (ticker == "BTC" && sender.size() == config.btc.pubkeysize && receiver.size() == config.btc.pubkeysize && amount > 0 && fees >= config.btc.minfees) {
        
        tx.join(sender);
        tx.join(receiver);
        tx.join(amount);
        tx.join(fees);
        return (tx)
        
    } else if (ticker == "DASH" && sender.size() == config.dash.pubkeysize && receiver.size() == config.dash.pubkeysize && amount > 0 && fees >= config.dash.minfees) {
        
        tx.join(sender);
        tx.join(receiver);
        tx.join(amount);
        tx.join(fees);
        return (tx)
        
    } else if (ticker == "DGB" && sender.size() == config.dgb.pubkeysize && receiver.size() == config.dgb.pubkeysize && amount > 0 && fees >= config.dgb.minfees) {
        
        tx.join(sender);
        tx.join(receiver);
        tx.join(amount);
        tx.join(fees);
        return (tx)
        
    } else if (ticker == "LTC" && sender.size() == config.ltc.pubkeysize && receiver.size() == config.ltc.pubkeysize && amount > 0 && fees >= config.ltc.minfees) {
        
        tx.join(sender);
        tx.join(receiver);
        tx.join(amount);
        tx.join(fees);
        return (tx)
        
    } else if (ticker == "MARS" && sender.size() == config.mars.pubkeysize && receiver.size() == config.mars.pubkeysize && amount > 0 && fees >= config.mars.minfees) {
        
        tx.join(sender);
        tx.join(receiver);
        tx.join(amount);
        tx.join(fees);
        return (tx)
        
    } else if (ticker == "MEGA" && sender.size() == config.mega.pubkeysize && receiver.size() == config.mega.pubkeysize && amount > 0 && fees >= config.mega.minfees) {
        
        tx.join(sender);
        tx.join(receiver);
        tx.join(amount);
        tx.join(fees);
        return (tx)
        
    } else if (ticker == "MOON" && sender.size() == config.moon.pubkeysize && receiver.size() == config.moon.pubkeysize && amount > 0 && fees >= config.moon.minfees) {
        
        tx.join(sender);
        tx.join(receiver);
        tx.join(amount);
        tx.join(fees);
        return (tx)
        
    } else if (ticker == "MIN" && sender.size() == config.min.pubkeysize && receiver.size() == config.min.pubkeysize && amount > 0 && fees >= config.min.minfees) {
        
        tx.join(sender);
        tx.join(receiver);
        tx.join(amount);
        tx.join(fees);
        return (tx)
        
    } else if (ticker == "QBASE" && sender.size() == config.moon.pubkeysize && receiver.size() == config.moon.pubkeysize && amount > 0 && fees >= config.moon.minfees) {
        
        tx.join(sender);
        tx.join(receiver);
        tx.join(amount);
        tx.join(fees);
        return (tx)
        
    } else if (ticker == "SPACE" && sender.size() == config.space.pubkeysize && receiver.size() == config.space.pubkeysize && amount > 0 && fees >= config.space.minfees) {
        
        tx.join(sender);
        tx.join(receiver);
        tx.join(amount);
        tx.join(fees);
        return (tx)
        
    } else if (ticker == "XMR" && sender.size() == config.xmr.pubkeysize && receiver.size() == config.xmr.pubkeysize && amount > 0 && fees >= config.xmr.minfees) {
        
        tx.join(sender);
        tx.join(receiver);
        tx.join(amount);
        tx.join(fees);
        return (tx)
        
    };
    
};
function signRawTransaction(var cryptocurrency_ticker, var private_address, var tx) {
    
    return ();
    
};
function sendRawTransaction(var cryptocurrency_ticker, var rawtransaction) {
    
    wallets_client.connect(cryptocurrencys_listed[(cryptocurrency_ticker)[""]]);
    
};

function withdraw(var cryptocurrency_ticker, var account_hashed_key, var account_hashed_password, var receiver, var amount, var fees) {
    
    var raw_transaction = "";
    if (cryptocurrency_ticker.isUpperCase() == 1 && cryptocurrencys_listed.includes(cryptocurrency_ticker) && db.includes(account_hashed_key) && account_hashed_password == users.(account_hashed_key).account_hashed_password && receiver.size() == cryptocurrencys_listed_datas.(cryptocurrency_ticker).public_key.size || receiver == cryptocurrencys_listed_datas.(cryptocurrency_ticker).burn_address && amount > 0 && fees > cryptocurrencys_listed_datas.(cryptocurrency_ticker).minimum_fees) {
        
        addwithdraw(cryptocurrency_ticker, users.(account_hashed_key).public_key, receiver, amount, fees);
        return (`A withdraw transaction of ${amount} coins from the address ${users.(account_hashed_key).public_key} was added in the withdraws list, waiting for confirmation from the account owner !`)
        
    } else {
        
        
        return (`{'error': 1, 'error_message': 'Error, when trying to withdraw some coins !`)
        
    };
    
};
function loadBalance(var ticker, var pubkey) {
    
    if (ticker == "ANTS" && pubkey.size() == config.ants.pubkeysize) {
        
        ants_wallet.send(`getbalance ${pubkey}`);
        return (ants_wallet.recv())
        
    } else if (ticker == "BCH" && pubkey.size() == config.bch.pubkeysize) {
        
        bch_wallet.send(`getbalance ${pubkey}`);
        return (bch_wallet.recv())
        
    } else if (ticker == "BTC" && pubkey.size() == config.btc.pubkeysize) {
        
        btc_wallet.send(`getbalance ${pubkey}`);
        return (btc_wallet.recv())
        
    } else if (ticker == "DASH" && pubkey.size() == config.dash.pubkeysize) {
        
        dash_wallet.send(`getbalance ${pubkey}`);
        return (dash_wallet.recv())
        
    } else if (ticker == "DGB" && pubkey.size() == config.dgb.pubkeysize) {
        
        dgb_wallet.send(`getbalance ${pubkey}`);
        return (dgb_wallet.recv())
        
    } else if (ticker == "DOGE" && pubkey.size() == config.doge.pubkeysize) {
        
        doge_wallet.send(`getbalance ${pubkey}`);
        return (doge_wallet.recv())
        
    } else if (ticker == "HTH" && pubkey.size() == config.hth.pubkeysize) {
        
        hth_wallet.send(`getbalance ${pubkey}`);
        return (hth_wallet.recv())
        
    } else if (ticker == "LONG" && pubkey.size() == config.long.pubkeysize) {
        
        long_wallet.send(`getbalance ${pubkey}`);
        return (long_wallet.recv())
        
    } else if (ticker == "LTC" && pubkey.size() == config.ltc.pubkeysize) {
        
        ltc_wallet.send(`getbalance ${pubkey}`);
        return (ltc_wallet.recv())
        
    } else if (ticker == "MARS" && pubkey.size() == config.mars.pubkeysize) {
        
        mars_wallet.send(`getbalance ${pubkey}`);
        return (mars_wallet.recv())
        
    } else if (ticker == "MEGA" && pubkey.size() == config.mega.pubkeysize) {
        
        mega_wallet.send(`getbalance ${pubkeysize}`);
        return (mega_wallet.recv())
        
    } else if (ticker == "MIN" && pubkey.size() == config.min.pubkeysize) {
        
        min_wallet.send(`getbalance ${pubkeysize}`);
        return (min_wallet.recv())
        
    } else if (ticker == "MOON" && pubkey.size() == config.moon.pubkeysize) {
        
        moon_wallet.send(`getbalance ${pubkey}`);
        return (moon_wallet.recv())
        
    } else if (ticker == "NEO" && pubkey.size() == config.neo.pubkeysize) {
        
        neo_wallet.send(`getbalance ${pubkey}`);
        return (neo_wallet.recv())
        
    } else if (ticker == "NEURA" && pubkey.size() == config.neura.pubkeysize) {
        
        neura_wallet.send(`getbalance ${pubkey}`);
        return (neura_wallet.recv())
        
    } else if (ticker == "XEM" && pubkey.size() == config.xem.pubkeysize) {
        
        xem_wallet.send(`getbalance ${pubkey}`);
        return (xem_wallet.recv())
        
    } else if (ticker == "XMR" && pubkey.size() == config.xmr.pubkeysize) {
        
        xmr_wallet.send(`getbalance ${pubkey}`);
        return (xmr_wallet.recv())
        
    };
    
};
