import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
// import './ByDateForm.css'; // Assuming you have CSS for styling

const ByDateForm = () => {
    const [apodData, setApodData] = useState(null);
    const [date, setDate] = useState('');

    useEffect(() => {
        // Fetch the APOD data for today or a selected date
        const fetchAPOD = async () => {
            const apiKey = 'DEMO_KEY'; // Use your NASA API key
            let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
            if (date) apiUrl += `&date=${date}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            setApodData(data);
        };

        fetchAPOD();
    }, [date]);

    const handleSubmit = (event) => {
        event.preventDefault();
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
                    <Row noGutters>
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
                                    {apodData?.date && <p><strong>Date:</strong> {apodData?.date}</p>}
                                    {apodData?.copyright && <p><strong>Copyright:</strong> {apodData?.copyright}</p>}
                                    {apodData?.media_type && <p><strong>Media Type:</strong> {apodData?.media_type}</p>}
                                    {apodData?.explanation && <p><strong>Explanation:</strong> {apodData?.explanation}</p>}
                                    {apodData?.hdurl && (
                                        <p>
                                            <strong>HD Image:</strong> <a href={apodData?.hdurl} target="_blank" rel="noopener noreferrer">View HD Image</a>
                                        </p>
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
