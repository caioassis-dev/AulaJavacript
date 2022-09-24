/*
        ----------
        | PESSOA | 
        ----------
       /         \
   PROPS         MÉTODOS
   nome          dormir()
   peso          comer()
   altura        beber()
   sexo          falar()
                 andar()
*/

const pessoa = {
    nome: "Maria", 
    peso: 75, 
    altura: 1.65, 
    sexo: "F", 
    dormir: function() {
        return "dormindo"
    }, 
    comer: function() {
        return "comendo"
    },
    beber: function() {
        return "bebendo"
    },
    falar: function() {
        return "falando"
    },
    andar: function() {
        return "andando"
    },
};