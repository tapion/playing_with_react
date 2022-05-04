import classes from './Header.module.css';
import image from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton'; 

const Header = props => {
    return <>
    <header className={classes.header}>
        <h1>React meals</h1>
        <HeaderCartButton onClick={props.onClick}  />
    </header>
    <div className={classes['main-image']}>
        <img src={image} alt='Table with a lot of food' />
    </div>
    </>
};

export default  Header;