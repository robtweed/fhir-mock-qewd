module.exports = function(args, finished) {

  finished({
    access_token: "test-token",
    token_type: "bearer",
    expires_in: 3600
  });

};