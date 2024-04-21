import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, Container, DropdownButton, Dropdown } from 'react-bootstrap';
import { useStore } from './statestore';

const ByCountOrDateRange = () => {
  // const [selection, setSelection] = useState('count'); 
  let selection = useStore((state) => state.selection);
  let setSelection = useStore((state) => state.setSelection);
  
  // const [count, setCount] = useState('');
  let count = useStore((state) => state.count);
  let setCount = useStore((state) => state.setCount);
  // const [startDate, setStartDate] = useState('');
  let startDate = useStore((state) => state.startDate);
  let setStartDate = useStore((state) => state.setStartDate);
  // const [endDate, setEndDate] = useState('');
  let endDate = useStore((state) => state.endDate);
  let setEndDate = useStore((state) => state.setEndDate);
  // const [apods, setApods] = useState([]);
  let apods = useStore((state) => state.apods);
  let setApods = useStore((state) => state.setApods);
  
  let fetchApods = useStore((state) => state.fetchApods);

  // const fetchApods = async () => {
  //   // let apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=IabhjfXdft4AXDugcZhBfr8fMRb1mfnk4RfYyNz0';
  //   let apiUrl = '/apod/call?';
  //   if (selection === 'count') {
  //     apiUrl += `count=${count}`;
  //   } else {
  //     apiUrl += `start_date=${startDate}&end_date=${endDate}`;
  //   }

  //   const response = await fetch(apiUrl);
  //   const data = await response.json();
  //   setApods(data);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchApods();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <DropdownButton id="dropdown-basic-button" title={selection === 'count' ? 'Count' : 'Date Range'}>
          <Dropdown.Item onClick={() => setSelection('count')}>Count</Dropdown.Item>
          <Dropdown.Item onClick={() => setSelection('daterange')}>Date Range</Dropdown.Item>
        </DropdownButton>

        {selection === 'count' ? (
          <Form.Group controlId="formCount">
            <Form.Label>Count</Form.Label>
            <Form.Control type="number" value={count} onChange={(e) => setCount(e.target.value)} placeholder="Enter count" />
          </Form.Group>
        ) : (
          <>
            <Form.Group controlId="formStartDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formEndDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </Form.Group>
          </>
        )}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Row xs={1} md={2} className="g-4 mt-3">
        {apods.map((apodData, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={apodData.url} alt="APOD" />
              <Card.Body>
                <Card.Title>{apodData.title}</Card.Title>
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
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ByCountOrDateRange;
