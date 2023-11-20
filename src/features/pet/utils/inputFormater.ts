import {
  convertToBoolean,
  convertToDieataryRestrictions,
  convertToPetType,
} from "./typeConverters";
export function formatPetData(data) {
  for (let key in data) {
    if (key === "hypoallergenic") {
      data[key] = convertToBoolean(data[key]);
    } else if (key === "dietaryRestrictions") {
      data[key] = convertToDieataryRestrictions(data[key]);
    } else if (key === "type") {
      data[key] = convertToPetType(data[key]);
    } else if (key === "adoptionStatus") {
      data[key] = convertToBoolean(data[key]);
    } else if (key === "color") {
      data[key] = data[key].toLowerCase();
    } else if (key === "breed") {
      data[key] = data[key].toLowerCase();
    } else if (key === "height") {
      data[key] = +data[key];
    } else if (key === "weight") {
      data[key] = +data[key];
    }
  }
  return data;
}