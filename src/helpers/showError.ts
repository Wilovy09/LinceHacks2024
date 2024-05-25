import Swal from 'sweetalert2'

export const showError = async (message: string) => {
    await Swal.fire({
        title: 'Hubo un error',
        text: message,
        icon: 'error',
        showConfirmButton: false,
        showCloseButton: true,
        cancelButtonText: 'Cerrar'
    })
}