db = db.getSiblingDB('db-distribution');

db.createUser({
  user: USER,
  pwd: PASS,
  roles: [{
    role: "db-distribution",
    db: "admin"
  }]
});

