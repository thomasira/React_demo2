import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button className={`${ props.color } btn`} onClick={ props.onClick }>{ props.text }</button>
    );
}
Button.defaultProps = {
    color: 'btn-gr-blue'
}
Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
export default Button;