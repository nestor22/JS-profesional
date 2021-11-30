//this en scope global 
console.log(`this: ${this}`)
/**
 * es asignado a una variable automaticamente
 * la ventana windows es la que inicia y ese es el elemento
 * instanciado por lo que this en global es window
 */

//this en el scope de una funcion
function  whoIsThis(){
    return this;
}
console.log(`hoisThis is ${whoIsThis()}`);

/**
 * en esta caso es igual window porque la estamos llamando 
 * directamente y entonces hereda el this del global default 
 * esto no es asi si se usa java si se usa el stric mode
 * para eso se usa con
 * "use strict";
 */
 function  whoIsThis(){
    "use strict";// modo estricto dentro de la funcion
    return this;
}
console.log(`hoisThis is ${whoIsThis()}`);
/**
 * ahora da error porque no esta definido this en la funcion
 * 
 */

//ejecucion en el objeto persona de
const person = {
    name: 'Nestor',
    saludar: function(){
        console.log(`Hola soy ${this.name}`)
    }
}

person.saludar();

// this cuando sacamos la funcion del objeto persona de
const accion = person.saludar;
action();

/**
 * este nos da hola soy  y nada porque no logra llegar a this
 * y this en este caso es windows porque toma el global
 */

//this en contexto de una instancia para
function Person(name){
    this.name = name
}

Person.prototype.saludar = function(){
    console.log(`me llamo ${this.name}`)
}

const angela = new Person('Angela');
angela.saludar();