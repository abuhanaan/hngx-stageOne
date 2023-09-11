const yup = require("yup");

const personCreationSchema = yup.object({
  name: yup.string().required(),
  state: yup.string().required(),
  gender: yup.string().required(),
  age: yup.number().required().positive().integer(),
});

module.exports = personCreationSchema;
