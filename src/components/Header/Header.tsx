import { FC } from 'react'
import { HeaderProps } from './types'
import { HeaderStyle } from './styled'
import { Button, ButtonGroup } from '../index'
import { Link } from 'react-router-dom' 

const Header: FC<HeaderProps> = (props) => {
    const { toggle, on } = props

    return (
        <HeaderStyle>
            <ButtonGroup justify="left">
                <Button 
                    onClick={toggle} 
                    aria-haspopup={on} 
                    aria-controls="sidebar" 
                    id="button-sidebar" 
                    aria-expanded={on}
                >
                    <i className={on ? 'fas fa-times' : 'fas fa-bars'}></i>
                </Button>
                <Link to="/">
                    <Button>
                        <i className="fas fa-home"></i>
                    </Button>
                </Link>
            </ButtonGroup>

            <Button>
                <i className="fas fa-plus"></i>
            </Button>
        </HeaderStyle>
    )
}

export default Header