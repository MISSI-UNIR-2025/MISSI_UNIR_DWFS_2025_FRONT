export const buildQuery = (filters) => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
        if (value === "" || value === null || value === undefined) return;

        if (Array.isArray(value)) {
            value.forEach((item) => {
                if (item !== "" && item !== null && item !== undefined) {
                    params.append(key, item);
                }
            });
            return;
        }

        if (typeof value === "object") return;

        params.append(key, value);
    });

    return params.toString();
};