export const fetchGoogleBooks = async ({ query, startIndex, limit }) => {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      query
    )}&startIndex=${startIndex}&maxResults=${limit}`
  );

  const data = await res.json();
  const items = data.items ?? [];

  return items.map((item) => {
    const info = item.volumeInfo ?? {};

    return {
      id: item.id,
      title: info.title ?? 'Untitled',
      author: info.authors?.join(', ') ?? 'Unknown author',
      image:info.imageLinks?.thumbnail ?? 'emptyImage',
      description: info.description ?? '',
      category: info.categories?.[0] ?? 'General',
      price: +(Math.random() * (40 - 10) + 10).toFixed(2),
    };
  });
};
