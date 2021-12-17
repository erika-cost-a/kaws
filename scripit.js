let btn = document.getElementById('btn')
let kaws = document.getElementById('kaws')
let section = document.getElementById('section')

document.addEventListener('mousemove', function (e){

    btn.style.left = e.pageX + 'px'
    btn.style.top = e.pageY + 'px'
 
  
})

section.addEventListener('click', function(){
    section.classList.toggle('black')
    kaws.classList.toggle('font')

})


