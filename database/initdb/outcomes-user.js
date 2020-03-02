db = db.getSiblingDB('outcomes-database');

db.createUser({
  user: USER,
  pwd: PASS,
  roles: [{
    role: "dbOwner",
    db: "outcomes-database"
  }]
});

db.grantRolesToUser(USER, [ { role: "executeFunctions", db: "admin" } ]);