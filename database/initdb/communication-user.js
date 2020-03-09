db = db.getSiblingDB('otus-communication');

db.createUser({
  user: USER,
  pwd: PASS,
  roles: [{
    role: "otus-communication",
    db: "admin"
  }]
});
