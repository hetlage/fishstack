import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
    return (
        <footer className="bg-dark text-white">
            <Container>
                <Row>
                    <Col>Col 1</Col>
                    <Col>Col 2</Col>
                    <Col>Col 3</Col>
                </Row>
                <p>&copy; John Hetlage 2021</p>
            </Container>
        </footer>
    )
}

export default Footer;