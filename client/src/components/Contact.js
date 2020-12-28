import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const getStyle = {
    paddingLeft: '290px',
    textDecoration: 'underline',
    fontSize: "1.4rem",
    fontWeight: '700',
    color: 'crimson'
}

export default function Contact() {
    return (
        <>
        <Link to ="/" style={getStyle}> ← Back to Home</Link>
        <div>
        <Card style={{ width: '20rem' }}>

  <Card.Img variant="top" src="https://avatars2.githubusercontent.com/u/35677839?s=460&u=a104c25a68766afb02f654b513544379fe729925&v=4" height="230px" />

  <Card.Body>
    <Card.Title> Rajat Mehra</Card.Title>
    <Card.Text>
      I'm a Web Developer. I build web apps and produce aesthetic websites.
    </Card.Text>
     <Button variant="primary" href="https://www.linkedin.com/in/rajat-mehra"> LinkedIn </Button>
    <Button variant="primary" href="https://github.com/rajat-mehra05"> Github </Button>
  </Card.Body>
</Card>
</div>
</>
)
}