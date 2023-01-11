import axios from 'axios';

const searchParams = new URLSearchParams({
  key: '31495674-5fe6955c4b0e39f29b69e3e0c',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const response = await axios.get(`?q=${query}&page=${page}&${searchParams}`);
  const data = response.data;

  return data;
};

export default fetchImages;
