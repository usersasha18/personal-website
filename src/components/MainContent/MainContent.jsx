import styles from './MainContent.module.css'

function MainContent() {
  return (
    <div className={styles.main_wrapper}>
      <h1 className={styles.main_wrapper_title}>
        Сайт-Визитка фронтенд разработчика
      </h1>
      <p className={styles.main_wrapper_text}>
        Страница говорит нам, что это вообще такое. Остальное вы сможете найти на других страницах.
      </p>
    </div>
  )
}

export default MainContent