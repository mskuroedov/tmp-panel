let userHeaderDropdown = document.getElementById('user-header-dropdown')
userHeaderDropdown.addEventListener('show.bs.dropdown', function () {
    this.style['box-shadow'] = '0px 5px 40px rgba(51, 116, 222, 0.15)'
})
userHeaderDropdown.addEventListener('hide.bs.dropdown', function () {
    this.style['box-shadow'] = 'none'
})