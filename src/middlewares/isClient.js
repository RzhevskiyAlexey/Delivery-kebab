export default function isClient(req, res, next) {
    if (req.session?.user.role === 'customer') return next();
    return res.sendStatus(403);
  }