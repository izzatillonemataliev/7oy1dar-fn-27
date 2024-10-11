export const fetchPhotos = async (page) => {
  const limit = 10; // Har bir sahifa uchun ko'rsatiladigan elementlar soni
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
  const data = await response.json();
  return data;
};
