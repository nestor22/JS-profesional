function Hero(name){
    const hero = {
        name: name
    }

    hero.saludar = function (){
        console.log(`Hola soy ${this.name}`)
    }

    return hero
}
const zelda = {
    name:"Zelda"
}

zelda.saludar = function(){
    console.log(`hola soy ${this.name}`)
}

zelda.saludar();

const link = {
    name:"Link"
}

link.saludar = function(){
    console.log(`hola soy ${this.name}`)
}

zelda.saludar();