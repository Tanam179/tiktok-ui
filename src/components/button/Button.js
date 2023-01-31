import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ className, start, full, disabled, to, href, leftIcon, rightIcon, text, children, primary, outline, roundedLg, roundedFull, medium, small, onClick, ...attributes }) {
    let Component = 'button';

    const _props = {
        onClick
    }

    const classes = cx('wrapper', {text, primary, outline, roundedLg, roundedFull , medium, small, full, start}, className);

    if(to) {
        _props.to = to;
        Component = Link;
    } else if(href) {
        _props.href = href;
        Component = 'a';
    }
    

    return (
            <Component className={classes} {..._props} {...attributes}>
                {leftIcon && <p className={cx('icon')}>{leftIcon}</p>}
                <p className={cx("button-title")}>{children}</p>
                {rightIcon && <p className={cx('icon')}>{rightIcon}</p>}
            </Component>
    );
}

export default Button;
