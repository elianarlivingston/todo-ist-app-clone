import styled from 'styled-components'

export const AccordionWraper = styled.div`
`

export const AccordionHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;

    & h3 {
        margin: 0;
        padding: 0;
        font-size: 1rem;
        font-weight: 400;
        flex-grow: 1;
    }
`