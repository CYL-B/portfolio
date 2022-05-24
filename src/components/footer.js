import styled from 'styled-components';
import React from 'react';
import "@fontsource/zilla-slab";
import {TextWrapper} from './text'

const Wrapper = styled.div`
width:100%;
height:50px;
margin:50px 0px 5px 0px;
background:transparent;

`



const Footer =() =>{

    return(
        <Wrapper><TextWrapper align='Centre'>(c)Camille Benhammadi</TextWrapper></Wrapper>
    )
}

export default Footer;