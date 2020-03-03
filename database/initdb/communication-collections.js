db = db.getSiblingDB('otus-communication');

db.auth ("USER", "PASS")

db.createCollection("communication");
