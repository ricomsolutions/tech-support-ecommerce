// api.js (in tech-support-ecommerce repository)
const fetchUsers = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`);
  const data = await response.json();
  return data;
};
