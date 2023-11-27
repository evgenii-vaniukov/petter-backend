import {DietaryRestrictions, PetType, Size} from "@prisma/client";

export function convertToPetType(type: string): PetType | null {
  if (Object.values(PetType).includes(type.toUpperCase() as PetType)) {
    return type.toUpperCase() as PetType;
  } else {
    return null;
  }
}

export function convertSizes(size: string): Size | null {
  if (Object.values(Size).includes(size.toUpperCase() as Size)) {
    return size.toUpperCase() as Size;
  } else {
    return null;
  }
}

export function convertToDieataryRestrictions(
  dietaryRestrictions: string
): DietaryRestrictions | null {
  if (
    Object.values(DietaryRestrictions).includes(
      dietaryRestrictions.toUpperCase() as DietaryRestrictions
    )
  ) {
    return dietaryRestrictions.toUpperCase() as DietaryRestrictions;
  } else {
    return null;
  }
}

export function convertToBoolean(str) {
  if (str.toLowerCase() === "true") return true;
  if (str.toLowerCase() === "false") return false;
  return Boolean(str);
}
