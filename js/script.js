const foot = document.getElementById('year')
const year = new Date().getFullYear()
foot.innerHTML = year

const btnMenu = document.getElementById('btnmenu')

const list = document.getElementById('nav-items')
let show=true;

btnMenu.addEventListener('click', () =>{
    show = !show
    if(show){
        list.style.display = 'block'
    }else{
        list.style.display = 'none'
        }
})

(function(){

})