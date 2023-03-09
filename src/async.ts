export const fetchData = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await resp.json();
};
