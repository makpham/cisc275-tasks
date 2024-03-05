import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { Container, Row, Col, Button } from "react-bootstrap";

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
            <p>Dilliest of Dallies ; o ;</p>
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
                        <div className="red-rectangle"></div>
                        <img
                            src="https://ih1.redbubble.net/image.5448836884.7313/st,small,507x507-pad,600x600,f8f8f8.jpg"
                            alt="A picture of me in class"
                        />
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
