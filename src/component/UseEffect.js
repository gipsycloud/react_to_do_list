// cleanup function
// conditional rendering

import { useEffect, useState } from 'react';
const url = "https://jsonplaceholder.typicode.com/users";
function UseEffect() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function getUsers() {
    const response = await fetch(url);
    const users = await response.json();
    if (response.status > 300) {
      setIsError(true);
      setIsLoading(false);
    }
    setUsers(users);
    setIsLoading(false);
    console.log(users);
  }

  useEffect(() => {
    console.log("useEffect called");
    getUsers();
  }, []);

  if (isLoading) {
    return <h1>Loading ..... </h1>;
  }
  if (isError) {
    return <h2>Opps Error ... .. </h2>
  }
  return (
    <div>
      <ul>
        {users.map((user) => {
          return (<li key={user.id}>
            <div style={{ textAlign: 'center', margin: '2rem', padding: '2rem', border: '1px solid black', borderRadius: '5px' }}>
              <h4>{user.name}</h4>
              <a href={user.html_url}>{user.email}</a>
            </div>
          </li>);
        })}
      </ul>
    </div>
  );
}
export default UseEffect;