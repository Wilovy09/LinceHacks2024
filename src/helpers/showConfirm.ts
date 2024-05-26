import Swal from 'sweetalert2'

export const showConfirm = async (message: string) => {
    await Swal.fire({
        title: 'Todo correcto!',
        text: message,
        icon: 'success',
        showConfirmButton: false,
        showCloseButton: true,
        cancelButtonText: 'Cerrar'
    })
}