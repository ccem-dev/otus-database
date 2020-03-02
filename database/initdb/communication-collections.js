db = db.getSiblingDB('otus-communication.js');

db.auth ("USER", "PASS")

db.createCollection("communication");
