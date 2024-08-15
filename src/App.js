import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import OutboxIcon from '@mui/icons-material/Outbox';
import Carousel from 'react-bootstrap/Carousel';


function App() {
  return (
    <div>
      {/*Oja je navbar */}

       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" ><OutboxIcon className='outbox-icon'/><span>Move It</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/*Oja je Hero */}
    <div className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold text-body-emphasis">Centered screenshot</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
        </div>
      </div>
      <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
        <div className="container px-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyoyiVbrMCQ5tMwzNgWbx3z_74yVjLn9mGkQ&s"
            className="img-fluid border rounded-3 shadow-lg mb-4"
            alt="Example image"
            width="400"
            height="100"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    {/*Oja je Feature */}
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Columns with icons</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6gU7fX6DDI5OzB6htvhYDKchy4bInKyzxw&s" height={30}/>
          </div>
          <h3 className="fs-2 text-body-emphasis">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.
          </p>
          <a href="#" className="icon-link">
            Call to action
            <svg className="bi">
              <use xlinkHref="#chevron-right"></use>
            </svg>
          </a>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAb1BMVEX///8AAADX19fHx8dnZ2c3Nzfz8/OTk5Orq6sLCwtCQkKDg4MRERH39/cEBARxcXF+fn69vb3Q0NCNjY3f398lJSVjY2MwMDDq6upLS0sbGxuxsbFUVFQ8PDydnZ0UFBRaWlqkpKQhISHCwsIzMzP7dhrXAAAEkUlEQVR4nO2c2ZqiMBCFFRR3EIQWRdx63v8Zp6e7TcKSpIIG4nznvxVIHbLUkuBoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAjE3qx0URJ/nQhjxDsjtl4fiXdRkVwdAWdSGJjuM64eG26fKswAY0S4qyoeK3YyLTQRaXoeRZT3Lf6dveK+5fbI1G2NmOim9O6qbzk+b+45yuI7XUHT+cVU0XF/0DruROWdnUMS4VLUekJ2QeUciHVSFHabsb3bB6sP6kCaG9l67spTqW5GeEBUnIp0UZ4/FW1uyhfuU+OsdJ6vnF7lSfOmFMUnK1qCOTTdXagN7PKj7DnywqPy8SkpLI2rq1TCVN7iqXTZtvPFitxSvuNN+Yx3MbFDIZI198dev2JTqvjJQDSUjfbDLBxFIqdy6OL6VDGoqtYOBVEZElQjC5djC6F2OJD/WVd37lpCfrDBBWLE0sNvL4lA+lQ3AohA6Rrs6MmNp5A8BDiZDgHvjVC8dmyYb77YhyOZ8m+uymV+bMsAspQr+x66Vx2zBwP7ei3cCdjlvTnY2skDjmZ0zIzK5lZiTkpfdBHpre0Qu8QnCj3sIyl7tNw0zhyyl5NeXJuEtlu4P56+VO0bdomCmsjkUPzHMmhJbz9gMLaA2CQDbbXYrlWY4hzeabsBXbpfW3ixDWiy4FKSwupwRavzjZI1bniHee2eDcViL88zBqSdaREletwF5ha9+s2zI/Ii+m1uF+RJ2/NGp+L+TScN/cs5NjWVarCJVbR3GrBa+iMaV5OkJ2CtPHHZnyMrtF7EbbfMBTXTu/Q521972twFJXalmEx4zqeHnXasCraK5NE/YbzSVueJVOHS/nizYDXkVzD5DPSVpZhCeIugV7bnETsc3r3ZW/Nt4zL7poV4fkdFzYYF22Dmph05Kwqcad3LrTCQKLCGP5qB1cN67aIMrsCaEYX2ress9Fu1Zo/CIXNqMOSiWJcCWxCtYr4lmLpaKgEAs6MtdmyDfi1nQmjQR34nJK29jtm1Tc6Qy3rS/bq2zE04P+filEI8f3c0NKOql5NxenyD9qJ2AukViyCuanppN2VcmkbujlsD0Xn3ExiyTHx95GiRZXlWz1pr+Jkptx3O2qEk91oPGHcFVZhV1VsllpOqX0age7XFUySq+KbCj7TsveRMmX65P0yvSRzbyLklFwOzS0ZJEQgr2Nki9T49Vp/6vmWE7OtQLLGyn5JsjTtD19ejclcqpKXNonMaWiRFLby7fLaV+U164ZUkVJ6+DyCSfUX0nXo3CikrYqcND8CsUyXfdmBSVtpSGbX120o94dIClpy/PN84Kn6XwS46GkdSN1ACHdKzubf6fG1+1+ZK5v+MVMO+v4IvB92XvQJwUvxlaJKv+jb/uFLCweKCmiSW/s3KtFAwAAAAAAAAAAwDqp5yaGX1Ce7/oizkAcTb4YMT9K0Sf072W8oU3VQP5kz+0OMegSu4f8n4f8ge5/0yOJ/lmDQvwvp5HtL2GexWTrdNfztq4Bks0pKZ7vJomTx68BAAAAAAAAAAAAAAAAAAAAAAAAAAAAwIS/Y1pKWXJ4RNYAAAAASUVORK5CYII=' height={30}></img>
          </div>
          <h3 className="fs-2 text-body-emphasis">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.
          </p>
          <a href="#" className="icon-link">
            Call to action
            <svg className="bi">
              <use xlinkHref="#chevron-right"></use>
            </svg>
          </a>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAADExMQpKSmdnZ3v7+9VVVX4+Piqqqrs7OzV1dVDQ0P19fWPj4+oqKja2todHR0LCwttbW1ISEi0tLSJiYlNTU1TU1MjIyOXl5c0NDSIiIh7e3u7u7taWlrh4eE7Ozt5eXkWFhbNG0mjAAAC6ElEQVR4nO3c6ZaaMACGYbEoYgUBl3HpaKf3f5ENa9kKOBpI4vv8GUWj5zsJSUhkZjMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8n8Vcts3ECS3pwmkDLuQntBZTJ7z4tjz+RYGEN6lfcFMg4XL4u72s3a2GF1nqlTA/sz6GF9Es4fojcbsPL6JCQvPPw/CHTKECCc0fD81P+EBP8w0q9DQkfA4JpSPh00go3UMJt3a0C8JgF9nbwWU0Srg5n0qj+Ok8cPlFn4ReY6pyGFROl4TrMM60XG3jmtvcV8v4abgeUFKThH4c6OqWjriH+JDfX1SPhGcR5ujWDrpHcfTcW1aLhHENei3HvSG1qEPCtQhit75ii1f6zkUdEoZpDbr75vjg9a9oa5BQdCnH+K8YDQ+NjMf29luifsKNaIlxJ+OkY2AtoyuOdQ/96ic8Z0O7k43zXjXQta8/VT/hKa3COOFvr1mPohJPneWVT7jN11NFwp+zxTXN6Px7g0jQOQ1XPqGdb1IkCcVp+avWVlc9Y6LyCaO8irKEokQ1o6jkqOsDlE+4y/vKImGRMW2roq/ddX2A8gkDy0oflBIWbXUeP7asoOsDlE8YtiZMp3JpyZ5pjfIJ2+tw8WVOHbadh27aRtORXvvzsNmX5vmyMVH7vrQ+Hmbt0y7GfO3Hw+qcxv0qtc+U9nOayrz0WmmfCf3npY1rC9upvGzAtUX1+rCexoTrw3ilIrnGv9TaZ8KEa/xincaZN/IZsk7zBmttneulvb9w0yKh+WveycSldd9iwG8UNUmY7z35xu49zczfPxQc0/eAY8U+vm/kPv43kVA6Ej6NhNKR8GnTJFz8aUxQxnEaK+xqooAP3U70bMJA6k0W7YJRE36O9FVln6Mm3I/0VWV7Er7OWyQ0/zyMJN77+z/ReAn9ycbDAT+5fYn1ZAmHrF29xF36P1Jo98DdtQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDbX8kJJh2RLOw8AAAAAElFTkSuQmCC" height={30}/>
          </div>
          <h3 className="fs-2 text-body-emphasis">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.
          </p>
          <a href="#" className="icon-link">
            Call to action
            <svg className="bi">
              <use xlinkHref="#chevron-right"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
    {/* Oja je carosel */}
    <div className='container'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-H4J4CY2YZmkwOf66pSZqQgPOXfYRAcmsA&s"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTte_p21smULaTvZckHO-zbLTQdv4a7CPdRQw&s"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTY43_GTRsSaRFz2ncJDphQoMvCQQIl1Cbig&s"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>


    <hr/>
    {/*Oja je footer */}
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">Home</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">Features</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">Pricing</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">FAQs</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">About</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">Home</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">Features</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">Pricing</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">FAQs</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">About</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">Home</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">Features</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">Pricing</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">FAQs</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">About</a>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>You can copy my work😜 Isak Rahmani</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#twitter"></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#instagram"></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#facebook"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>


    </div>
  );
}

export default App;
