import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv();
addFormats(ajv);

export function validateSchema(schema) {
  return (req, res, next) => {
    const validate = ajv.compile(schema);

    const data = req.body;

    const isValid = validate(data);

    if (!isValid) {
      res.status(400);
      res.json({message: "Invalid input"});
      return;
    } else {
      next();
    }
  };
}
