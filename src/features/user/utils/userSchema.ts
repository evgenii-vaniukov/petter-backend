export const userSchema = {
  type: "object",
  properties: {
    email: {type: "string", format: "email"},
    password: {type: "string"},
    passwordMatch: {type: "string"},
    firstName: {type: "string"},
    lastName: {type: "string"},
    phoneNumber: {type: "string"},
  },
  additionalProperties: false,
};
