import styled from 'styled-components'
// import { colors } from '../config/colors'

// type Color = 30 | 31| 32 | 33| 34| 35| 36| 37| 38| 39| 40| 41| 42| 43| 44| 45| 46| 47| 48| 49

export const List = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-left: 1.5rem;
`

export const ListItem = styled.li`
    margin: 0;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    & a {
        flex-grow: 1;
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`

export const ListItemDecoration = styled.span`
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ color: Color }): string => {
        return 'gray'
    } };
`

export const MenuStyle = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    width: 200px;
    height: max-content;
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: #ffffff;
    border-radius: 4px;
    border: 1px solid #c4c4c4;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    & > li:not(:last-child) {
        border-bottom: 1px solid #c4c4c4;
    }
`