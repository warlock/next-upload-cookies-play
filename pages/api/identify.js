import { sign } from '../../lib/authorization'

export default (req, res) => {
  const token = sign({ name: req.query.name })
  return res.status(200).json({
    token
  })
}
