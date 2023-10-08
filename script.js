const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const back = document.querySelector('.container')

btn1.addEventListener('click', () => back.style['background-color'] = '#000')

btn2.addEventListener('click', () => back.style['background-color'] = 'pink')

btn3.addEventListener('click', () => back.style['background-color'] = '#fff' )

