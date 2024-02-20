import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Another Header</h1>
            <p>makayla pham</p>
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World</p>
            <Container>
                <Row>
                    <Col>
                        {" "}
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div className="red-rectangle"></div>
                    </Col>
                    <Col>
                        <img
                            src="../assets/images/pet-ada.jpg"
                            alt="A picture of my dog Ada"
                        />
                        <div className="red-rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
