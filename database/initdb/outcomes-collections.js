db = db.getSiblingDB('outcomes-database');

db.auth ("USER", "PASS")

db.createCollection("follow-up");
db.createCollection("follow-up-event");
db.createCollection("participant-event");
