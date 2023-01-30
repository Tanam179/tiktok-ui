import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({ className, to, href, rounded, disabled, text, primary, outline, small, medium, large, gray, full, auto, onClick, children, ...attributes }) => {
    let Component = "button";

    const props = {
        onClick,
    };

    if(disabled) {
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        disabled, text, primary, outline, small, medium, large, full, auto, rounded, gray, [className]: className
    })

    return (
        <Component {...props} {...attributes} className={classes} >
            <span>{children}</span>
        </Component>
    );
};

export default Button;
