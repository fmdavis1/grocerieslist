const Navbar = () => {
    return (
        <nav style={styles.navStyle}>
            <h1>Groceries App</h1>
        </nav>
    )
}

const styles = {
    navStyle: {
        display:'flex',
        justifyContent: 'space-around',
        border: 'solid gray 2px',
        backgroundColor:'green'
    }
}
export default  Navbar