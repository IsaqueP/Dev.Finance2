import styles from './App.module.css'
import income from './assets/income.svg'
import expense from './assets/expense.svg'
import total from './assets/total.svg'


function App() {

  return (
    <div className={styles.page}>
      <header>
        <img src="/src/assets/logo.svg" alt="logo do site" />
      </header>

      <main>

        <div className={styles.card}>
          <div>
            <span>Entradas</span>
            <span><img src={income} alt="income" /></span>
          </div>
          <span className={styles.value}>R$ 20,00</span>
        </div>

        <div className={styles.card}>
          <div>
            <span>Saídas</span>
            <span><img src={expense} alt="Expense" /></span>
          </div>
          <span className={styles.value}>-R$ 10,00</span>
        </div>
        
        <div className={styles.card}>
          <div>
            <span>Total</span>
            <span><img src={total} alt="Total" /></span>
          </div>
          <span className={styles.value}>R$ 10,00</span>
        </div>
        
      </main>

    </div>
  )
}

export default App
