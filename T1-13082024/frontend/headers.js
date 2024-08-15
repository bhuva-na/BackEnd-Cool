import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink
} from 'mdb-react-ui-kit';

export default function Header() {
  return (
    <>
      <MDBNavbar sticky light bgColor='light' >
        <MDBContainer>
          <MDBNavbarBrand href='#' >
            <img
              src='https://coolgentech.com/wp-content/uploads/2024/04/Coolgen-Logo-2.svg'
              height='50'
              alt=''
              loading='lazy'
            />
            
            <MDBNavbarLink  aria-current='page'  href='/' style={{marginLeft:"5%"}} >
            HOME
              </MDBNavbarLink> 
              <MDBNavbarLink  aria-current='page'  href='/mbaptojects' style={{marginLeft:"5%"}} >
              MBA-PROJECTS
              </MDBNavbarLink> 
              <MDBNavbarLink  aria-current='page'  href='/interships' style={{marginLeft:"5%"}} >
              INTERSHIPS
              </MDBNavbarLink> 
              <MDBNavbarLink  aria-current='page'  href='/cvwriting' style={{marginLeft:"5%"}} >
              CV-WRITING
              </MDBNavbarLink> 
              <MDBNavbarLink  aria-current='page' href='/consulting' style={{marginLeft:"5%"}} >
              CAREER-CONSULTANT
              </MDBNavbarLink> 
              <MDBNavbarLink  aria-current='page'  href='https://coolgentech.com/contact-us/' style={{marginLeft:"5%"}} >
              CONTACT-US
              </MDBNavbarLink> 

            
          </MDBNavbarBrand>
          
        </MDBContainer>
        
      </MDBNavbar>
    </>
  );
}