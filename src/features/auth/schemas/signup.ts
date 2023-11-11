export const schema = {
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
