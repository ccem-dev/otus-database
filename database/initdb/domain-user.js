db = db.getSiblingDB('otus-domain');

db.createUser({
  user: USER,
  pwd: PASS,
  roles: [{
    role: "otus-domain",
    db: "admin"
  }]
});
