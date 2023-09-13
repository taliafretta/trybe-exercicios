module.exports = (req, res, next) => {
  const { price } = req.body;

  if (price === undefined) {
    return res.status(400).json(
      { message: 'Este campo é obrigatório'}
    );
  }

  if (price < 0 || typeof price !== 'number') {
    return res.status(400).json({
      message: 'O campo price deve ser um número maior ou igual a zero'
    })
  }
}