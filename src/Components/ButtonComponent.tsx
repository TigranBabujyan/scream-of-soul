import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Button, createStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: theme.palette.primary.light,
            borderRadius: '3.2rem',
            color: theme.palette.primary.main,
            height: 48,
            padding: '0 2.5rem',
            border: '.2rem solid transparent',
            margin: 10,
            '&:hover' : {
                background: theme.palette.primary.light,
            }
        },
        label: {
            fontSize: '1.6rem',
            textTransform: 'capitalize',
        },
        startIcon: {
            height: '100%',
            margin: '4px'
        }
    }),
);

interface ButtonComponent {
    title?: string;
    icon?: any;
    href?: string;
    click?: () => {} | void;
    className?: any;
}

const ButtonComponent = (props: ButtonComponent) => {
    const {
        className,
        title,
        icon,
        click,
        href
    } = props
    const classes = useStyles();

    return (
        <Button
            className={className}
            classes={{
                root: classes.root,
                label: classes.label,
                startIcon: classes.startIcon
            }}
            startIcon={icon}
            href={href}
            onClick={click}
        >
            {title}
        </Button>
    )
}

export default ButtonComponent;
