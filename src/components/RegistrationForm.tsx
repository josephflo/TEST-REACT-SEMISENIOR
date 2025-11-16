import { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    age?: string;
    email?: string;
    isValid?: string;
  }>({});

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (name.trim().length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres.";
    }

    if (typeof age === "number" && age < 18) {
      newErrors.age = "Debes ser mayor de 18 años.";
    }

    if (!email.includes("@")) {
      newErrors.email = "El email debe ser válido.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      newErrors.isValid = "Registro exitoso";
    }
  };

  return (
    <form onSubmit={handleSumbit} className="max-w-md mx-auto p-6 space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.name ? "border-red-500 bg-red-50" : "border-gray-300"
          }`}
        />
        {errors.name && (
          <p className="text-red-600 text-sm mt-1 font-medium">{errors.name}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="age"
          className="block text-sm font-medium text-gray-700"
        >
          Edad
        </label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) =>
            setAge(e.target.value === "" ? "" : Number(e.target.value))
          }
          className={`w-full px-3 py-2 border rounded-md ${
            errors.age ? "border-red-500 bg-red-50" : "border-gray-300"
          }`}
        />
        {errors.age && (
          <p className="text-red-600 text-sm mt-1 font-medium">{errors.age}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1 font-medium">
            {errors.email}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
      >
        Enviar
      </button>
      {errors.isValid && (
        <p className="text-center text-green-600 text-sm mt-1 font-medium">{errors.isValid}</p>
      )}
    </form>
  );
};

export default RegistrationForm;
