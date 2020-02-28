export default (req, res) => {
  return res.status(200).json({
    quote: `Dades: ${process.env.customKey} -> ${req.cookies.name}`,
    author: 'Guillermo Rauch'
  })
}
