import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv();
addFormats(ajv, ["email"]);

const schema = {
  type: "object",
  properties: {
    email: {type: "string", format: "email"},
    password: {type: "string"},
    passwordMatch: {type: "string"},
    firstName: {type: "string"},
    lastName: {type: "string"},
    phoneNumber: {type: "string"},
  },
  required: [
    "email",
    "password",
    "passwordMatch",
    "firstName",
    "lastName",
    "phoneNumber",
  ],
  additionalProperties: false,
};

export function validateUserData(req, res, next) {
  const validate = ajv.compile(schema);

  const data = req.body;

  const isValid = validate(data);

  if (!isValid) {
    res.status(400);
    res.json({message: "Invalid data entered by user"});
    return;
  } else {
    next();
  }
}
