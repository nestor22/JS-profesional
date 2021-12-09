/* const heroMethods = {
    saludar: function(){
        console.log(`hola soy ${this.name}`)
    }
}

function Hero(name){
    const hero = {
        name: name
    }

    hero.saludar = heroMethods.saludar

    return hero
}

const zelda = Hero ('Zelda')
zelda.saludar()

const link = Hero('Link')
link.saludar() */

//const nuevoObjeto = Object.create(objeto)

const heroMethods = {
    saludar: function(){
        console.log(`hola soy ${this.name}`)
    }
}

function Hero(name){
const hero = Object.create(heroMethods)
hero.name=name
return hero
}

const zelda = Hero ('Zelda')
zelda.saludar()

const link = Hero('Link')
link.saludar() 

// con herencia prototipal quedaria asi this
function Herro (name){
    this.name =  name
}
Herro.prototype.saludar = function(){
    console.log(`New Hero ${this.name}`)
}


const zenda = new Herro('zelda')

/**
 * lo que hace esto es que el new crear un nuevo objeto basandose en el prototype 
 * por lo que todo el objeto esta instanciado y no es necesario tercerizar 
 * ya que el this se crea automaticamente
 */

//herencia prototipal 

cosole.log(zenda.name);

// has hown properti  nos indica si elobjeto tiene alguna propiedas
console.log(zenda.hasOwnProperty('name'))// retorna true


