export default function isCourier(req, res, next) {
  if (req.session?.user?.role === 'courier') return next();
  return res.redirect('/');
}