🧩 Ejercicio 1 – Lógica + React básico

✅ Crea un componente en React llamado UserList que:

✅ Reciba por props un array de usuarios con esta forma:

type User = {
  id: number;
  name: string;
  age: number;
};


✅Muestre la lista de usuarios en pantalla.

✅Permita filtrar los usuarios mayores de 18 años con un botón “Mostrar solo mayores”.

✅Permita volver a mostrar todos.

Extra (para puntos): Ordenar alfabéticamente por nombre con un botón adicional.

👉 Requisitos técnicos

Usar React + TypeScript.

No usar librerías externas.

Manejar estado con useState.

Código limpio y legible.


🧩 Ejercicio 2 – Manejo de formularios + validación básica
Requerimiento

✅Crear un componente RegistrationForm que:

Tenga 3 campos controlados:

name (string)

email (string)

age (number)

Valide:

Que el nombre tenga al menos 3 caracteres.

Que el email contenga "@".

Que la edad sea mayor o igual a 18.

Si todo es válido, mostrar un mensaje debajo del formulario:
"Registro exitoso"

Caso contrario, mostrar los errores debajo del input correspondiente.

No usar librerías externas.


🧩 Ejercicio 3 – Custom Hook + Fetch simulado
Requerimiento

Crear un hook useFetchUsers() que:

Simule un fetch usando setTimeout (1 segundo).

Devuelva:

data (array de usuarios)

loading (boolean)

error (string o null)

Se use dentro de un componente UsersPage.

Mientras loading === true, mostrar "Cargando...".

Cuando hay data, renderizar la lista.

Manejar errores (simular un 30% de probabilidad de error).