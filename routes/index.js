module.exports = (app) => {
    app.use("/api/v1/users", require("./users"));
};
