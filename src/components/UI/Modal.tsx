import { useRef, useEffect, ReactNode } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = {
  open: boolean
  children: ReactNode
  onClose: () => void
}

const Modal = ({ open, children, onClose }: ModalProps) => {
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (dialog.current) {
      if (open) {
        dialog.current.showModal()
      } else {
        dialog.current.close()
      }
    }
  }, [open])

  const modalElement = document.getElementById('modal')

  if (!modalElement) {
    console.error("Can't find modal element")
    return null
  }

  return createPortal(
    <dialog className='modal' ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    modalElement
  )
}

export default Modal
