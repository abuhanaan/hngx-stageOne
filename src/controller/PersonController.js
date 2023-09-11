const {
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
} = require("../service/PersonService");

const createPersonController = async (req, res) => {
  const response = await createPerson(req, res);

  return response;
};

const getPersonController = async (req, res) => {
  const response = await getPerson(req, res);

  return response;
};

const updatePersonController = async (req, res) => {
  const response = await updatePerson(req, res);

  return response;
};

const deletePersonController = async (req, res) => {
  const response = await deletePerson(req, res);

  return response;
};

const personControllers = {
  createPersonController: createPersonController,
  getPersonController: getPersonController,
  updatePersonController: updatePersonController,
  deletePersonController: deletePersonController,
};

module.exports = personControllers;
