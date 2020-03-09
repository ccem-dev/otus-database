db = db.getSiblingDB('otus-domain');

db.auth ("USER", "PASS")

db.createCollection("Auditor");
db.createCollection("EmailSender");
db.createCollection("Project");
db.createCollection("Repository");
db.createCollection("SystemConfig");
db.createCollection("User");

