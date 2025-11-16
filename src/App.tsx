import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import UserList from "./components/UserList";
import UsersPage from "./components/UsersPage";
import { users } from "./constants/index";

function App() {
  

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-8">
      <UsersPage />

      </div>
      <div className="max-w-2xl mx-auto px-4">
        <RegistrationForm />
        <UserList users={users} />
      </div>
    </div>
  );
}

export default App;
