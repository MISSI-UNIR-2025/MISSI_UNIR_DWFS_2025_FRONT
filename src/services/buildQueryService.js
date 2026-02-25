export const buildQuery = (filters) => {
  const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      // Solo agrega el parámetro si tiene valor (no vacío, no undefined, no null)
      if (value !== "" && value !== null && value !== undefined) {
        params.append(key, value);
      }
    });

    return params.toString();
};