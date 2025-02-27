// Helper function to process array fields
export const toStringArray = (input: any): string[] => {
  if (!input) return []; //handle empty fields

  // Handle array input
  if (Array.isArray(input)) {
    return input
      .map((item) => String(item).trim())
      .filter((item) => item !== ""); //filter empty strings on array
  }

  // Handle single value
  const str = String(input).trim();
  return str ? [str] : [];
};
