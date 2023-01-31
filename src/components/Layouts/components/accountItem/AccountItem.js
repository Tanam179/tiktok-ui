import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/736d21414c84b6f8021d7cc179a0d77d~c5_100x100.jpeg?x-expires=1675263600&x-signature=h1s%2B33ghHiMt3cYPN7Z1Jl7OJ60%3D" alt="" />
            <div className={cx('info')}>
                <h4 className={cx('user-name')}>
                    <span>Faze - naMsaT</span>
                    <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('nickname')}>nam-six.nine</span>
            </div>
        </div>
    );
};

export default AccountItem;
