const heroMethods = {
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
link.saludar()


