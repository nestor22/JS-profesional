// establece this con call
function saludar(){
    console.log(`Hola. Soy ${this.name} ${this.apellido}`)
}

const richard = {
    name: 'Richard',
    apellido:'kaufman lopez'
}

//con call establecemos el elemento this en el call es el primer argumento siempre
saludar.call(richard)

function caminar(metros, direccion){
    console.log(`${this.name} camina ${metros} hacia ${direccion}`)
}

caminar.call(richard, 14, 'norte')

//apply es muy parecido a call pero pasa los argumentos diferentes del

caminar.apply(richard, [800, 'sur'])
// los aply son arreglos en los paremetros no en coma 



// usando bind en el this es

const daniel = {name: 'daniel', apellido:'sanches'}
const danielSaluda = saludar.bind(daniel)
danielSaluda();
//en el caso de bind el se crea una funcion al bindiar por lo que no e ejecuta como las anterioers

const danieCamina = caminar.bind(daniel)

danielCamina(1000, 'este')