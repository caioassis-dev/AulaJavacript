console.log("=== ESCOPO ===");

/*

        ----------
        | WINDOW | => GLOBAL
        ----------
        /         \ 
    PROPS        MÉTODOS        
    curso        meuCurso()
    console      alert()
                 print()


        -----------
        | CONSOLE |
        -----------
        /          \ 
    PROPS         MÉTODOS
    memory        log()
                  error()
                  info()
                  clear()

        -----------
        | MEMORY |
        -----------
        /          \ 
    PROPS         MÉTODOS
    jsHeapSizeLimit
    totalJSHeadpSize
    usedJSHeapSize
*/

var curso = "JS"; // add prop no objeto global
console.log(curso);

// add método no objeto global
function meuCurso() {
  interna = "ES6"; // var global implicita
  curso = "CSS"; // var global implicita
  return "Estou estudando..." + interna + " e " + curso;
}

console.log(meuCurso());
console.log(curso);

// const meuCurso = function () {
//   return "Estou estudando...";
// };
