import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Sidebar({ className }) {
    return <aside className={cx('wrapper')}>Sidebar</aside>;
}

export default Sidebar;
