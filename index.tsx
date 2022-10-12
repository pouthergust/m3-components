import React from 'react'
import styles from './styles.css'

interface ToastProps {
  visible: boolean
  text: string
  status: 'success' | 'failed'
}

function Toast({ visible, text, status }: ToastProps) {
  return (
    <div
      className={`
        ${styles.toast} 
        ${status === 'success' ? styles.success : styles.failed}
        ${visible ? styles.visible : ''}
      `}
    >
      {text}
    </div>
  )
}

export default Toast
