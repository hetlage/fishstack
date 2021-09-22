import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Lookup from "./components/Lookup";

function App() {
    return (
        <div className="App">
            <Header/>
            <Container>
                <Jumbotron className="p-5">
                    <h1>WHOIS Domain Lookup and Availability</h1>
                </Jumbotron>
                <Lookup/>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;
