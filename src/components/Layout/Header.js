import headerImg from '../../assets/hero1.jpg'
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={headerImg} alt='meals' />
      </div>
    </>
  )
};

export default Header;
