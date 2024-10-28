export const fixOptional = (value: unknown) => {
  if (value === "") return undefined;
  if (typeof value === "object" && value !== null) {
    // Check if every child value (even nested) is empty
    const isEmpty = Object.values(value).every(
      (v) => fixOptional(v) === undefined,
    );
    if (isEmpty) return undefined;
  }
  return value;
};
