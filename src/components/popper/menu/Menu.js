import React from 'react';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '@/components/popper';

const cx = classNames.bind(styles);

const Menu = ({ children, items }) => {
    return (
        <Tippy
            interactive
            placement='bottom-end'
            animation={false}
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {
                            items.map(item => (
                                <></>
                            ))
                        }
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
