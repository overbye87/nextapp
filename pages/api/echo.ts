export default function echo(req, res) {
  res.json({ message: req.query.message ?? 'No message' });
}
