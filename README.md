## MÓDULO SOBRE REACT JS

1. React js es una librería de Javascript pensada para desarrollar interfaces gráficas, es decir, para el desarrollo frontend. Como principales características se tienen el uso de componentes reutilizables, el desarrollo aplicaciones de una sola página y la posibilidad de crear código HTML desde javascript.

2. Un componente es un bloque de código reutilizable que representa una funcionalidad o un componente grafico de una página web, los componentes pueden ser de clase o de función.

3. El virtual DOM se puede ver como una capa intermedia entre la aplicación y el DOM real, este permite mejorar el rendimiento de la aplicación ya que no se está modificando el DOM de manera directa.

4. JSX o Javascript XML es una sintaxis de React JS que permite por decirlo así, escribir código HTML desde Javascript, es importante ya que permite que no se tengan que crear varios documentos HTML en una aplicación, si no que cada componente agrega su propio HTML o sus propias páginas a la aplicación.

5. Un Hook en React JS es una función especial que permite a los componentes de función manejar estados y efectos secundarios

6. Algunos hooks de Reacj JS son:

   useState: permite manipular un estado local (variable), este provee un estado y una función para actualizar ese estado.

   useEffect: permite ejecutar acciones inmediatamente se renderiza un componente o cuando una dependencia se actualiza, en otras palabras, permite realizar efectos secundarios.

   useContext: permite acceder al contexto dentro de un componente.

7. Algunas reglas de los hooks en React son: llamar a los hooks en la parte superior del componente y solo en componentes funcionales

8. React Router DOM es una biblioteca de React usada para el enrutamiento en una aplicación, sus principales componentes son browserRouter, Routes, Route, useNavigate, Link y useParams.

9. Esta navegación se realiza configurando el enrutador, definiendo las rutas y estableciendo los paths de navegación en cada componente.

10. Estas se definen usando el componente Route y configurando los path de cada ruta

11. Para esto se debe escribir en consola el comando npm create vite@latest my-react-app -- --template react

12. Primero se debe crear el json server de manera local, luego este se debe subir a un repositorio en la nube, y en el hosting se desplegará a partir del repositorio.

13. Similarmente al punto anterior se debe seleccionar la rama main del repositorio que se quiera desplegar, el hosting se encargara de realizar todo el proceso.

## MÓDULO SOBRE GESTION DE ESTADOS Y DATOS CON REACT CONTEXT Y USEREDUCER

1. React  context es una característica que permite compartir información entre componentes sin necesidad de utilizar props

2. Para crear un contexto en React se debe utilizar el hook  createContext, este contexto se provee a todos los componentes de la aplicación mediante la propiedad Provider del contexto creado y este contexto se consume usando el hook  useContext.

3. La ventaja es que simplifica el código, la legibilidad del mismo y se evita el props  drilling que se genera al pasar props entre múltiples componentes.

4. useReducer es un hook de React que permite gestionar estados de una manera más organizada, centralizada y escalable, precisamente la diferencia con useState radica en la centralización y escalabilidad en el manejo de los estados.

5. useReducer toma dos argumentos de entrada, el state y el action, el argumento state se refiere al estado anterior y el argumento action contiene el tipo de acción que será ejecutada

6. Por el tema de la escalabilidad ya que las aplicaciones más complejas requieren que se añadan más estados, entonces al tener este manejo de estados centralizado se hace más fácil de escalar y mejorar

7. En este caso se podría utilizar en la autenticación de un usuario en una aplicación, ya que con el contexto podremos saber si el usuario está  logueado o no y con el reducer podemos disparar los estados para que el usuario quede efectivamente logueado o deslogueado

8. Por el tema de la escalabilidad, la corrección de errores y la facilidad que conlleva que los estados esteen centralizados.

9. facil escalabilidad, facil mantenimiento, centralización del manejo de estados,se evita el prop  drilling

10. Esto es de gran beneficio cuando las aplicaciones crecen ya que a pesar de que el código se vuelve un poco complejo el concepto se hace más sencillo y manejable
