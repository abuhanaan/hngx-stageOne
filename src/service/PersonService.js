const Person = require("../model/person");
const genUniqueId = require("../utils/generateUniqueId");

const createPerson = async (req, res) => {
  try {
    const { name, gender, state, age } = req.body;
    const re = new RegExp("[a-zA-Z][a-zA-Z ]+[a-zA-Z]$");
    const validateName = re.test(name);
    if (!validateName) {
      return res.status(400).send({
        status: false,
        message: "Name field is not valid",
      });
    }
    const salt = name + gender;
    const uniqueId = genUniqueId(salt);
    const existingPerson = await Person.findOne({ where: { name: name } });
    if (existingPerson) {
      const response = {
        status: false,
        message: `User with name ${name} alredy exist, please choose a different name`,
      };
      return res.status(409).send(response);
    } else {
      const newPerson = await Person.create({
        name: name,
        gender: gender,
        state: state,
        age: parseInt(age),
        uniqueId: uniqueId,
      });
      const response = {
        status: true,
        data: {
          id: newPerson.uniqueId,
          name: newPerson.name,
          gender: newPerson.gender,
          state: newPerson.state,
          age: newPerson.age,
        },
      };

      return res.status(201).send(response);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const getPerson = async (req, res) => {
  try {
    const { name } = req.body;
    const person = await Person.findOne({ where: { name: name } });

    if (person === null) {
      const response = {
        status: false,
        message: `User with name ${name} does not exist`,
      };
      return res.status(404).send(response);
    } else {
      const response = {
        status: true,
        message: "Record Fetched Successfully",
        data: {
          id: person.uniqueId,
          name: person.name,
          gender: person.gender,
          state: person.state,
          age: person.age,
        },
      };
      return res.status(200).send(response);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const updatePerson = async (req, res) => {
  try {
    const { name } = req.body;
    const person = await Person.findOne({ where: { name: name } });

    if (person === null) {
      const response = {
        status: false,
        message: `User with name ${name} does not exist`,
      };
      return res.status(404).send(response);
    } else {
      await person.update(req.body);
      const response = {
        status: true,
        message: "Record updated successfully",
        data: {
          id: person.uniqueId,
          name: person.name,
          gender: person.gender,
          state: person.state,
          age: person.age,
        },
      };
      return res.status(201).send(response);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const deletePerson = async (req, res) => {
  try {
    const { name } = req.body;
    const person = await Person.findOne({ where: { name: name } });

    if (person === null) {
      const response = {
        status: false,
        message: `User with name ${name} does not exist`,
      };
      return res.status(404).send(response);
    } else {
      await person.destroy();
      const response = {
        status: true,
        message: "Record deleted successfully!",
      };

      return res.status(200).send(response);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const personServices = {
  createPerson: createPerson,
  getPerson: getPerson,
  updatePerson: updatePerson,
  deletePerson: deletePerson,
};

module.exports = personServices;
