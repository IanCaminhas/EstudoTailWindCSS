/** @type {import('tailwindcss').Config} */

/* 
Criei a minha animação denominada keyframes. Eu ativo a animação 
a partir da propriedade animation.
floatUp: "floatUp 2s infinite" espero 2 segundos para a animação ocorrer. 
Para fazer floatUp, foi utilizado CSS puro.
Em qualquer local da aplicação, posso utilizar o floatUp.
O exemplo foi usado sem o infinite. 
Se eu colocar floatUp: "floatUp 2s infinite", o efeito ocorre de forma infinita.
*/

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        floatUp: {
          "0%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-8px)" },
          "100%": { transform: "translatey(0px)" },
        }
      },
      animation:{
        floatUp: "floatUp 2s",
      },
      colors:{
        primary: "#FF00FF"
      }
    },
  },
  plugins: [],
}

