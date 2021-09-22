import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
    return (
        <header className="App-header">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Fishstack - A Docker Story</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;