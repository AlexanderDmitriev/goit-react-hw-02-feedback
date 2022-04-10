import styled from 'styled-components';
import {theme} from './theme';

export const CustomButton =  styled.h2`
    font-weight: 700;
    font-size: ${theme.spacing(4)};
    line-height: 1.9;
    color: ${theme.colors.white};
    letter-spacing: 0.06em;
    background-color: ${theme.colors.buttonColor};
    cursor: pointer;
    border-radius: ${theme.spacing(1)};
    padding: ${theme.spacing(3)} ${theme.spacing(8)};
    min-width: ${theme.spacing(10)};
    text-align: center;
`;