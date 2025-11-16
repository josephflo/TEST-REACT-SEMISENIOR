import { useEffect, useState } from "react";
import { users } from "../constants";

const UserFetchUsers = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      setLoading(true);
      setError(null);

      const shouldFailFetch = Math.random() < 0.3;

      if (shouldFailFetch) {
        setLoading(false);
        setError("Error fetching users");
        return;
      }
      setData(users);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { data, loading, error };
};

export default UserFetchUsers;
