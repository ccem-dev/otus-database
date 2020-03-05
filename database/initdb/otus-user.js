db = db.getSiblingDB('otus');

db.createUser({
  user: USER,
  pwd: PASS,
  roles: [{
    role: "otus",
    db: "admin"
  }]
});
