import styled from 'styled-components';
import {theme} from './theme';

export const Title =  styled.h2`
    font-family: Raleway, sans-serif;
    font-weight: 700;
    font-size: ${theme.spacing(5)};
    line-height: 1.2;
    text-align: center;
    color: ${theme.colors.textColor};
`;

export const Container =  styled.div`
    box-sizing: content-box;
    box-shadow: 5px 5px 4px 1px rgb(0 0 0 / 30%);
    width: ${theme.spacing(120)};
    margin: 0 auto;
    margin-top: ${theme.spacing(5)};
    padding:${theme.spacing(3)};
`;

