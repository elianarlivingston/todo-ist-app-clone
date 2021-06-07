import styled from 'styled-components'
import { ButtonProps } from './types'

const sizes = {
    sm: '14px',
    md: '16px',
    lg: '20px'
}

const colors = {
     primary: {
         bg: '#db4c3f',
         active: '#E26F65',
         text: '#fff'
     },
     secondary: {
         bg: '#F3F3F3',
         active: '#dddddd',
         text: '#202020'
     }
}

export const ButtonStyle = styled.button`
    border: none;
    border-radius: 3px;
    padding: ${(props: ButtonProps) => props.onlyIcon ? '.5em' : '.5em 1em'};
    font-size: ${(props: ButtonProps) => sizes[props.size || 'sm']};
    font-weight: bold;
    background-color: ${(props: ButtonProps) => (
        colors[props.color || 'primary'].bg ?? colors.primary.bg
    )};
    color: ${(props: ButtonProps) => (
        colors[props.color || 'primary'].text ?? colors.primary.text
    )};
    transition: all .2 ease-in-out;

    &:hover {
        background-color: ${(props: ButtonProps) => (
            colors[props.color || 'primary'].active ?? colors.primary.active
        )};
        transition: all .2 ease-in-out;
    }
`