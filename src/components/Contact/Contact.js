import React from 'react';
import Button from '@material-ui/core/Button';
import './Contact.css';
import { Form, Field } from "react-final-form";
import banner from './banner.jpg';








const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, undefined, 2));
};

const required = value => (value ? undefined : "*Required");
const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);



const Contact= () => (

<>
            <div className='div-background-images  'style={{"backgroundImage": "url(" + banner + ") ",  }}>

            <article className="bg-black-60 our-work-background-cover ">

                        <section  >
                          <h1  className='white tl  our-work-header header-on-mobile header-margin-top-on-mobile-fix' style={{'fontSize':'4.6rem','marginLeft':'8.8%', 'marginRight':'8.8%' }} >
                          GET IN TOUCH
                          </h1>

                          
                          <p className='white tl header-paragraph-1-on-mobile marginTop-on-mobile-fix' style={{'fontSize':'1.0rem','marginLeft':'8.8%', 'marginRight':'8.8%','marginTop':'-4vh' }} >
                          Whether you are stopping by to say ‘hi’ or to talk about your next website, get in touch, we can’t wait to hear from you.
                          </p>
                    
                        </section>
                    

                                      
            </article>  

          </div> 

        <main>
            <div className='pv4 flex contact-main-flex' style={{'width':'82.4%' ,'marginLeft':'8.8%', 'marginRight':'8.8%'}}>

                  <article className='contact-getintouch-width' style={{'width':'40%'}}>
                                
                  <h2 className="  mb3 mt4 tl " style={{'fontSize':'1.8rem' }}>
                    CONTACT US

                  </h2>
                  <h2 className="  mt4   mb4 " style={{'color':'#3F1717', 'fontSize':'1.4rem'}}>
                    
                    Telephone <i className="fas fa-phone fa-1x ml3 blue"></i>
                  </h2>
                  
                  <a href="tel:0789563415" className='instead-of-gray no-underline ' style={{ 'fontSize':'1.0rem'}}> (+254) 0789563415</a><br/><br/>

                  <a href="tel:0721490923" className='instead-of-gray no-underline' style={{ 'fontSize':'1.0rem'}}>(+254) 0721490923</a><br/>


                  <div style={{'borderTop':'1px solid #B8B8B8 '}}  className='mv4  mr5 linez'/>




                  <h2 className="  mt0   mb4 " style={{'color':'#3F1717', 'fontSize':'1.4rem'}}>
                    
                    WhatsApp <i className=" fab fa-whatsapp-square fa-1x ml3 green "></i>
                  </h2>
                  
                  <a href="https://wa.me/254789563415" target="blank" rel="noreferrer" className='no-underline instead-of-gray'  style={{ 'fontSize':'1.0rem'}}>	(+254) 0789563415  </a>


                  <div style={{'borderTop':'1px solid #B8B8B8 '}}  className='mv4  mr5 linez'/>




                  <h2 className="  mt0  mb4  " style={{'color':'#3F1717',  'fontSize':'1.4rem'}}>
                    Email <i className="fa fa-envelope fa-1x ml3 blue" aria-hidden="true"></i>
                    </h2>
                    <p className='pv3 email-us'>
                    <a href="mailto:sales@flexdevske.co.ke"  className=' instead-of-gray no-underline dim '  style={{"wordWrap": "breakWord", 'fontSize':'1.0rem'}} >sales@flexdevske.co.ke </a>							
                  </p>

                  <a href="mailto:flexdevske@gmail.com"  className=' instead-of-gray no-underline dim  '  style={{"wordWrap": "breakWord", 'fontSize':'1.0rem'}} >flexdevske@gmail.com </a>		
                    
                  


                  <div style={{'borderTop':'1px solid #B8B8B8 '}}  className='mv4  mr5 linez'/>




                  <h2 className="f4 mid-instead-of-gray lh-title mt0  fw9 mb4" style={{'color':'#3F1717', 'fontSize':'1.4rem'}}>
                    Address <i className="fa fa-map-marker fa-1x ml3 red" aria-hidden="true"></i>
                  </h2>
                  <p className="f4   instead-of-gray  "  style={{"wordWrap": "breakWord", 'fontSize':'1.0rem'}}> 
                  P.O BOX 26560 00504, </p><br/>
                  <p className="f4   instead-of-gray  "  style={{"wordWrap": "breakWord", 'fontSize':'1.0rem'}}> Nairobi, Kenya. </p>
                  <div style={{'borderTop':'1px solid #B8B8B8 '}}  className='mv4  mr5 linez'/>
                    
                  
                  

                </article>



                <div className='contact-getfreequote-width' style={{'width':'60%'}} >
                <h2  className=" mb3 mt4 tl " style={{'fontSize':'1.9rem', }}>GET IN TOUCH NOW !</h2>
                  <article className="br2 ba  b--black-10 mv4    getfreequote-main" style={{'backgroundColor':'#FBFBFB'}} >
                  <main className="pa4 black-80  ">
                      <Form
                    
                    onSubmit={onSubmit}
                    render={({ handleSubmit, reset, submitting, pristine, values }) => (
                      <form onSubmit={handleSubmit}>
                    
                        <Field name="name" validate={required}  >
                          {({ input, meta }) => (
                            <div className="mt3 flex input-boxes-flex-on-mobile ">

                              <label className="w-30 db  select-options-property-font" 
                              htmlFor="yourName"
                              style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>
                              Name :
                              </label>

                              <input {...input} 
                              type="text" 
                              
                              className="input-box-styling instead-of-gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
                              style={{ 'fontSize':'1.0rem'}}
                              />
                              {meta.error && meta.touched && <span className='meta-era'>{meta.error}</span>}
                            </div>
                          )}
                        </Field>

                        
                        <Field name="email" validate={required}  >
                          {({ input, meta }) => (
                            <div className="mt3 flex input-boxes-flex-on-mobile">

                              <label className="w-30 db  select-options-property-font"
                              htmlFor="email-address" 
                              style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>
                              Email :
                              </label>

                              <input {...input} 
                              type="text" 
                              
                              className=" input-box-styling  instead-of-gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
                              />
                              {meta.error && meta.touched && <span className='meta-era'>{meta.error}</span>}
                            </div>
                          )}
                        </Field>
                        




                      <Field  name="phone" validate={composeValidators(required, mustBeNumber)}
                      >

                        {({ input, meta }) => (
                          <div  className="mv3 flex input-boxes-flex-on-mobile">

                            <label
                            className="w-30 db  select-options-property-font " 
                            htmlFor="phone"
                            style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>
                            Phone No. :
                            </label>
                            <input {...input}
                            type="text" 
                            
                            className="input-box-styling  instead-of-gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70 " 
                            />
                            {meta.error && meta.touched && <span className='meta-era'>{meta.error}</span>}
                          </div>
                        )}
                      </Field>


                    
                      <Field name="message" validate={required}>
                        {({ input, meta }) => (
                          <div  className="mt4" >

                            <label className="db   f4 pb3 select-options-property-font"
                            htmlFor="message" 
                            style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>
                            
                            </label>
                          <textarea {...input}
                            type="text"
                            placeholder="Your message"
                            className="input-box-styling tl  br2 shadow-5  instead-of-gray  pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            rows="15" 
                            cols="50" />
                            {meta.error && meta.touched && <span className='meta-era'>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                      
                      <p className=' red pv4 dim  fw8' style={{ 'fontSize':'1.0rem'}}>* Fill in all details before sending.</p>
                <div className="buttons">
                  <Button variant="contained"  
                  type="submit"
                  disabled={submitting}
                  className='button-links-on-mobile ' 
                  style={{'backgroundColor':'black', 'color':'white', 'fontSize':'1.0rem', 'padding':'10px 30px 10px 30px', }} 
                  >
                    SEND
                  </Button>
                  
                </div>
                
              </form>
            )}
          />
            </main>
          </article>

        </div>  
        </div>
        
        </main>
 
</>   
 
);

export default Contact;
