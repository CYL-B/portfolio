import styled from 'styled-components';
import React from 'react';
import "@fontsource/zilla-slab";
import {TitleWrapper} from './text'

const Wrapper = styled.div`
width:100%;
height:50px;
margin:50px 0px 5px 0px;
background:transparent;

`



const Footer =() =>{

    return(
        <Wrapper><TitleWrapper align='centre'>(c)Camille Benhammadi</TitleWrapper></Wrapper>
    )
}

export default Footer;