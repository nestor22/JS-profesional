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