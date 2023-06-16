import React, { Component } from "react"; 
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  NavDropdown,
  Row,
  Col,
  Breadcrumb,
  Container,
  Spinner,
  Tabs,
  Tab,
  Table,
  ProgressBar,
  Pagination,
  Popover,
  OverlayTrigger,
  Collapse,
} from "react-bootstrap";

// import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buka: true,
    };
  }
  render() {
    const muncul = (
      <Popover>
        <Popover.Title as="h3">Informasi Website</Popover.Title>
        <Popover.Content>
          Website ini dibuat untuk memudahkan dalam pencarian informasi terkini
          tentang berita olahraga
        </Popover.Content>
      </Popover>
    );
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">Akses Sport</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Berita</Nav.Link>
              <Nav.Link href="/">Live Scores</Nav.Link>
              <NavDropdown title="Piala&Liga" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Piala&Liga
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/">Transfer Pemain</Nav.Link>
              <Nav.Link href="/">Tim</Nav.Link>
            </Nav>
            <Form inline className="d-flex align-items-end">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <br />
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}></Col>
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/">Liga Inggris</Breadcrumb.Item>
                <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={4}>
              <h3>Rumor Transfer Pemain</h3>
            </Col>

            <Col xs={6}></Col>
            <Col>
              <Spinner animation="border" variant="success" />
            </Col>
          </Row>
          <br />

          <Row>
            <Tabs>
              <Tab eventKey="Semua Transfer" title="Semua Transfer"></Tab>
              <Tab
                eventKey="Liga Premier Inggris"
                title="Liga Premier Inggris"
              ></Tab>
              <Tab eventKey="Serie A" title="Serie A"></Tab>
              <Tab eventKey="Divisi Primera" title="Divisi Primera"></Tab>
              <Tab eventKey="Bundesliga" title="Bundesliga"></Tab>
              <Tab eventKey="Liga 1 Indonesia" title="Liga 1 Indonesia"></Tab>
            </Tabs>
          </Row>
          <br />
          <Row>
            <Table hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Pemain</th>
                  <th>Tim</th>
                  <th>Transfer</th>
                  <th>Proses Transfer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>MAROUANE FELLAINI</td>
                  <td>MANCHESTER UNITED</td>
                  <td>SHANDONG LUNENG</td>
                  <td>
                    <ProgressBar now={85} label={`${85}%`} />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>LUIS NANI</td>
                  <td>SPORTING CP</td>
                  <td>ORLANDO CITY</td>
                  <td>
                    <ProgressBar now={55} label={`${55}%`} />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>MAREK HAMSIK</td>
                  <td>NAPOLI</td>
                  <td>DALIAN YIFANG</td>
                  <td>
                    <ProgressBar now={95} label={`${95}%`} />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>SARDAR AZMOUN</td>
                  <td>RUBIN KAZAN</td>
                  <td>ZENIT ST PETERSBURG</td>
                  <td>
                    <ProgressBar now={100} label={`${100}%`} />
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>MICHY BATSHUAYI</td>
                  <td>CHELSEA</td>
                  <td>CRYSTAL PALACE</td>
                  <td>
                    <ProgressBar now={50} label={`${50}%`} />
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>LUCAS PIAZON</td>
                  <td>CHELSEA </td>
                  <td>CHIEVO</td>
                  <td>
                    <ProgressBar now={100} label={`${100}%`} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Row>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Row>

          <Row>
            <Col>
              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={muncul}
              >
                <Button variant="primary" size="sm">
                  Informasi
                </Button>
              </OverlayTrigger>

              <Button
                variant="primary"
                onClick={() => this.setState({ buka: !this.state.buka })}
              >
                Versi Website
              </Button>
              <Collapse in={this.state.buka}>
                <p>Akses Sport V1.0</p>
              </Collapse>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
