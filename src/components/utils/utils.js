export const getPriceRange = (priceRanges) => {
    if (!priceRanges || priceRanges.length === 0) return { minPrice: null, maxPrice: null };

    const allMins = [];
    const allMaxs = [];

    priceRanges.forEach((range) => {
        const clean = range.replace("$", "");        // "0-20", "20-40", "70+"
        if (clean.includes("+")) {
            allMins.push(parseFloat(clean));         // "70+" → min 70, sin max
        } else {
            const [min, max] = clean.split("-").map(parseFloat);
            allMins.push(min);
            allMaxs.push(max);
        }
    });

    return {
        minPrice: Math.min(...allMins),              // el menor de todos
        maxPrice: allMaxs.length > 0 ? Math.max(...allMaxs) : null  // el mayor, o null si hay "70+"
    };
};