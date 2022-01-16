import { useEffect } from "react"
import {api} from "../../services/api"
import styles from "./styles.module.scss"
import logoImg from "../../assets/logo.svg"
import { response } from "express"

export function MessageList() {
  useEffect(()=>{
    api.get('messages').then(response => {
      console.log(response.data)
    })
  }, [])
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />
      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>Nao vejo a hora de começar esse evento, com certeza vai ser o melhor de todos! Vamoo pra cima!</p>
          <div className={styles.messageUser}>
            <div  className={styles.userImage}>
              <img src="https://github.com/nanefc.png" alt="Yanne Fernandes" />
            </div>
            <span>Yanne Fernandes</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>Nao vejo a hora de começar esse evento, com certeza vai ser o melhor de todos! Vamoo pra cima!</p>
          <div className={styles.messageUser}>
            <div  className={styles.userImage}>
              <img src="https://github.com/nanefc.png" alt="Yanne Fernandes" />
            </div>
            <span>Yanne Fernandes</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>Nao vejo a hora de começar esse evento, com certeza vai ser o melhor de todos! Vamoo pra cima!</p>
          <div className={styles.messageUser}>
            <div  className={styles.userImage}>
              <img src="https://github.com/nanefc.png" alt="Yanne Fernandes" />
            </div>
            <span>Yanne Fernandes</span>
          </div>
        </li>
      </ul>
    </div>
  )
}