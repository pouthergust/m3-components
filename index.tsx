import React, { useState, ChangeEvent, FormEvent } from 'react'
import styles from './styles.css'

import MasterDataRest from '../../services/MasterData'
import Toast from '../Toast'
const MasterData = new MasterDataRest('CL')
interface IFormData {
  nome: string
  email: string
  telefone: string
  comment: string
}

function CustomForms() {
  const [formData, setFormData] = useState<IFormData>({} as IFormData)
  const [userMessage, setUserMessage] = useState('')
  const [visible, setVisible] = useState(false)

  const fields = [
    { name: 'nome', label: 'Nome', type: 'text' },
    { name: 'email', label: 'E-mail', type: 'email' },
    { name: 'telefone', label: 'Telefone', type: 'text' },
    // { name: 'comment', label: 'Comentário', type: 'textarea' },
  ]

  const changeVisibility = () => {
    setVisible(true)

    setTimeout(() => {
      setVisible(false)
    }, 3 * 1000)
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, nome } = formData
    let response: any

    if (!email || !nome) return

    const ifExist = await MasterData.search(`email=${email}`)

    if (ifExist.data.length !== 0) {
      setUserMessage('E-mail já existe!')
    } else {
      response = await MasterData.post(formData)

      if (response?.data.DocumentId) setUserMessage('sucesso')
    }

    changeVisibility()
  }

  return (
    <>
      <form className={styles.form__container} onSubmit={handleSubmit}>
        {fields.map(({ name, label, type }, i) => (
          <div className={styles.form__field} key={i}>
            <label htmlFor={name} className={styles.form__label}>
              {label}
            </label>
            <input
              type={type}
              name={name}
              className={styles.form__input}
              onChange={handleChange}
            />
          </div>
        ))}
        <div className={styles.form__field}>
          <label htmlFor="comment" className={styles.form__label}>
            Comentário
          </label>
          <textarea
            name="comment"
            className={styles.form__input}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className={styles.form__button} type="submit">
          Enviar
        </button>
      </form>
      <Toast
        visible={visible}
        text={userMessage}
        status={userMessage === 'sucesso' ? 'success' : 'failed'}
      />
    </>
  )
}

export default CustomForms
