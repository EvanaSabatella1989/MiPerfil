const $form = document.querySelector('#formulario')
const $buttonMailto = document.querySelector('#mailto')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    // console.log(form.get('nombre'))
    $buttonMailto.setAttribute('href', `mailto:eva.sabatella@gmail.com?subject= nombre: ${form.get('nombre')} ,apellido: ${form.get('apellido')} ,mail: ${form.get('mail')}&body=${form.get('mensaje')}`)
    $buttonMailto.click()
}