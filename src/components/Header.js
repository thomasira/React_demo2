import Button from './Button';

const Header = (props) => {
    const onClick = () => {
        console.log('clicked')
    }
    return (
        <header className="container mx-auto p-8 rounded-xl text-center max-w-screen-md flex justify-between items-center bg-green-400 shadow-lg shadow-green-500/40">
            <h1 className="text-2xl font-bold uppercase">{ props.title }</h1>
            <Button text="Ajouter" onClick={ onClick } color="btn-gr-green"/>
        </header>
    );
}

Header.defaultProps = {
    title: 'To-do List'
}
export default Header;