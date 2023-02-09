const authBut = document.querySelector('header button')
const authBg = document.querySelector('main .auth')
const authBox = document.querySelector('main .auth .box')
const body = document.querySelector('body')
const close = document.querySelector('main .auth .box .close')

authBut.addEventListener("click", function(){
	authBg.style.zIndex = '2'
	setTimeout("authBg.style.transition = '.5s', authBg.style.backgroundColor = 'rgba(0, 0, 0, .25)'", 0)
	authBox.style.animationName = 'authIn'
	setTimeout("authBox.style.top = '50%'", 0)
	body.style.overflow = 'hidden'
})

close.addEventListener("click", function(){
	body.style.overflow = 'visible'
	authBox.style.animationName = 'authOut'
	setTimeout("authBox.style.top = '-25%'", 0)
	authBg.style.backgroundColor = 'rgba(0, 0, 0, 0)'
	setTimeout("authBg.style.zIndex = '-1', authBg.style.transition = '0s'", 500)
})