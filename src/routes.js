function routes (app) {
    app.use('/', require('./route/user'));
    return;
}
module.exports = routes;