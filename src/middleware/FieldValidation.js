const validateFields = (schema) => async (req, res, next) => {
  const body = req.body;

  try {
    await schema.validate(body);
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = validateFields;
