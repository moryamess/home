  // Require GithubDB

  var GithubDB = require('github-db').default;
var options = {
    host: 'api.github.com', // <-- Private github api url. If not passed, defaults to 'api.github.com'
    pathPrefix: '', // <-- Private github api url prefix. If not passed, defaults to null.
    protocol: 'https', // <-- http protocol 'https' or 'http'. If not passed, defaults to 'https'
    owner: 'rohitbels', // <-- Your Github username
    repo: 'hostingIO', // <-- Your repository to be used a db
    path:"testing2.json"// <- File with extension .json
  };
  
  // Initialize it with the options from above.
  var githubDB = new GithubDB(options);
  
  // Authenticate Github DB -> grab a token from here https://github.com/settings/tokens
  githubDB.auth("1beaf446265c81e4f2003ae4a0e13883a393768d");
  
  // Connect to repository
  githubDB.connectToRepo();

 module.export=githubDB;