import styled from 'styled-components'

export const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ControlWrap = styled.label`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: .25rem 0;
`

export const Control = styled.input`
    padding: .5rem 1rem;
`

export const ControlMessage = styled.span`
    display: flex;
    color: tomato;
    font-size: 14px;
`