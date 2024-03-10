import styles from './MainContent.module.css'

function MainContent() {
  return (
    <div className={styles.main_wrapper}>
      <h1 className={styles.main_wrapper_title}>
        Сайт-Визитка фронтенд разработчика
      </h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae nesciunt dolorum fugit adipisci animi esse id illo, deleniti obcaecati deserunt unde praesentium quaerat, sit delectus fuga excepturi laboriosam incidunt dolore!</p>
    </div>
  )
}

export default MainContent