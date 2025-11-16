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

✅Tenga 3 campos controlados:

✅name (string)

✅email (string)

✅age (number)

Valide:

✅Que el nombre tenga al menos 3 caracteres.

✅Que el email contenga "@".

✅Que la edad sea mayor o igual a 18.

✅Si todo es válido, mostrar un mensaje debajo del formulario:
✅"Registro exitoso"

Caso contrario, mostrar los errores debajo del input correspondiente.

No usar librerías externas.


🧩 Ejercicio 3 – Custom Hook + Fetch simulado
Requerimiento

✅Crear un hook useFetchUsers() que:

✅Simule un fetch usando setTimeout (1 segundo).

Devuelva:

✅data (array de usuarios)

✅loading (boolean)

✅error (string o null)

Se use dentro de un componente UsersPage.

✅Mientras loading === true, mostrar "Cargando...".

✅Cuando hay data, renderizar la lista.

✅Manejar errores (simular un 30% de probabilidad de error).


🧩 Ejercicio 4 – Global State con Context + useReducer
📌 Requerimiento

Crear un sistema simple de manejo global de temas (“light / dark”) usando:

React Context

useReducer

TypeScript

Sin librerías externas

✔️ Debe incluir:

Un ThemeContext con dos valores posibles:

type Theme = "light" | "dark";


Un reducer:

{ type: "TOGGLE_THEME" }


Un provider ThemeProvider que envuelva a la app.

Un componente ThemeSwitcher con un botón:

"Cambiar a Dark"

"Cambiar a Light"

Un componente ThemedBox que cambie el color de fondo según el theme global.

🎯 Resultado esperado:

Al hacer click en el botón, cambia el theme global.

Todo componente dentro del provider debe reaccionar al cambio.

🧩 Ejercicio 5 – Lista grande + Performance (useMemo + useCallback)
📌 Requerimiento

Crear un componente ProductFilter que maneje una lista grande de productos (1000 items simulados).

Cada producto:

type Product = {
  id: number;
  name: string;
  price: number;
};

El componente debe:

Generar 1000 productos con un useMemo (para no regenerarlos en cada render).

Tener un input para filtrar por nombre.

Filtrar productos con eficiencia usando useMemo para evitar recalcular filtros innecesariamente.

Tener un botón “Ordenar por precio” usando useCallback.

Mostrar solo los primeros 20 productos para no romper el render.

🎯 Conceptos evaluados:

¿Sabés evitar renders innecesarios?

¿Sabés cuándo usar useMemo?

¿Sabés cómo memoizar callbacks?

🧩 Ejercicio 6 – Componente reutilizable (Render Props / Children as Function)
📌 Requerimiento

Crear un componente reutilizable DataFetcher que haga fetch a cualquier endpoint (simulado con setTimeout).

El componente debe recibir:
<DataFetcher url="/api/users">
  {(data, loading, error) => (
    <div> // tu render acá </div>
  )}
</DataFetcher>

✔️ Debe:

Tener estados internos: data, loading, error.

Simular un fetch con setTimeout (1s).

Pasar estos valores al child:

children(data, loading, error)


No renderizar nada más que el child function.

Permitir reusar el componente para:

usuarios

productos

mensajes

cualquier endpoint simulado

🎯 Ejemplo de uso:
<DataFetcher url="/users">
  {(data, loading, error) => {
    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
      <ul>
        {data.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    );
  }}
</DataFetcher>