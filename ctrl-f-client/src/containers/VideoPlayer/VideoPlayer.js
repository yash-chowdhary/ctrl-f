import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import QueryForm from "../QueryForm/QueryForm";

class VideoPlayer extends Component {
    seek(time) {
        this.refs.videoRef.currentTime = time;
    }

    render() {
        const time = 90;

        const paddingStyle = {
            padding: '20px'
        };

        return (
            <Container className="VideoPlayer">
                <Row style={paddingStyle}>
                    <Col>
                        <video ref="videoRef" className="Player" width="80%" maxheight="100%" controls>
                            <source src={this.props.source_url} type={"video/mp4"}/>
                        </video>
                    </Col>
                </Row>

                <Row style={paddingStyle}>
                    <Col>
                        <QueryForm/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button color="primary" onClick={() => this.seek(time)}>01:30</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default VideoPlayer;