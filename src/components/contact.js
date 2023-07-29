import React, { useState } from "react";
import styled from "styled-components";
import "@fontsource/zilla-slab";
import { Field, Formik, ErrorMessage, Form } from 'formik';
import axios from "axios";
import { devices } from "./responsive";

// Formulaire contact
const Input = styled(Field)`
background: rgba(255, 255, 255, 0.5);
border-radius: 20px;
font-family: Zilla Slab;
color: white;
font-size : 16px;
border:none;
margin-bottom : 10px;
&:focus {
outline:none;
box-shadow: inset 0 0 10px rgba(246, 205, 139, 0.5);
};
@media${devices.mobileS}{
  width:300px;
  height: 66px;
};
@media${devices.mobileM}{
  width:330px;
  height: 66px;
};

@media${devices.mobileL}{
  width:417px;
  height: 66px;
};

@media${devices.tablet}{
  width:417px;
  height: 66px;
};

@media${devices.laptop}{
  width:417px;
  height: 66px; 
};

@media${devices.laptopL}{
  width:417px;
  height: 66px;
};
@media${devices.desktop}{
  width:417px;
  height: 66px;
}`

const Label = styled.label`
font-family: Zilla Slab;
color: white;
margin-bottom:10px;
font-weight:bold
`

const FormWrapp = styled(Form)`
display:flex;
justify-content : end;`

const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center`


//border-box qui permet de définir les limites du composant TextArea (qui s'agrandissait en ajoutant du padding)
const TextArea = styled.textarea`

background: rgba(255, 255, 255, 0.5);
border-radius: 20px;
font-family: Zilla Slab;
color: white;
font-size : 16px;
border:none;
margin-bottom:10px;
box-sizing: border-box;
padding:10px;
&:focus {
    outline:none;
    box-shadow: inset 0 0 10px rgba(246, 205, 139, 0.5);
    };
    @media${devices.mobileS}{
      width:300px;
      height: 66px;
    };
    @media${devices.mobileM}{
      width:330px;
      height: 66px;
    };
    
    @media${devices.mobileL}{
      width:417px;
      height: 66px;
    };
    
    @media${devices.tablet}{
      width:417px;
      height: 66px;
    };
    
    @media${devices.laptop}{
      width:417px;
      height: 66px; 
    };
    
    @media${devices.laptopL}{
      width:417px;
      height: 66px;
    };
    @media${devices.desktop}{
      width:417px;
      height: 66px;
    }`


//Bouton de validation
const ButtonBase = styled.button`
    border-radius: 20px;
    cursor: pointer;
    background : transparent;
    font-family: Zilla Slab;
    color: #FFFEF2;
    text-align:center;
    font-size :32px;
    &:hover {
        background-color: #F6CD8B
    
        ;
      }
    &:disabled{
        background:  #fff;
        color: #ccc;
        cursor: no-drop
    };
    @media${devices.mobileS}{
      width:300px;
      height: 100px;
      border: 8px solid #F6CD8B;
    };
    @media${devices.mobileM}{
      width: 330px;
    height :100px;
    border: 10px solid #F6CD8B;
    };
    
    @media${devices.mobileL}{
      width: 417px;
    height :100px;
    border: 10px solid #F6CD8B;
    };
    
    @media${devices.tablet}{
      width: 417px;
    height :100px;
    border: 10px solid #F6CD8B;
    };
    
    @media${devices.laptop}{
      width: 417px;
      height :100px;
      border: 10px solid #F6CD8B;
    };
    
    @media${devices.laptopL}{
      width: 417px;
      height :100px;
      border: 10px solid #F6CD8B;
    };
    @media${devices.desktop}{
      width: 417px;
      height :100px;
      border: 10px solid #F6CD8B;
    }
    `

const Layer = styled.div`
    display:flex;
    justify-content : center;
    `

const ContactButton = (props) => {
  return (
    <Layer><ButtonBase>{props.children}</ButtonBase></Layer>
  )
}

const ContactForm = (props) => {


  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [serverState, setServerState] = useState({
  //   submitting: false,
  //   status: null
  // });
  // const handleServerResponse = (ok, msg, form) => {
  //   setServerState({
  //     submitting: false,
  //     status: { ok, msg }
  //   });
  //   if (ok) {
  //     form.reset();
  //   }
  // };
  const handleOnSubmit = (values) => {
    // e.preventDefault();

    const form = values;

    axios({
      method: "post",
      url: "https://getform.io/f/2987863d-1799-4003-a9af-015b367fa510",
      data: form

    })

    setIsSubmitted(true);
    form.reset()
    // .then(r => {
    //   handleServerResponse(true, "Thanks!", form);
    // })
    // .catch(r => {
    //   handleServerResponse(false, r.response.data.error, form);
    // })
  };
  // function sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));

  return (
    <Formik

      initialValues={{
        email: '', name: '', fname: '', message: ''
      }}
      validate={values => {
        const errors = {};
        if (!values.fname) {
          errors.fname = <span style={{ color: "red" }}>Required</span>;
        } else if (values.fname.length > 15) {
          errors.fname = 'Must be 15 characters or less';
        }

        if (!values.name) {
          errors.name = <span style={{ color: "red" }}>Required</span>;
        } else if (values.name.length > 20) {
          errors.name = 'Must be 20 characters or less';
        }

        if (!values.email) {
          errors.email = <span style={{ color: "red" }}>Required</span>;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if (!values.message) {
          errors.message = <span style={{ color: "red" }}>Required</span>
        }

        return errors;
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
          handleOnSubmit(values);
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <FormWrapp data-aos={props.data} data-aos-delay={props.delay} data-aos-easing={props.easing} data-aos-duration={props.duration}>

          <Container>
            <Label htmlFor="name">Name</Label>
            <Input as={Input} name="name" id="name"></Input>
            {/* {touched.name && errors.name ? (
         <div>{errors.name}</div>
       ) : null} */}
            <ErrorMessage name="name"></ErrorMessage>
            <Label htmlFor="fname">First Name</Label>
            <Input as={Input} name="fname" id="fname"></Input>
            {/* {touched.fname && errors.fname ? (
         <div>{errors.fname}</div>
       ) : null} */}
            <ErrorMessage name="fname"></ErrorMessage>
            <Label htmlFor="email">Email</Label>
            <Input as={Input} type="email" name="email" id="email"></Input>
            {/* {touched.email && errors.email ? (
         <div>{errors.email}</div>
       ) : null}  */}
            <ErrorMessage name="email"></ErrorMessage>
            <Label htmlFor="message">Message</Label>
            <Field as={TextArea} name="message" id="messqge"></Field>
            {/* {touched.message && errors.message ? (
         <div>{errors.message}</div>
       ) : null} */}
            <ErrorMessage name="message"></ErrorMessage>
            {isSubmitted ? <div style={{ color: "green" }}>Form submitted ! </div> : null}
            <ContactButton type="submit">Send</ContactButton>
          </Container>
        </FormWrapp>
      )}
    </Formik>
  )
}

export default ContactForm;