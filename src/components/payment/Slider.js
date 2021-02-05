import React from 'react'
import { Row, Col, Container,Nav,NavItem,Grid,Image}  from "react-bootstrap";
import "./Slider.css";

export default function Slider() {
    return (

        <div className="sliders">

    
        <div className="slider mt-5">
           

           <Container>
  <Row>
    <Col md={6} className="py-2">
        
        <div className="slider-h  mt-5">

        <h1>A complete payments platform, engineered for growth</h1>
   
     </div>

<div className="slider-p  mt-5">


 <p> Accept payments and move money globally with <br/> Stripe’s powerful APIs and software solutions <br/>designed to help you capture more revenue.</p>
          
</div>

  


<Container>
  <Row>
    <Col className="mt-3">
    
    <button className="btns">
    Start Now 
    </button> 
    
    <button className="btnss ">
    Contact Sales
    </button>
    
    
    {/* <Button className="btns">Start Now </Button> */}
    {/* <Button variant="link"> Contact Sales</Button> */}
    </Col>
    
  </Row>
  
</Container>










  
    </Col>
    <Col md={6}>
           
    <div class="grid">
  <div class="grid-item shadow-lg ">
      <Image fluid src="/static/paymentmobile.png"/>
  </div>
  <div class="grid-item grid-item--width2 grid-item shadow-lg  ">
  <Image fluid src="/static/paymentcard.png"/>
  </div>
  
  
</div>
  
    </Col>
  </Row>

</Container>

</div>


<div className="content pt-5 mt-5">



<Container>
  
  <Row>
    <Col md={3} className="pt-4 mt-3">
        <div className="copy-icon ">

        

        </div>
        <h5>Payments for any business</h5>

        <p>
        From ecommerce stores, to subscription businesses, to platforms and marketplaces, we offer a complete stack for all your payments needs across channels.
        </p>
    
    </Col>
    <Col md={3} className="pt-4 mt-3">
     
    

    <h5>Get started in minutes</h5>

    <p>Create an account online in minutes and use our libraries and SDKs to securely accept payments. We’ll deposit your funds directly into your bank account.</p>


    </Col>
    <Col md={3} className="pt-4 mt-3">
    <h5> Optimize your revenue </h5>
    <p>
    Protect yourself from fraud and increase authorization rates on every payment using our machine learning and data from millions of businesses.
    </p>

    </Col>
    <Col md={3} className="pt-4 mt-3">

  <h5> Scale globally </h5> 
  <p>
  With 135+ currencies and dozens of payment methods Stripe makes it easy to launch new markets and add your customers’ preferred way of paying to increase conversion abroad.
  </p>

    </Col>
  </Row>
</Container>


</div>


<div className="companies py-5">


<Container >
  
  <Row>
    <Col md={3} className="mt-5">

    <div className="Icon">  
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" viewBox="0 0 200 40" class="UserLogo variant-- "><title>Amazon logo</title><g fill="none" fill-rule="evenodd"><path fill="var(--userLogoColor, #EFA82E)" d="M111.58 33.91C106.18 37.9 98.37 40 91.64 40a36.13 36.13 0 0 1-24.37-9.28c-.5-.45-.05-1.08.56-.72a49.08 49.08 0 0 0 24.37 6.46c5.98 0 12.55-1.24 18.6-3.8.9-.39 1.67.6.78 1.25"></path><path fill="var(--userLogoColor, #EFA82E)" d="M113.82 31.36c-.69-.88-4.56-.42-6.3-.21-.52.06-.6-.4-.13-.73 3.09-2.17 8.15-1.54 8.73-.82.6.74-.15 5.8-3.04 8.21-.45.38-.87.18-.67-.31.65-1.63 2.1-5.26 1.41-6.14"></path><path fill="var(--userLogoColor, #1B1A19)" d="M107.65 15.13v-2.1c0-.33.24-.54.53-.54h9.45c.3 0 .54.22.54.53v1.8c0 .3-.26.7-.71 1.33l-4.9 6.97c1.82-.04 3.74.23 5.4 1.16.36.2.47.51.5.82v2.24c0 .31-.34.67-.7.48a10.89 10.89 0 0 0-9.98.02c-.33.17-.67-.18-.67-.49v-2.13c0-.34 0-.93.35-1.45l5.67-8.11h-4.94a.53.53 0 0 1-.54-.53M73.2 28.26h-2.88a.54.54 0 0 1-.5-.48V13.06c0-.3.24-.53.55-.53h2.67c.28.01.5.23.52.5v1.92h.06c.7-1.86 2-2.73 3.78-2.73 1.8 0 2.92.87 3.73 2.73a4.08 4.08 0 0 1 3.96-2.73c1.2 0 2.52.5 3.33 1.61.9 1.24.72 3.04.72 4.62v9.28c0 .3-.25.53-.55.53h-2.87a.54.54 0 0 1-.52-.52v-7.8c0-.63.06-2.18-.08-2.76-.22-1-.86-1.27-1.69-1.27-.7 0-1.42.46-1.72 1.2-.29.75-.26 1.99-.26 2.82v7.8c0 .3-.25.53-.56.53h-2.87a.54.54 0 0 1-.51-.52v-7.8c0-1.65.26-4.06-1.77-4.06-2.07 0-1.99 2.35-1.99 4.05v7.8c0 .3-.25.53-.55.53m53.11-13.03c-2.11 0-2.25 2.88-2.25 4.67 0 1.8-.02 5.64 2.23 5.64 2.22 0 2.33-3.1 2.33-4.99 0-1.24-.05-2.72-.43-3.9-.32-1.02-.96-1.42-1.88-1.42m-.02-3.01c4.26 0 6.57 3.66 6.57 8.3 0 4.5-2.55 8.05-6.57 8.05-4.19 0-6.46-3.65-6.46-8.2 0-4.59 2.3-8.15 6.46-8.15m12.1 16.04h-2.87a.54.54 0 0 1-.51-.52V13a.55.55 0 0 1 .55-.48h2.66c.25.01.46.18.51.41v2.25h.05c.81-2.01 1.94-2.97 3.92-2.97 1.29 0 2.55.47 3.35 1.74.75 1.17.75 3.16.75 4.58v9.26a.55.55 0 0 1-.55.46h-2.88a.54.54 0 0 1-.5-.46v-8c0-1.6.18-3.95-1.8-3.95-.7 0-1.35.46-1.67 1.17-.4.9-.46 1.8-.46 2.79v7.92c0 .3-.25.53-.55.53m-35.38-.03a.6.6 0 0 1-.68.06c-.96-.79-1.13-1.15-1.65-1.9-1.57 1.6-2.7 2.08-4.73 2.08-2.42 0-4.3-1.5-4.3-4.47a4.87 4.87 0 0 1 3.06-4.69c1.56-.68 3.74-.8 5.4-1v-.36c0-.69.06-1.5-.35-2.08-.35-.53-1.02-.75-1.61-.75-1.1 0-2.07.56-2.31 1.72-.05.26-.24.52-.5.53l-2.78-.3c-.24-.05-.5-.24-.43-.6.64-3.37 3.69-4.4 6.42-4.4 1.4 0 3.23.38 4.33 1.44 1.4 1.3 1.26 3.04 1.26 4.93v4.47c0 1.34.56 1.93 1.09 2.66.18.26.22.57-.01.76-.59.49-1.63 1.4-2.2 1.9h-.01zm-2.9-7c0 1.12.03 2.05-.54 3.05-.45.8-1.18 1.3-1.98 1.3-1.1 0-1.75-.84-1.75-2.08 0-2.44 2.2-2.88 4.27-2.88v.61zm-34.76 7a.6.6 0 0 1-.68.06c-.95-.79-1.12-1.15-1.65-1.9-1.57 1.6-2.69 2.08-4.73 2.08-2.42 0-4.3-1.5-4.3-4.47a4.87 4.87 0 0 1 3.06-4.69c1.56-.68 3.74-.8 5.4-1v-.36c0-.69.06-1.5-.35-2.08-.34-.53-1.02-.75-1.6-.75-1.1 0-2.08.56-2.32 1.72-.05.26-.24.52-.5.53l-2.78-.3c-.23-.05-.5-.24-.43-.6.64-3.37 3.7-4.4 6.43-4.4 1.4 0 3.22.38 4.32 1.44 1.4 1.3 1.27 3.04 1.27 4.93v4.47c0 1.34.55 1.93 1.08 2.66.18.26.22.57-.01.76-.59.49-1.63 1.4-2.2 1.9zm-2.9-7c0 1.12.03 2.05-.53 3.05-.46.8-1.18 1.3-2 1.3-1.1 0-1.74-.84-1.74-2.08 0-2.44 2.2-2.88 4.28-2.88v.61z"></path></g></svg>
    </div>
    </Col>
    <Col md={3} className="mt-5">
        <div className="Icon">  
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" width="200" height="40" class="UserLogo variant-- "><g fill="none" fill-rule="evenodd"><title>Booking.com logo</title><path fill="var(--userLogoColor, #273B7D)" fill-rule="nonzero" d="M84.88 11.71a2.19 2.19 0 1 1 2.18 2.2c-1.2 0-2.18-.99-2.18-2.2"></path><path fill="var(--userLogoColor, #499FDD)" fill-rule="nonzero" d="M119.34 26.28a2.19 2.19 0 1 1 4.36 0c0 1.21-.98 2.2-2.18 2.2-1.2 0-2.18-.99-2.18-2.2"></path><path fill="var(--userLogoColor, #273B7D)" fill-rule="nonzero" d="M49.04 25.34c-1.88 0-3.19-1.5-3.19-3.63 0-2.14 1.3-3.63 3.19-3.63 1.9 0 3.21 1.5 3.21 3.63 0 2.17-1.3 3.63-3.21 3.63zm0-10.45a6.62 6.62 0 0 0-6.87 6.82 6.62 6.62 0 0 0 6.87 6.82c4 0 6.9-2.87 6.9-6.82s-2.9-6.82-6.9-6.82zM80.65 22.05c-.15-.3-.33-.54-.52-.73l-.12-.13.13-.12c.18-.2.37-.43.55-.69l3.5-5.22h-4.26l-2.63 4.08c-.15.22-.45.33-.9.33h-.6v-7.72c0-1.55-.97-1.76-2-1.76H72v18.24h3.78v-5.47h.36c.43 0 .72.05.85.28l2.09 3.94c.58 1.06 1.16 1.25 2.25 1.25h2.9l-2.16-3.57-1.43-2.71M98.99 14.86c-1.92 0-3.15.85-3.84 1.58l-.23.23-.08-.32c-.2-.77-.88-1.2-1.9-1.2h-1.7l.02 13.17H95v-6.07c0-.6.07-1.1.23-1.58a3.08 3.08 0 0 1 3.04-2.3c1.17 0 1.63.62 1.63 2.21v5.74c0 1.36.63 2 2 2h1.78v-8.37c0-3.33-1.63-5.1-4.7-5.1M87.11 15.16h-1.78l.01 10.18v2.98h3.73l.02-11.16c0-1.35-.65-2-1.98-2M63.77 25.34c-1.88 0-3.19-1.5-3.19-3.63 0-2.14 1.31-3.63 3.2-3.63 1.88 0 3.2 1.5 3.2 3.63 0 2.17-1.29 3.63-3.2 3.63zm0-10.45a6.62 6.62 0 0 0-6.87 6.82 6.62 6.62 0 0 0 6.87 6.82c4 0 6.9-2.87 6.9-6.82s-2.9-6.82-6.9-6.82z"></path><path fill="var(--userLogoColor, #499FDD)" fill-rule="nonzero" d="M144.19 25.34c-1.88 0-3.2-1.5-3.2-3.63 0-2.14 1.32-3.63 3.2-3.63 1.89 0 3.21 1.5 3.21 3.63 0 2.17-1.3 3.63-3.21 3.63zm0-10.45a6.62 6.62 0 0 0-6.87 6.82 6.62 6.62 0 0 0 6.87 6.82c3.99 0 6.9-2.87 6.9-6.82s-2.91-6.82-6.9-6.82z"></path><path fill="var(--userLogoColor, #273B7D)" fill-rule="nonzero" d="M111.6 24.76c-2.06 0-2.79-1.8-2.79-3.47 0-.74.19-3.15 2.58-3.15 1.2 0 2.78.34 2.78 3.27 0 2.77-1.4 3.35-2.58 3.35zm4.52-9.64c-.71 0-1.26.29-1.53.8l-.1.2-.18-.14a5.1 5.1 0 0 0-3.45-1.15c-3.51 0-5.87 2.64-5.87 6.56 0 3.92 2.44 6.66 5.94 6.66 1.19 0 2.13-.28 2.88-.85l.3-.22v.37c0 1.76-1.15 2.73-3.2 2.73-1 0-1.92-.25-2.53-.47-.8-.24-1.26-.04-1.58.76l-.3.74-.42 1.07.26.14c1.32.7 3.03 1.12 4.59 1.12 3.2 0 6.92-1.64 6.92-6.24l.01-12.08h-1.74zM35.07 25.19H32v-3.66c0-.78.3-1.19.98-1.28h2.08c1.48 0 2.44.94 2.45 2.46 0 1.55-.94 2.48-2.45 2.48zM32 15.33v-.96c0-.84.36-1.24 1.14-1.3h1.56c1.34 0 2.15.81 2.15 2.15 0 1.03-.55 2.22-2.1 2.22h-2.75v-2.1zm6.96 3.65l-.55-.31.48-.42a4.41 4.41 0 0 0 1.5-3.43c0-2.87-2.22-4.72-5.66-4.72h-4.37a1.92 1.92 0 0 0-1.85 1.9v16.26h6.3c3.82 0 6.28-2.08 6.28-5.3 0-1.74-.8-3.23-2.13-3.98z"></path><path fill="var(--userLogoColor, #499FDD)" fill-rule="nonzero" d="M167.84 14.9c-1.56 0-3.06.73-4.03 1.95l-.27.35-.21-.39c-.7-1.26-1.9-1.9-3.56-1.9-1.74 0-2.9.96-3.45 1.54l-.36.39-.13-.5c-.2-.74-.85-1.14-1.83-1.14h-1.58l-.02 13.12H156v-5.8c0-.5.06-1 .19-1.53.34-1.4 1.28-2.9 2.86-2.75.97.1 1.45.85 1.45 2.3v7.78h3.6v-5.8c0-.63.07-1.1.2-1.58.3-1.33 1.28-2.7 2.8-2.7 1.1 0 1.51.62 1.51 2.3v5.86c0 1.33.6 1.92 1.92 1.92h1.69v-8.38c0-3.34-1.47-5.04-4.37-5.04M135.24 23.76c0 .02-1.55 1.64-3.58 1.64-1.85 0-3.72-1.13-3.72-3.67 0-2.18 1.45-3.71 3.53-3.71.67 0 1.43.24 1.55.64l.02.07c.28.92 1.11.97 1.28.97h1.96V18c0-2.27-2.88-3.09-4.81-3.09-4.15 0-7.15 2.89-7.15 6.86s2.97 6.86 7.07 6.86c3.56 0 5.5-2.34 5.5-2.37l.11-.12-1.55-2.58-.2.21"></path></g></svg>
        </div>

        
    </Col>
    <Col md={3} className="mt-5">
    <div className="Icon">  
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" viewBox="0 0 200 40" class="UserLogo variant-- "><title>docusign</title><g fill="none" fill-rule="evenodd"><path fill="var(--userLogoColor, #000)" fill-rule="nonzero" d="M132.82 14.34c1.7 0 2.94.67 3.77 1.8h.05v-1.43h3.48v12.6c0 1.92-.61 3.22-1.62 4.15-1.14 1.06-2.9 1.54-4.91 1.54-3.72 0-6-1.6-6.37-4.25h3.58c.3.85 1.06 1.51 2.74 1.51 2.04 0 3.02-.98 3.02-2.84v-1.49h-.08a4.4 4.4 0 0 1-3.55 1.6c-3.03 0-6-2.4-6-6.52 0-4.06 2.44-6.67 5.89-6.67zM113.2 9c4.2 0 6.93 2.02 7.3 5.71h-3.7c-.3-1.77-1.73-2.65-3.62-2.65-2.07 0-3.42.87-3.42 2.23 0 1.54 1.32 2 4.13 2.6 3.9.85 7.09 1.78 7.09 5.88 0 3.85-3.1 6-7.38 6-5.14 0-8.06-2.28-8.2-6.3h3.77c.27 2.3 1.57 3.2 4.27 3.2 1.97 0 3.7-.7 3.7-2.45 0-1.86-1.81-2.23-4.7-2.9-3.4-.77-6.5-1.67-6.5-5.63 0-3.75 3.05-5.69 7.26-5.69zm-42.35 5.34c4.22 0 7.11 3.14 7.11 7.2 0 4.07-2.89 7.2-7.1 7.2-4.23 0-7.12-3.13-7.12-7.2 0-4.06 2.9-7.2 7.11-7.2zm14.5 0c3.53 0 5.7 2.05 6.18 5h-3.52a2.5 2.5 0 0 0-2.5-2.1c-2.17 0-3.29 1.67-3.29 4.3 0 2.58 1.04 4.31 3.24 4.31 1.46 0 2.5-.77 2.73-2.31h3.48c-.24 2.9-2.5 5.2-6.13 5.2-4.3 0-6.98-3.13-6.98-7.2 0-4.06 2.65-7.2 6.8-7.2zm10.6.37v8.48c0 1.6.7 2.47 2.25 2.47 1.7 0 2.73-1.27 2.73-3.08v-7.87h3.6v13.64h-3.47v-1.6h-.08a4.37 4.37 0 0 1-3.9 1.97c-3.02 0-4.72-1.94-4.72-4.92v-9.09h3.58zm29.77 0v13.64h-3.6V14.7h3.6zM54.98 9.35c5.07 0 8.33 4.09 8.33 9.7 0 3.08-1.03 5.79-3.02 7.46a8.46 8.46 0 0 1-5.63 1.84H47v-19h7.98zm94.32 5c2.82 0 4.7 2.12 4.7 5.1v8.9h-3.6v-8.37c0-1.47-.86-2.5-2.37-2.5-1.6 0-2.76 1.27-2.76 3.13v7.74h-3.6V14.7h3.52v1.86h.08a4.42 4.42 0 0 1 4.03-2.23zm-78.45 2.73c-2.23 0-3.45 1.8-3.45 4.46s1.22 4.44 3.45 4.44c2.2 0 3.45-1.78 3.45-4.44 0-2.65-1.24-4.46-3.45-4.46zm-16.34-4.44h-3.66v12.39h3.55c3.6 0 5.01-2.2 5.01-5.98 0-3.78-1.64-6.4-4.9-6.4zm79 4.6c-1.83 0-3.05 1.43-3.05 3.72 0 2.31 1.22 3.67 3.08 3.67 2.28 0 3.2-1.68 3.2-3.7 0-1.99-1.05-3.7-3.23-3.7zm-7.79-7.81v3.38h-3.6V9.43h3.6z"></path></g></svg>
    </div>

    </Col>
    <Col md={3} className="mt-5">

    <div className="Icon">  
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" viewBox="0 0 200 40" class="UserLogo variant-- "><title>Instacart logo</title><g fill="none" fill-rule="evenodd"><path fill="var(--userLogoColor, #FF8200)" fill-rule="nonzero" d="M46.7 16.23c1.64 1.66 2.99 4.38 2.22 6-2.07 4.3-17.46 11.87-18.77 10.56-1.3-1.3 6.26-16.72 10.57-18.79 1.6-.77 4.32.58 5.98 2.23z"></path><path fill="var(--userLogoColor, #43B02A)" fill-rule="nonzero" d="M54.85 14.41c-.27-.99-.95-2-1.97-2.11-1.87-.22-4.82 3.1-4.61 3.88.2.78 4.37 2.17 5.93 1.05.8-.58.92-1.82.65-2.82zm-5.8-9.17c1.4.38 2.8 1.34 2.97 2.77.3 2.62-4.33 6.76-5.43 6.47-1.1-.3-3.04-6.15-1.48-8.33.81-1.13 2.56-1.28 3.95-.91zm41.43 15.54l-1.37-.2c-1.31-.2-2.07-.63-2.07-1.4 0-.89.98-1.44 2.45-1.44 1.03 0 1.87.39 2.68.8l.16.08c.18.1.38.14.6.14.47 0 .9-.26 1.14-.68l.11-.2a1.34 1.34 0 0 0-.57-1.85 8.8 8.8 0 0 0-4.12-1.12c-3.5 0-5.77 1.7-5.77 4.42 0 2.24 1.61 3.64 4.65 4.06l1.4.18c1.46.2 2.17.64 2.17 1.33 0 .64-.34 1.48-2.61 1.48a6.7 6.7 0 0 1-3.56-.97 1.33 1.33 0 0 0-1.81.43l-.08.12c-.2.31-.25.7-.16 1.05.09.36.31.65.63.83a11.2 11.2 0 0 0 4.98 1.37c3.65 0 5.91-1.6 5.91-4.42 0-2.26-1.6-3.55-4.76-4zm42.49 4.93a1.4 1.4 0 0 0-1.8-.25c-.74.48-1.56.73-2.36.73-2.19 0-3.78-1.74-3.78-4.13 0-2.4 1.59-4.13 3.78-4.13.85 0 1.6.23 2.31.7.55.37 1.34.28 1.79-.2l.11-.13a1.53 1.53 0 0 0-.25-2.3 6.96 6.96 0 0 0-3.87-1.1c-4.21 0-7.16 2.94-7.16 7.16 0 4.22 2.95 7.16 7.16 7.16 1.46 0 2.8-.38 3.89-1.11a1.52 1.52 0 0 0 .28-2.29l-.1-.11zM64.78 10.05c-1.1 0-1.95.87-1.95 1.98 0 1.12.84 1.96 1.95 1.96 1.11 0 1.98-.86 1.98-1.96s-.87-1.98-1.98-1.98zm.6 4.96h-1.16c-.57 0-1.02.46-1.02 1.03v11.81c0 .57.46 1.03 1.02 1.03h1.15c.57 0 1.03-.46 1.03-1.03V16.04c0-.57-.46-1.03-1.03-1.03zm37.87 11.12a2.8 2.8 0 0 1-2.8-2.8V18h2.8c.57 0 1.03-.46 1.03-1.03v-.93c0-.57-.46-1.03-1.03-1.03h-2.8v-3.07c0-.57-.46-1.03-1.03-1.03h-1.21c-.57 0-1.03.46-1.03 1.03v11.2c0 3.22 2.45 6.07 5.83 6.07a1.26 1.26 0 0 0 1.27-1.27v-.79c0-.57-.47-1.02-1.03-1.02zM75.29 14.9a6.22 6.22 0 0 0-6.38 6.08v6.87c0 .57.46 1.03 1.03 1.03h1.16c.57 0 1.03-.46 1.03-1.03V21.5c0-2.13 1.28-3.54 3.16-3.54 1.88 0 3.17 1.41 3.17 3.54v6.35c0 .57.46 1.03 1.02 1.03h1.17c.56 0 1.02-.46 1.02-1.03v-6.87c0-2.8-2.28-6.08-6.38-6.08zm84.24.14a14.4 14.4 0 0 0-2.14-.14h-.15a6.14 6.14 0 0 0-6.1 6.15v6.8c0 .57.46 1.03 1.03 1.03h1.16c.57 0 1.03-.46 1.03-1.03v-6.68c0-1.94 1.38-3.2 3.08-3.2.3 0 .64.03.97.1a1.4 1.4 0 0 0 1.63-1.05l.2-.84a.93.93 0 0 0-.71-1.14zm8.56 2.96c.56 0 1.02-.46 1.02-1.03v-.93c0-.57-.46-1.03-1.02-1.03h-2.81v-3.07c0-.57-.46-1.03-1.03-1.03h-1.21c-.57 0-1.03.46-1.03 1.03v11.2c0 3.22 2.45 6.07 5.83 6.07a1.26 1.26 0 0 0 1.27-1.27v-.79c0-.57-.47-1.02-1.03-1.02a2.8 2.8 0 0 1-2.8-2.8V18h2.8zm-22.27-2a6.96 6.96 0 0 0-3.88-1.1H141.8c-1.45 0-2.79.38-3.87 1.1a6.92 6.92 0 0 0-3.13 6.06c0 2.8 1.3 5.05 3.4 6.23a6.7 6.7 0 0 0 3.42.93c2.3 0 3.69-1.3 4.12-1.87v.5c0 .56.46 1.02 1.03 1.02h1.16c.57 0 1.03-.46 1.03-1.03v-5.78a6.92 6.92 0 0 0-3.13-6.06zm-2.67 9.97a4.16 4.16 0 0 1-1.21.22h-.14a4.09 4.09 0 0 1-1.22-.22c-1.5-.53-2.5-2.01-2.5-3.9 0-2.25 1.39-3.91 3.37-4.12h.03a3.98 3.98 0 0 1 .34-.02h.09a4.1 4.1 0 0 1 .35.02h.03c1.98.2 3.37 1.87 3.37 4.11 0 1.9-1 3.38-2.5 3.91zM116.7 16a6.96 6.96 0 0 0-3.87-1.1H112.67c-1.45 0-2.8.38-3.87 1.1a6.92 6.92 0 0 0-3.14 6.06c0 2.8 1.3 5.05 3.42 6.23a6.7 6.7 0 0 0 3.4.93c2.3 0 3.7-1.3 4.13-1.87v.5c0 .56.46 1.02 1.02 1.02h1.17c.57 0 1.02-.46 1.02-1.03v-5.78A6.92 6.92 0 0 0 116.7 16zm-2.66 9.97a4.16 4.16 0 0 1-1.22.22h-.14a4.09 4.09 0 0 1-1.21-.22c-1.51-.53-2.51-2.01-2.51-3.9 0-2.25 1.4-3.91 3.37-4.12h.03a3.98 3.98 0 0 1 .35-.02h.09a4.1 4.1 0 0 1 .34.02h.03c1.98.2 3.38 1.87 3.38 4.11 0 1.9-1 3.38-2.51 3.91z"></path></g></svg>
    </div>

    </Col>
  </Row>
</Container>



<Container>
  
  <Row>
    <Col md={3} className="mt-5">
<div className="icon">
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" viewBox="0 0 200 40" class="UserLogo variant-- "><title>Peloton logo</title><g fill="none" fill-rule="evenodd"><path fill="var(--userLogoColor, #181A1D)" fill-rule="nonzero" d="M58.68 4.83a2.74 2.74 0 0 1 3.7-.98 2.7 2.7 0 0 1 .98 3.67l-2.54 4.4a12.24 12.24 0 0 1 2.33 15.23 12.41 12.41 0 0 1-14.47 5.62l-2.54 4.4a2.7 2.7 0 1 1-4.67-2.69l8.6-14.82a2.7 2.7 0 1 1 4.67 2.69 2.74 2.74 0 0 1-3.68.97l-2.7 4.69c3.89 2.24 8.85.9 11.06-2.94 2.26-3.83.9-8.8-2.95-11a7.94 7.94 0 0 0-6.15-.8A8 8 0 0 0 45.41 17l-4.72 8.1A12.41 12.41 0 0 1 56.14 9.23zm54.68 10.1A5.99 5.99 0 0 1 119.5 21c0 3.5-2.7 6.07-6.15 6.07A6.01 6.01 0 0 1 107.2 21c0-3.5 2.75-6.07 6.15-6.07zm26.8 0a5.99 5.99 0 0 1 6.15 6.07c0 3.5-2.75 6.07-6.15 6.07a5.99 5.99 0 0 1-6.14-6.07c0-3.5 2.74-6.07 6.14-6.07zm10.33.04l5.99 5.62c.57.53 1.39 1.63 1.39 1.63s-.17-1.34-.17-2.16V15.1h2.3v11.94h-.25l-5.98-5.62c-.57-.57-1.43-1.63-1.43-1.63s.16 1.3.16 2.16v4.97h-2.25V14.97h.24zm-74.06.12c2.42 0 4.43 1.19 4.43 3.96 0 2.76-2.01 3.99-4.43 3.99h-1.72v3.87h-2.46V15.09h4.18zm15.86 0v2.16h-5.4v2.73h4.75v2.08h-4.76v2.73h5.66v2.12h-8.12V15.09h7.87zm6.8 0v9.7h5.38v2.12h-7.83V15.09h2.46zm32.3-.04v2.16H128v9.7h-2.46v-9.7h-3.4v-2.16h9.26zm-18.03 2.04c-2.17 0-3.65 1.67-3.65 3.91 0 2.2 1.48 3.91 3.65 3.91S117 23.2 117 21s-1.48-3.91-3.65-3.91zm26.76 0c-2.17 0-3.65 1.67-3.65 3.91 0 2.2 1.48 3.91 3.65 3.91 2.22 0 3.65-1.71 3.65-3.91s-1.48-3.91-3.65-3.91zm-63.77.12h-1.68v3.67h1.68c1.19 0 1.97-.53 1.97-1.83s-.82-1.84-1.97-1.84z"></path></g></svg>

</div>
    </Col>
    <Col md={3} className="mt-5">
    <div className="icon">
<svg width="200" height="40" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" class="UserLogo variant-- "><title>Shopify logo</title><path d="M66.54 8.43c-.02-.18-.18-.26-.3-.27-.11-.02-2.46-.04-2.46-.04L61.61 6c-.19-.2-.56-.14-.72-.1l-1 .31a6.5 6.5 0 0 0-.46-1.15c-.7-1.35-1.72-2.05-2.97-2.05-.08 0-.18 0-.26.02a2.6 2.6 0 0 0-2.17-.98c-1.6.04-3.18 1.2-4.5 3.26A12.73 12.73 0 0 0 47.75 10c-1.84.57-3.13.96-3.14.98-.92.3-.96.31-1.08 1.2-.1.64-2.52 19.41-2.52 19.41l20.34 3.52 8.81-2.19S66.55 8.6 66.54 8.43zm-7.66-1.9l-1.58.5a9.17 9.17 0 0 0-.5-2.92c1.24.23 1.83 1.6 2.08 2.42zm-2.64.82l-3.4 1.06c.33-1.25.96-2.5 1.72-3.32.3-.32.68-.65 1.15-.84.45.92.53 2.22.53 3.1zm-2.19-4.22c.37 0 .69.08.96.26-.43.21-.86.54-1.25.97a9.33 9.33 0 0 0-2.11 4.42l-2.8.86c.6-2.58 2.74-6.43 5.2-6.5z" fill="var(--userLogoColor, #95BF47)" fill-rule="nonzero"></path><path d="M66.25 8.16c-.12-.02-2.47-.04-2.47-.04L61.61 6a.39.39 0 0 0-.27-.12V35.1l8.81-2.19s-3.6-24.3-3.61-24.48a.35.35 0 0 0-.3-.27z" fill="var(--userLogoColor, #5E8E3E)" fill-rule="nonzero"></path><path d="M56.46 12.69l-1.02 3.83s-1.13-.53-2.5-.43c-2 .12-2.01 1.37-2 1.7.12 1.72 4.62 2.09 4.87 6.1.2 3.16-1.68 5.31-4.38 5.49a6.59 6.59 0 0 1-5.02-1.7l.69-2.92s1.8 1.35 3.22 1.27a1.26 1.26 0 0 0 1.23-1.36c-.14-2.23-3.8-2.11-4.04-5.77-.2-3.09 1.83-6.21 6.3-6.5 1.77-.16 2.65.29 2.65.29z" fill="var(--userLogoColorAlt, #FFF)" fill-rule="nonzero"></path><path d="M82.1 20.86c-1.02-.55-1.55-1.02-1.55-1.66 0-.83.72-1.35 1.88-1.35 1.32 0 2.5.54 2.5.54l.93-2.85s-.86-.66-3.38-.66c-3.51 0-5.96 2.01-5.96 4.84 0 1.6 1.14 2.84 2.66 3.72 1.23.7 1.66 1.19 1.66 1.93 0 .76-.6 1.37-1.76 1.37-1.7 0-3.3-.88-3.3-.88l-1 2.85s1.49 1 3.97 1c3.62 0 6.22-1.78 6.22-4.98.02-1.74-1.3-2.97-2.88-3.87zm14.41-6.02c-1.77 0-3.18.84-4.26 2.13l-.05-.02 1.54-8.1H89.7l-3.9 20.58h4.02l1.35-7.03c.53-2.66 1.9-4.3 3.18-4.3.9 0 1.25.6 1.25 1.49 0 .54-.05 1.23-.17 1.77l-1.53 8.05h4.03l1.58-8.32c.18-.88.3-1.93.3-2.62 0-2.24-1.22-3.63-3.3-3.63zm12.41 0c-4.84 0-8.05 4.37-8.05 9.26 0 3.13 1.94 5.63 5.55 5.63 4.75 0 7.97-4.26 7.97-9.26-.02-2.88-1.72-5.63-5.47-5.63zm-2 11.8c-1.36 0-1.95-1.17-1.95-2.62 0-2.3 1.2-6.08 3.39-6.08 1.42 0 1.9 1.24 1.9 2.43 0 2.48-1.2 6.27-3.33 6.27zm17.75-11.8c-2.71 0-4.26 2.38-4.26 2.38h-.06l.24-2.17h-3.56a77.76 77.76 0 0 1-.82 5.34l-2.8 14.73h4.03l1.12-5.96h.07s.82.53 2.37.53c4.73 0 7.81-4.85 7.81-9.75.02-2.68-1.19-5.1-4.14-5.1zm-3.85 11.86c-1.05 0-1.66-.59-1.66-.59l.67-3.77c.46-2.5 1.77-4.18 3.18-4.18 1.23 0 1.6 1.13 1.6 2.23 0 2.6-1.54 6.3-3.79 6.3zm13.76-17.63a2.3 2.3 0 0 0-2.3 2.35c0 1.19.75 2.01 1.89 2.01h.06c1.25 0 2.34-.84 2.36-2.34 0-1.18-.78-2.02-2.01-2.02zm-5.63 20.36h4.03l2.73-14.26h-4.06l-2.7 14.26zm17-14.3h-2.8l.14-.66c.24-1.37 1.06-2.6 2.39-2.6.72 0 1.29.2 1.29.2l.78-3.15s-.7-.35-2.19-.35c-1.43 0-2.85.4-3.95 1.34-1.37 1.18-2.01 2.86-2.34 4.56l-.12.66h-1.88l-.58 3.03h1.87l-2.13 11.27h4.03l2.13-11.27h2.77l.6-3.03zm9.7.04s-2.53 6.35-3.66 9.8h-.06c-.08-1.1-1-9.8-1-9.8h-4.22l2.43 13.11c.05.3.02.47-.08.67a6.95 6.95 0 0 1-2.2 2.42c-.75.55-1.6.9-2.28 1.13l1.12 3.42c.82-.17 2.5-.84 3.94-2.19 1.84-1.72 3.54-4.37 5.28-7.99l4.92-10.57h-4.2z" fill="var(--userLogoColor, #000)" fill-rule="nonzero"></path></svg>
</div>

        
    </Col>
    <Col md={3} className="mt-5">
    
    <div className="icon">
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" viewBox="0 0 200 40" class="UserLogo variant-- "><title>Google logo</title><g fill="none" fill-rule="evenodd"><path fill="var(--userLogoColor, #EA4335)" fill-rule="nonzero" d="M92.6 21.65a8.28 8.28 0 0 1-8.41 8.38 8.28 8.28 0 0 1-8.4-8.38 8.25 8.25 0 0 1 8.4-8.38c4.63 0 8.4 3.52 8.4 8.38zm-3.69 0c0-3.02-2.19-5.08-4.72-5.08-2.54 0-4.73 2.06-4.73 5.08 0 2.98 2.19 5.07 4.73 5.07 2.53 0 4.72-2.1 4.72-5.07z"></path><path fill="var(--userLogoColor, #FBBC05)" fill-rule="nonzero" d="M110.73 21.65a8.28 8.28 0 0 1-8.41 8.38 8.28 8.28 0 0 1-8.4-8.38 8.26 8.26 0 0 1 8.4-8.38c4.63 0 8.4 3.52 8.4 8.38zm-3.68 0c0-3.02-2.2-5.08-4.73-5.08-2.54 0-4.73 2.06-4.73 5.08 0 2.98 2.2 5.07 4.73 5.07 2.54 0 4.73-2.1 4.73-5.07z"></path><path fill="var(--userLogoColor, #4285F4)" fill-rule="nonzero" d="M128.1 13.77v15.05c0 6.18-3.65 8.71-7.96 8.71a7.98 7.98 0 0 1-7.43-4.94l3.2-1.33a4.63 4.63 0 0 0 4.23 2.97c2.76 0 4.47-1.7 4.47-4.9v-1.21h-.13a5.7 5.7 0 0 1-4.41 1.9c-4.2 0-8.03-3.65-8.03-8.34 0-4.73 3.84-8.41 8.03-8.41 2 0 3.58.88 4.41 1.87h.13v-1.36h3.5zm-3.23 7.9c0-2.94-1.97-5.1-4.47-5.1-2.54 0-4.67 2.16-4.67 5.1 0 2.93 2.13 5.05 4.67 5.05 2.5 0 4.47-2.12 4.47-5.04z"></path><path fill="var(--userLogoColor, #34A853)" fill-rule="nonzero" d="M133.86 4.96V29.5h-3.59V4.96z"></path><path fill="var(--userLogoColor, #EA4335)" fill-rule="nonzero" d="M147.85 24.4l2.86 1.9a8.34 8.34 0 0 1-6.99 3.72 8.2 8.2 0 0 1-8.31-8.38c0-4.98 3.58-8.38 7.9-8.38 4.35 0 6.48 3.46 7.17 5.33l.38.96-11.2 4.63a4.26 4.26 0 0 0 4.06 2.54c1.88 0 3.18-.92 4.13-2.32zm-8.8-3.01l7.5-3.11c-.42-1.05-1.65-1.78-3.11-1.78a4.6 4.6 0 0 0-4.38 4.89z"></path><path fill="var(--userLogoColor, #4285F4)" fill-rule="nonzero" d="M62.2 19.47V15.9h11.98c.11.62.17 1.35.17 2.15 0 2.66-.73 5.96-3.08 8.31-2.28 2.38-5.2 3.65-9.07 3.65-7.17 0-13.2-5.84-13.2-13C49 9.83 55.03 4 62.2 4c3.97 0 6.8 1.56 8.92 3.59l-2.51 2.5a9.06 9.06 0 0 0-6.41-2.54 9.33 9.33 0 0 0-9.34 9.46c0 5.24 4.1 9.46 9.34 9.46a8.7 8.7 0 0 0 6.57-2.6c1-1.01 1.66-2.45 1.92-4.4h-8.5z"></path></g></svg>
</div>
    </Col>
    <Col md={3} className="mt-5">

    <div className="icon">

        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" viewBox="0 0 200 40" class="UserLogo variant-- "><title>Unicef logo</title><g fill="none" fill-rule="evenodd"><path fill="var(--userLogoColor, #1AABE1)" d="M140 29.5c1.86-.74 4.8-1.19 8.56-.18l.44.12-.42.17c-1.75.7-3.94.92-5.21.49a2.8 2.8 0 0 1-1.12-.76c-.6.06-1.2.24-1.76.5a10.9 10.9 0 0 1 3.2 2.63l.08.1-.09.1c-.09.09-.3.25-.44.3l-.1.03-.05-.08c-.78-.95-1.91-2.05-3.2-2.78-1.3.73-2.42 1.83-3.2 2.78l-.06.08-.1-.03a1.4 1.4 0 0 1-.44-.3l-.08-.1.07-.1a10.92 10.92 0 0 1 3.2-2.64 5.67 5.67 0 0 0-1.75-.5c-.36.35-.65.61-1.13.77-1.27.43-3.45.22-5.2-.5l-.42-.16.43-.12c3.84-1.03 6.83-.54 8.68.23zM48.93 14.74v9.08c0 2.66.61 4.61 3.41 4.61 1.2 0 2.83-.61 3.45-2.2.53-1.37.58-3.07.58-3.54v-7.95h2.93v15.34h-2.86v-2.26h-.07c-1.17 1.93-3.14 2.72-5.29 2.72-3.23 0-5.08-2.45-5.08-5.53V14.74h2.93zm56.15-.42c4.59.1 6.76 2.97 6.76 7.2v1.42h-10.82c-.22 2.67.88 5.44 3.84 5.44 2.27 0 3.4-.88 3.73-3.1h3.07c-.46 3.46-3.16 5.19-6.82 5.19-4.93 0-6.89-3.46-6.89-7.95 0-4.47 2.27-8.2 7.13-8.2zm-14.4 0c3.25 0 5.7 2.03 5.84 5.34h-2.9c-.15-1.91-1.07-3.24-3.15-3.24-2.78 0-3.85 2.39-3.85 5.98 0 3.58 1.07 5.98 3.85 5.98 1.92 0 3.12-1.25 3.27-3.43h2.9c-.24 3.43-2.8 5.52-6.2 5.52-4.92 0-6.88-3.46-6.88-7.95 0-4.47 2.26-8.2 7.13-8.2zm-20.8-.04c1.08 0 5.85.28 5.85 5.2v10.6H72.8v-9.65c0-2.54-1.08-3.91-3.54-3.91 0 0-1.6-.1-2.83 1.13-.43.42-1.23 1.1-1.23 4.09v8.34h-2.92V14.74h2.86V17h.06a5.36 5.36 0 0 1 4.68-2.72zm11.5.45v15.34h-2.93V14.73h2.92zm38.55-7.45c.7 0 1.38.18 2.08.3v2.4c-.49-.03-.98-.1-1.47-.1-1.64 0-2.6.43-2.5 2.1v2.79h3.55v2.01h-3.56v13.23h-2.9V16.78h-2.64v-2.01h2.64v-3.28c.1-3.34 2.63-4.21 4.8-4.21zm7.13 18.24l.32.05c1.18.2 4.52 2.06 5.03 2.82l.13.2-.23.03c-2.75.48-4.22-1.38-5.08-2.82l-.09-.14-.08-.14zm25.66 0l-.09.14-.08.14c-.87 1.44-2.34 3.3-5.09 2.82l-.23-.04.13-.19c.51-.76 3.85-2.63 5.03-2.82l.33-.05zm-21.44-.96l.27.13c.89.61 3.44 2.77 3.63 3.52l.04.17-.18.01c-2.78.24-3.45-1.9-3.71-3.54l-.03-.15-.02-.14zm17.21 0l-.02.14-.02.15c-.27 1.63-.94 3.78-3.72 3.54l-.17-.01.04-.17c.19-.75 2.74-2.9 3.63-3.52l.26-.13zM139.87 7c5.67 0 10.3 4.59 10.3 10.22 0 5.64-4.63 10.23-10.3 10.23-5.69 0-10.3-4.59-10.3-10.23 0-5.63 4.61-10.22 10.3-10.22zm-10.41 14.23l.17.24c.65.84 1.47 3.6 1.5 4.7l-.01.21-.04.26-.2-.12a3.66 3.66 0 0 1-1.8-3.14c-.01-.6.08-1.22.29-1.87l.04-.14.05-.14zm20.86 0l.04.14.05.14c.2.65.3 1.27.28 1.87a3.68 3.68 0 0 1-1.8 3.14l-.2.12-.03-.26-.02-.2c.03-1.1.86-3.87 1.5-4.71l.18-.24zm4.33-.32l-.04.18-.04.17c-.3 1.47-1.7 3.84-3.86 4.53l-.3.1.11-.3c.4-1.09 2.49-3.64 3.83-4.48l.3-.2zm-29.52 0l.3.2c1.34.84 3.42 3.4 3.83 4.49l.1.29-.3-.1c-2.15-.69-3.55-3.06-3.86-4.53l-.04-.17-.03-.17zm11.04-12.79A9.76 9.76 0 0 0 130 17a9.2 9.2 0 0 1 1.6-1.1c.4-.2.75-.64.63-1.12-.12-.48-.7-2.32.46-3.57 1.17-1.26 2.97-1.38 4.77.1 1.87 1.54.8 3.02.53 3.37-.17.22-.34.55-.22.85.23.55-.15.38-.29.6-.05.06.06.24-.04.33-.1.08-.13.05-.17.12-.04.07.06.2-.04.27-.09.05-.2-.05-.35.14-.15.18-.24.42-.81.43-.48.02-1.35-.5-1.67-.02a.45.45 0 0 0-.04.45c.18.47.53 3.2.5 3.38.38.67 1.63.37 2.05.58.05.02.18.03.32-.09.13-.12.54-.45.86-.42.12.01.34-.02.2.26-.06.1.08.11.18.07.1-.05.87-.37.54.76-.32 1.12-1.14 1.05-1.72.84a.58.58 0 0 0-.46 0c-.21.07-1.76.31-2.07.3-.32-.01-.88.01-1.26-.36-.23.33-.46.81-.32 1.26.32.3.65.56 1.01.81.66.17 1.5.09 2.13-.14.17-.06 2.18-.96 3.31-1 .92-.04.95-.84.77-1.27a3.9 3.9 0 0 1-.2-1.24c-.01-.34-.1-.81-.76-1.3-.67-.5-1.07-.8-1.07-1.24 0-.24.15-.55.28-.62.13-.08.17-.24.15-.34 0-.1-.12-.46.29-.46.07 0 .2-.07.2-.22 0-.14-.13-.62.2-.53.08.03.23-.08.23-.24 0-.16-.6-.9.35-.87.65.02 1.4-.26 1.7-.64 1.5-1.87 3.81-2.24 6-.16a4.52 4.52 0 0 1 .29 6.23c-1.17 1.19-2.12 1.45-3.02 1.45-.16 0-.44-.17-.5.22-.08.38-.05 1.41 1.31 2.16a9.77 9.77 0 0 0 2.3-13.17c-.55.37-1.13.7-1.72.99l.23.54.07.15-.56-.24-.12-.27-.25.1s-.34-.1-.79-.14c0 0 .56-.2.86-.34a10.4 10.4 0 0 0-1.21-1.88c-.6.33-1.21.59-1.85.78.2.51.59 1.73.59 1.73l-.4.12s-.4-1.22-.6-1.73a10 10 0 0 1-2.31.32v1.95l.28-.02a24.9 24.9 0 0 0 1.78-.15l.3-.03-.55.49h-.03c-.63.05-1.15.1-1.78.13v.7h-.43v-3.07c-.21 0-.78-.02-.96-.04h-.04l-.02-.04-.17-.28-.09-.13.16.02c.26.02.87.05 1.12.05V9.9c-.44-.02-.87-.1-1.28-.23-.19.3-.68 1.22-.68 1.22l-.15-.11-.2-.13.63-1.14a4.64 4.64 0 0 1-.94-.55c-.37.27-1.16.94-1.16.94l-.24-.07a2.74 2.74 0 0 0-.24-.05s.9-.8 1.3-1.1a4.73 4.73 0 0 1-.52-.55zm14.89 9.89l.08.13.1.13c.67 1 1.01 2.01.99 2.95-.02.69-.24 1.36-.66 1.97l-.14.2-.12-.21c-.3-.54-.52-2.3-.49-3.7.01-.48.06-.89.15-1.17l.09-.3zm-22.34 0l.09.3c.08.28.13.69.14 1.18.04 1.39-.2 3.15-.48 3.69l-.12.22-.14-.2a3.64 3.64 0 0 1-.67-1.98 5.14 5.14 0 0 1 1-2.95l.09-.13.1-.13zm-3.9-1.67l.24.29c.86 1.03 2 3.92 2.03 4.9v.28l-.23-.16c-2.09-1.35-2.14-3.9-2.07-4.94l.02-.18.01-.2zm30.13 0l.02.18.01.2c.08 1.03.02 3.58-2.06 4.93l-.25.16.02-.29c.03-.97 1.17-3.86 2.02-4.89l.24-.3zm-50.09.07c-2.41 0-3.84 2.03-3.84 4.53h7.76c.06-2.55-1.1-4.53-3.92-4.53zm23.82-1.4l.02.32c.04 1.1-.8 3.44-1.44 4.33l-.17.24-.1-.27a3.3 3.3 0 0 1-.18-.86c-.12-1.74 1.22-3.15 1.63-3.54l.12-.11.12-.12zm22.41 0l.12.1.13.12c.4.39 1.74 1.8 1.63 3.54-.02.27-.08.56-.19.86l-.09.27-.17-.23a9.9 9.9 0 0 1-1.44-4.34l.01-.33zm-25.2-2.82l.15.36c.43 1.08.62 3.5.48 4.65l-.14.65-.1-.13-.1-.13c-.89-1.07-.91-2.5-.78-3.52.1-.72.27-1.25.36-1.51l.07-.19.07-.18zm27.99 0l.07.18.06.19c.1.26.27.8.37 1.51.13 1.02.1 2.45-.79 3.52l-.1.13-.1.13-.13-.65c-.15-1.15.04-3.57.47-4.65l.15-.36zm-3.7-.42l.17.1.17.11c1.58 1 2.31 2.2 2.23 3.66l-.02.33-.23-.2a9.52 9.52 0 0 1-2.21-3.62l-.11-.38zm-20.5.05l-.12.38a9.56 9.56 0 0 1-2.28 3.58l-.23.2-.02-.34c-.05-1.46.7-2.64 2.3-3.61l.18-.1.17-.1zm-.89-2.25l-.07.43a6.3 6.3 0 0 1-1.74 3.56l-.2.18-.06-.3-.02-.11c-.21-1.54 1.17-2.94 1.77-3.47l.16-.14.16-.15zm22.2 0l.15.15.16.14c.6.53 1.99 1.93 1.77 3.47l-.02.1-.07.31-.2-.18a6.32 6.32 0 0 1-1.73-3.56l-.07-.43zm-4.78.14c-.37.31-.77.6-1.2.85.48.6.9 1.24 1.23 1.91.58-.28 1.13-.6 1.66-.95a9.89 9.89 0 0 0-1.69-1.81zm-4.83-.05a4.8 4.8 0 0 1-1.3.23v1.69a9.5 9.5 0 0 0 2.14-.3c-.25-.56-.53-1.1-.84-1.62zm1.33-.7c-.29.21-.6.4-.93.54.31.54.6 1.1.85 1.67.6-.18 1.18-.43 1.74-.72-.5-.56-1.05-1.06-1.66-1.5zM81.65 8v3.15h-3.48V8h3.48zm61.92.13c-.16.2-.33.38-.52.55.62.46 1.19.98 1.7 1.56a10 10 0 0 0 1.13-.8 9.76 9.76 0 0 0-2.31-1.31zm-3.5-.3v1.64c.37-.02.73-.08 1.08-.18-.34-.51-.7-1-1.07-1.45zm-.42.03c-.38.46-.73.93-1.05 1.43.34.1.7.16 1.05.18zm-.47-.09c-.62.25-1.22.57-1.77.93.24.17.5.32.79.44.3-.48.63-.93.98-1.37zm1.38 0c.36.44.7.9 1 1.37.27-.12.53-.26.79-.44-.57-.37-1.17-.68-1.8-.93zm.4-.29c.6.27 1.19.58 1.74.95.16-.14.3-.3.45-.46-.7-.24-1.43-.4-2.18-.49zm-2.17 0c-.75.08-1.5.24-2.2.49.14.16.3.32.46.46.55-.37 1.13-.69 1.74-.95z"></path></g></svg>

</div>

    </Col>
  </Row>
</Container>















</div>


        </div>
    )
}
