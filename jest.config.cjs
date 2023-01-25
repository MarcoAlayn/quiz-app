module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};

/* 
Estamos utilizando el preset "ts-jest" para configurar 
Jest para trabajar con TypeScript. También estamos especificando que el 
entorno de prueba es node.js y que solo se deben ejecutar los archivos 
con nombres que terminan en ".test.ts". Finalmente, estamos utilizando 
el transformador "ts-jest" para convertir nuestro código TypeScript en
JavaScript antes de ejecutar las pruebas.

En cuanto al transformador "babel-jest" es utilizado para convertir 
el codigo JSX y JS moderno a JS compatible con versiones antiguas, 
en este caso no es necesario ya que TypeScript se encarga de 
esa compatibilidad
*/
