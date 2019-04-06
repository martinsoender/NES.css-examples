(function() {
  var sidebar = document.querySelector('.sidebar')
  var toggleDarkMode = document.querySelector('.btn-dark-mode-js')

  toggleDarkMode.addEventListener('click', function(event) {
    event.preventDefault();
    if(sidebar.classList.contains('sidebar-dark')) {
      sidebar.classList.remove('sidebar-dark')
    } else {
      sidebar.classList.add('sidebar-dark')
    }
  })
})(window, document)
