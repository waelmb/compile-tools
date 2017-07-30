'use strict'

const link = document.querySelector('.show')
const content = document.querySelector('.enquiries')

content.classList.add('hide-text')

link.addEventListener('click', function(event){
  event.preventDefault() // Prevent default behaviour of 'a' element
  content.classList.toggle('hide-text')
})
