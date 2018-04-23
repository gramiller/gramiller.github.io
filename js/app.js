// NavBar Bindings

var navBarToggle = document.getElementById('navigation_toggle')
var navigation = document.getElementById('navigation')

navBarToggle.onclick = function () {
    if (navigation.classList.contains('nav-bar__items-collapse')) {
        navigation.classList.remove('nav-bar__items-collapse')
    }
    else{
        navigation.classList.add('nav-bar__items-collapse')
    }
}

// Form Bindings
const hasValue = obj => obj.value && obj.value.length > 0

const applyFilledOut = cntrl =>
  hasValue(cntrl)
  ? cntrl.classList.add('filled-out')
  : cntrl.classList.remove('filled-out')

const formCntrls = Array.from(document.getElementsByClassName('form-control'))

formCntrls.forEach(cntrl => {
  applyFilledOut(cntrl)
  cntrl.addEventListener('focusout', () => applyFilledOut(cntrl))
})