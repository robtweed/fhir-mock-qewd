module.exports = function(req, finished) {

  if (req.path === '/AuthService/oauth/token') {
    return;
  }

  if (req.path === '/api/test') {
    return;
  }

  if (!req.headers || !req.headers.authorization) {
    finished({error: 'Authorization Header missing'});
    return false;
  }
  if (req.headers.authorization !== 'Bearer test-token') {
    finished({
      error: 'Invalid Authorization Header',
      status: {
        code: 403
      }
    });
    return false;
  }

};
