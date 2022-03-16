import React from 'react'
import {Row,Col,Card} from 'react-bootstrap';
function cards() {
    const img = [
    'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    'https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg',
    'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg',
    'https://images.squarespace-cdn.com/content/v1/5ac322c445776e9ae9b82917/1522744076528-ZCAVMU7JN9UVHY96V5EX/New+York.jpg?format=2500w']
  return (
    <div>
        <Row xs={1} md={2} className="g-4">
  {img?.map((ele, idx) => (
      
    <Col id={idx}>
      <Card>
        <Card.Img variant="top" src={ele} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </div>
  )
}

export default cards