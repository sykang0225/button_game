
window.addEventListener('keydown', (e)=>{
    //console.log('keydown event', e.key)
    
    if(e.key == '1' || e.key == '2' || e.key == '3'){
    const div = document.getElementById(e.key)
    div.classList.add('pressed')
    }
})
window.addEventListener('keyup', (e)=>{
    //console.log('leyup event', e.key)
    if(e.key == '1' || e.key == '2' || e.key == '3'){
    const div = document.getElementById(e.key)
    div.classList.remove('pressed')
    }
})