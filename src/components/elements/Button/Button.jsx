import { ButtonB } from './style';

const Button = ({ children, type = 'default' }) => {
    return <ButtonB type={type}>{children}</ButtonB>;
};

export default Button;
