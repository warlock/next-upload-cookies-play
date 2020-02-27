export default (req, res) => {
  res.status(200).json({
    quote: `Dades: ${process.env.customKey} -> ${req.cookies.name}`,
    author: 'Guillermo Rauch'
  })
}
