export const postPetSchema = {
  type: "object",
  properties: {
    type: {type: "string"},
    name: {type: "string"},
    adoptionStatus: {type: "string"},
    picturePath: {type: "string"},
    height: {type: "string"},
    weight: {type: "string"},
    color: {type: "string"},
    bio: {type: "string"},
    hypoallergenic: {type: "string"},
    dietaryRestrictions: {type: "string"},
    breed: {type: "string"},
  },
  required: [
    "type",
    "name",
    "adoptionStatus",
    "picturePath",
    "height",
    "weight",
    "color",
    "bio",
    "hypoallergenic",
    "dietaryRestrictions",
    "breed",
  ],
  additionalProperties: false,
};

export const patchPetSchema = {
  type: "object",
  properties: {
    type: {type: "string"},
    name: {type: "string"},
    adoptionStatus: {type: "string"},
    picturePath: {type: "string"},
    height: {type: "string"},
    weight: {type: "string"},
    color: {type: "string"},
    bio: {type: "string"},
    hypoallergenic: {type: "string"},
    dietaryRestrictions: {type: "string"},
    breed: {type: "string"},
  },
  additionalProperties: false,
};

export const searchPetSchema = {
  type: "object",
  properties: {
    type: {type: "string"},
    name: {type: "string"},
    adoptionStatus: {type: "string"},
    height: {type: "string"},
    weight: {type: "string"},
    color: {type: "string"},
    hypoallergenic: {type: "string"},
    dietaryRestrictions: {type: "string"},
    breed: {type: "string"},
  },
  additionalProperties: false,
};
