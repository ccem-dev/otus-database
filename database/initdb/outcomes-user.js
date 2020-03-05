db = db.getSiblingDB('outcomes-database');

db.createUser({
  user: USER,
  pwd: PASS,
  roles: [{
    role: "outcomes-database",
    db: "admin"
  }]
});
