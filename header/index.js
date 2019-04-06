(function() {
  var header = document.querySelector('.header')
  var toggleFixedMode = document.querySelector('.btn-fixed-js')
  var toggleDarkMode = document.querySelector('.btn-dark-mode-js')

  toggleFixedMode.addEventListener('click', function(event) {
    event.preventDefault()
    header.classList.add('header-fixed')
    document.body.style.height = '200vh'
  })

  toggleDarkMode.addEventListener('click', function(event) {
    event.preventDefault()
    if(header.classList.contains('header-dark')) {
      header.classList.remove('header-dark')
    } else {
      header.classList.add('header-dark')
    }
  })

})(window, document)
