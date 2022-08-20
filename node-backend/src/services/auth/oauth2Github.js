const GitHubStrategy = require("passport-github").Strategy

const githubProvider = new GitHubStrategy({
    clientID: process.env.GITHUB_AUTH_CLIENT_ID,
    clientSecret: process.env.GITHUB_AUTH_CLIENT_SECRET,
    callbackURL: "/oauth/github/callback"
},
(accessToken, refreshToken, profile, done) => {
    return done(null, profile)
}
)


module.exports = githubProvider