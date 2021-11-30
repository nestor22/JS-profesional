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