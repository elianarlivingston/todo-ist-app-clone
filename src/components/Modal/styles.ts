import styled from 'styled-components'

export const ModalWraper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem 2rem;
`

export const ModalContainer = styled.aside`
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    padding: 1rem;
    width: 100%;
    max-width: 320px;
    min-height: 300px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    & > form {
        flex-grow: 1;
    }
`