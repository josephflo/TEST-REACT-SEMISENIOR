import { useState } from "react";

type User = { id: number; name: string; age: number };

type UserListProps = {
  users: User[];
};

const UserList = ({ users }: UserListProps) => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

  //   HANDLERS

  const showAdults = (users: User[]) => {
    const adults = users.filter((user) => user.age > 18);
    setFilteredUsers(adults);
  };

  const showAll = (users: User[]) => {
    setFilteredUsers(users);
  };

  const sortByName = () => {
    const sorted = [...filteredUsers].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredUsers(sorted);
  };

  return (
    <div>
      <h2>User List</h2>

      <div className="flex gap-8">
        <button onClick={() => showAdults(users)}>Solo mayores de 18</button>
        <button onClick={() => showAll(users)}>Mostrar todos</button>
        <button onClick={() => sortByName()}>Ordenar A-Z</button>
      </div>

      <div className="user-grid">
        {filteredUsers.map((user) => (
            <div key={user.id} className="user-card">
                <h3>{user.name}</h3>
                <p>Edad: {user.age}</p>
                <p>ID: {user.id}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
