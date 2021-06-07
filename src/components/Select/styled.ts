import styled from 'styled-components'

export const SelectWraper = styled.div`
    position: relative;
`

export const SelectSelected = styled.button`
    border-radius: 4px;
    border: 1px solid #c4c4c4;
    padding: .5em 1em;
    background-color: #ffffff;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    text-transform: capitalize;
`

export const SelectDecoration = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
`

export const SelectList = styled.ul`
    width: 100%;
    background-color: #ffffff;
    height: 140px;
    overflow-y: auto;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 32px;
`
export const SelectListOption = styled.li`
    margin: 0;
    padding: .5em 1em;
    display: flex;
    gap: 1rem;
`