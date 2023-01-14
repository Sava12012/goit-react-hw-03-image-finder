const API_KEY = '31495674-5fe6955c4b0e39f29b69e3e0c';

export const fetchImages = async (searchQuery, page) => {
  const searchParams = new URLSearchParams({
    q: searchQuery,
    image_type: 'photo',
    page: page,
    per_page: 12,
  });

  const url = `https://pixabay.com/api/?key=${API_KEY}&${searchParams}`;
  const response = await fetch(url);
  return await response.json();
};

export default fetchImages;
