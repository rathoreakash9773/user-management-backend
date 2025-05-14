const responseHandler = (_req, res, next) => {

    res.invalid = (payload) =>
      res.status(400).json({
        ok: false,
        err: payload.msg || 'Invalid Parameters',
        code: payload.code,
        data: null,
      });

    res.unauthorized = (payload) =>
      res.status(404).json({
        ok: false,
        err: payload.msg || 'Authentication Failed',
        data: null,
      });

    res.success = ({ data = {} }) =>
      res.status(200).json({
        ok: true,
        err: null,
        data,
      });
  
    res.failure = (payload) =>
      res.status(200).json({
        ok: false,
        err: payload.msg || "Something is wrong! We're looking into it.",
        code: payload.code,
        data: null,
      });

    res.created = ({ data = {} }) =>
      res.status(201).json({
        ok: true,
        err: null,
        data,
    });

    res.serverError = (payload) =>
      res.status(500).json({
        ok: false,
        err: payload.msg || 'Internal Server Error',
        code: payload.code,
        data: null,
    });
  
    next();
  };
  
  module.exports = responseHandler;