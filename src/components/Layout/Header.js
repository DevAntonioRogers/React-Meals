import headerImg from '../../assets/hero1.jpg'
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={headerImg} alt='meals' />
      </div>
    </>
  )
};

export default Header;
