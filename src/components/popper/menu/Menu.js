import React from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '@/components/popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const Menu = ({ children, items }) => {
    return (
        <Tippy
            arrow={true}
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {items.map((item, ind) => {
                            return <MenuItem className={cx('menu-item')} key={ind} data={item}></MenuItem>
                        })}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
