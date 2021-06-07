import { useEffect } from 'react'
import { List, ListItem, ListItemDecoration } from '../../styles/Menu'
import { useLabel } from '../../hooks'
import { Label } from '../../types/Label'
import { Menu } from '../../components'

const ListLabels = () => {
    const { labels, getAllLabel } = useLabel()

    useEffect(() => {
        getAllLabel()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <List>
            {
                (labels && labels.length > 0) && 
                labels.map((label: Label) => (
                    <ListItem key={label.id}>
                            <ListItemDecoration color={`${label.color}`}></ListItemDecoration>
                            <span>{ label.name }</span>
                            <Menu
                                activator={<i className="fas fa-ellipsis-h"></i>}
                            >
                            </Menu>
                    </ListItem>
                ))
            }
        </List>
    )
}

export default ListLabels