db.createUser(
    {
        user: "admin",
        pwd: "manager",
        roles: [
            {
                role: "readWrite",
                db: "test"
            }
        ]
    }
);