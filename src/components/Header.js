import Button from './Button';

const Header = (props) => {
    return (
        <header className="p-8 rounded-xl text-center flex justify-between items-center bg-green-400 shadow-lg shadow-green-500/40">
            <h1 className="text-2xl font-bold uppercase">{ props.title }</h1>
            <Button text={ props.showAdd ? 'fermer' : 'ajouter' } onClick={ props.toggleForm } color={props.showAdd ? 'btn-gr-red' : 'btn-gr-blue'}/>
        </header>
    );
}
Header.defaultProps = {
    title: 'To-do List'
}
export default Header;