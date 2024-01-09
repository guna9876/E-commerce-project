import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <Navbar className='bg-dark  text-center py-2 d-flex justify-content-center gap-5'>
      <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ paddingLeft:"350px",  color:"white"}}>HOME</Nav.Link>
            <Nav.Link href="#home"  className='text-white' style={{ textDecoration: 'none',paddingLeft:"100px" }}>STORE</Nav.Link>
            <Nav.Link href="#home" style={{color:"white",paddingLeft:"100px"}}>ABOUT</Nav.Link> 
           </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;