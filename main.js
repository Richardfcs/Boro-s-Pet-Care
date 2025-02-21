(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

document.querySelectorAll('.offcanvas a.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const offcanvasEl = document.getElementById('offcanvasNavbar');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (offcanvas) {
      offcanvas.hide();
    }
  });
});

