import { validate } from '../../lib/authorization'

export default (req, res) => {
  const user = validate(req.cookies.token)
  if (!user) return res.status(404).json({ error: 'Unauthorized' })
  return res.status(200).json({
    quote: `Dades: ${process.env.customKey} -> ${req.cookies.name}`,
    author: user.name
  })
}
