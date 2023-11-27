import {
  convertSizes,
  convertToBoolean,
  convertToDieataryRestrictions,
  convertToPetType,
} from "./typeConverters";

export function formatPetData(data) {
  for (let key in data) {
    if (key === "hypoallergenic") {
      if (Array.isArray(data[key])) {
        delete data[key];
      } else {
        data[key] = convertToBoolean(data[key]);
      }
    } else if (key === "dietaryRestrictions") {
      data[key] = convertToDieataryRestrictions(data[key]);
    } else if (key === "type") {
      data[key] = Array.isArray(data[key])
        ? data[key].map((type) => convertToPetType(type))
        : convertToPetType(data[key]);
    } else if (key === "adoptionStatus") {
      if (Array.isArray(data[key])) {
        delete data[key];
      } else {
        data[key] = convertToBoolean(data[key]);
      }
    } else if (key === "color") {
      data[key] = data[key].toLowerCase();
    } else if (key === "breed") {
      data[key] = data[key].toLowerCase();
    } else if (key === "size") {
      data[key] = convertSizes(data[key]);
    }
  }
  return data;
}
