import UserFetchUsers from "../hooks/UserFetchUsers";

const UsersPage = () => {
  const { data, loading, error } = UserFetchUsers();

  if (loading) return <p>Cargando...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((user) => (
        <div
          key={user.id}
          className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-2">{user.name}</h3>
          <p className="text-gray-600 mb-1">
            Edad: <span className="font-semibold">{user.age}</span>
          </p>
          <p className="text-gray-600">
            ID: <span className="font-semibold">{user.id}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
