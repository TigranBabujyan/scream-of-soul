import React from 'react';
import './TopNavBar.css';
import logoSOS from "../images/logoSOS-White.png"
import {Link, useLocation} from "react-router-dom";
import {IconButton, Typography} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        shoppingCart: {
            color:'#fff',
            '&:hover':{
                color: 'gray',
                backgroundColor: 'transparent',
            },
            '&:focus':{
                color: '#036016',
                backgroundColor: 'transparent',
            },
        },
    }))
interface TopNavBarProps {
    isVisible?: boolean;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ isVisible = true }) => {

    const classes = useStyles();
    let name = ''
    const location = useLocation();
    const pathname = location.pathname;

    const segments = pathname.split('/');
    const lastElement = segments[segments.length - 1];
    let count = ''

if (lastElement !== ''){
    name = 'Scream Of Soul'
}

    if (!isVisible) {
        return null;
    }

    return (
        <div>
                <nav className="top-nav-bar">
                    <Link to="/">
                        <img className='nav-bar-logo' src={logoSOS}/>
                            <Typography>{name}</Typography>
                    </Link>
                    <div className='nav-bar-buttons'>
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/team">Team</Link></li>
                            <li><Link to="/contacts">Contact</Link></li>
                        </ul>
                    </div>
                    <IconButton href='/cart'>
                        <div className='count'>{count}</div>
                        <ShoppingCartIcon
                        className={classes.shoppingCart}/>
                    </IconButton>
                </nav>
            <div className='top-nav-bar-mobile'>

            </div>
        </div>
    );
};

export default TopNavBar;