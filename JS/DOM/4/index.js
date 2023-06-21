
const btn = document.getElementById('btn')
btn.addEventListener('click', register(this.parentNode))



function register(element){
const name = element.children.name.value
const password = element.children.password.value


console.log({name, password})

}