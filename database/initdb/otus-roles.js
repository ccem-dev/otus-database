db = db.getSiblingDB('admin');
db.auth (USER, PASS)

db.createRole( { role: "executeFunctions", privileges: [ { resource: { anyResource: true }, actions: [ "anyAction" ] } ], roles: [] } );

db.createRole( { role: "otus", privileges: [ { resource: { db: "otus" , collection: "" }, actions: [ "anyAction" ] } ], roles: [] } );

db.createRole( { role: "db-distribution", privileges: [ { resource: { db: "db-distribution" , collection: "" }, actions: [ "anyAction" ] } ], roles: [] } );

db.createRole( { role: "otus-communication", privileges: [ { resource: { db: "otus-communication" , collection: "" }, actions: [ "anyAction" ] } ], roles: [] } );

db.createRole( { role: "otus-domain", privileges: [ { resource: { db: "otus-domain" , collection: "" }, actions: [ "anyAction" ] } ], roles: [] } );

db.createRole( { role: "outcomes-database", privileges: [ { resource: { db: "outcomes-database" , collection: "" }, actions: [ "anyAction" ] } ], roles: [] } );


