import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={`container`}>
        <h2>Todo App</h2>
      </div>
    </div>
  )
}

export default Header