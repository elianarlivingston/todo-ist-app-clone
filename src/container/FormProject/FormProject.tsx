import { FC, useState } from 'react'
import { FormProps } from './types'
import { ButtonGroup, Button, Select } from '../../components'
import { Control, ControlWrap, ControlMessage, Form } from '../../styles/Form'

const FormProject: FC<FormProps> = (props) => {
    const { toggle, color, setColor, name, setName, favorite, setFavorite, handlerSubmit } = props
    const [message, setMessage] = useState('')

    const handlerChange = (event: any) => {
        const input = event.target

        setName(input.value)

        if(!input.checkValidity()) {
            setMessage(input.validationMessage)
        } else {
            setMessage('')
        }
    }

    return (
        <Form onSubmit={handlerSubmit}>
            <div>
                <p>
                    <ControlWrap>
                        <span>Nombre</span>
                        <Control 
                            type="text" 
                            placeholder="Nombre del projecto" 
                            minLength={3} 
                            required={true} 
                            name="name" 
                            value={name}
                            onChange={handlerChange}
                        />
                        { message && <ControlMessage>{message}</ControlMessage>}
                    </ControlWrap>
                </p>

                <Select
                    selected={color}
                    setSelected={setColor}
                ></Select>

                <p>
                    <ControlWrap>
                        <span>Favorito</span>
                        <input 
                            type="checkbox" 
                            required={false}  
                            checked={favorite}
                            onChange={(e: any) => setFavorite(e.target.checked)}
                        />
                    </ControlWrap>
                </p>
            </div>

            <ButtonGroup justify="right" >
                <Button color="secondary" type="button" onClick={() => toggle(false)} >
                    Cancelar
                </Button>
                <Button color="primary" type="submit">
                    Crear
                </Button>
            </ButtonGroup>
        </Form>
    )
}

export default FormProject