db = db.getSiblingDB('otus-communication');

db.createUser({
  user: USER,
  pwd: PASS,
  roles: [{
    role: "dbOwner",
    db: "otus-communication"
  }]
});

db.grantRolesToUser(USER, [ { role: "executeFunctions", db: "admin" } ]);