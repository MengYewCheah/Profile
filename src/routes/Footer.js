import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer () {
    return(
    <MDBFooter className='bg-body-tertiary text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                CHEAH MENG YEW
              </h6>
              <p>
                Feel free to contact me through email or whatsapp, I will try my best to respond within 3 days.
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                31, Persiaran Syed Putra, Kuala Lumpur
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                mengyew1999@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 012 661 9968
              </p>
            </MDBCol>
          </MDBRow> 
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    )
}

export default Footer;