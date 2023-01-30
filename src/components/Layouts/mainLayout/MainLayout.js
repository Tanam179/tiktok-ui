import React from 'react';
import classNames from 'classnames/bind';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

const MainLayout = ({ children }) => {
    return (
        <div className={cx("wrapper")}>
            <Header></Header>
            <div className={cx("container")}>
                <Sidebar></Sidebar>
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
};

export default MainLayout;
