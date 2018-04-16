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