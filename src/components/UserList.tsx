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
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Lista de Usuarios</h2>

      <div className="flex gap-4 mb-8">
        <button onClick={() => showAdults(users)} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition font-medium">Solo mayores de 18</button>
        <button onClick={() => showAll(users)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium">Mostrar todos</button>
        <button onClick={() => sortByName()} className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition font-medium">Ordenar A-Z</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
            <div key={user.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{user.name}</h3>
                <p className="text-gray-600 mb-1">Edad: <span className="font-semibold">{user.age}</span></p>
                <p className="text-gray-600">ID: <span className="font-semibold">{user.id}</span></p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
