import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
// import './ByDateForm.css'; // Assuming you have CSS for styling
import { useStore } from './statestore';

const ByDateForm = () => {
    // const [apodData, setApodData] = useState(null);
    let apodData = useStore((state) => state.apodData);
    let setApodData = useStore((state) => state.setApodData);
    // const [date, setDate] = useState('');
    let date = useStore((state) => state.date);
    let setDate = useStore((state) => state.setDate);

    let fetchAPOD = useStore((state) => state.fetchAPOD);

    useEffect(() => {
        // Fetch the APOD data for today or a selected date
        // const fetchAPOD = async () => {
        //     // const apiKey = 'DEMO_KEY'; // Use your NASA API key
        //     // let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
        //     let apiUrl = '/apod/call';
        //     if (date) apiUrl += `?date=${date}`;
        //     const response = await fetch(apiUrl);
        //     const data = await response.json();
        //     setApodData(data);
        // };
        if(apodData == null) fetchAPOD();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchAPOD();
        // The fetching is already triggered by the useEffect hook when date changes
    };

    return (
        <div className="ByDateForm" style={{
            backgroundImage: apodData?.media_type === 'image' ? `url(${apodData?.url})` : '', backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Card style={{ maxWidth: '800px', backgroundColor: 'rgb(255,255,255,0.7)' }}>
                    <Row nogutters>
                        <Col md={12} className="d-flex flex-column justify-content-center">
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="date">
                                        <Form.Label>Select Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            max={new Date().toISOString().split("T")[0]} // Disallow future dates
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Show
                                    </Button>
                                </Form>
                            </Card.Body>
                            {apodData?.media_type === 'video' ? (
                                <div className="video-responsive">
                                    <iframe
                                        width="560"
                                        height="315"
                                        src={apodData?.url}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="APOD Video"
                                    ></iframe>
                                </div>
                            ) : (<div />)}
                            <Card.Body>
                                <Card.Title>{apodData?.title}</Card.Title>
                                <Card.Text>
                                    {apodData?.date && <div>Date: {apodData?.date}</div>}
                                    {apodData?.copyright && <div>Copyright: {apodData?.copyright}</div>}
                                    {apodData?.media_type && <div>Media Type: {apodData?.media_type}</div>}
                                    {apodData?.explanation && <div>Explanation: {apodData?.explanation}</div>}
                                    {apodData?.hdurl && (
                                        <div>HD Image:<a href={apodData?.hdurl} target="_blank" >View HD Image</a>
                                        </div>
                                    )}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    );
};

export default ByDateForm;
