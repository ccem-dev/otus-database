db = db.getSiblingDB('db-distribution');

db.auth ("USER", "PASS")

db.createCollection("current_variables");
db.createCollection("old_variables");
db.createCollection("variableTypeCorrelation");