import React from 'react';
import Button from '@/components/button/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuItem = ({ data, className }) => {
    return (
        <Button className={cx(className)} full start leftIcon={data.icon} medium to={data.to}>{data.title}</Button>
    );
};

export default MenuItem;