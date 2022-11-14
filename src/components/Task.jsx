import React from 'react'
import { ListItem, Checkbox, ListItemAvatar, ListItemButton, ListItemText, Avatar, IconButton } from '@mui/material'
import Delete from '@mui/icons-material/Delete';
import useTodos from '../services/useTodos'
import moment from 'moment'

export const Task = ({ id, description, completed, date }) => {

  const [tasks, insertTodo, deleteTodo, toggleCompleted] = useTodos()


  const labelId = `checkbox-list-secondary-label-${id}`;

  return (
    <ListItem
      key={id}
      secondaryAction={
        <>
          <Checkbox
            edge="end"
            onChange={() => { toggleCompleted(id, completed) }}
            checked={completed}
            inputProps={{ 'aria-labelledby': labelId }}
          />
          <IconButton onClick={() => { deleteTodo(id) }} edge="end" aria-label="comments">
            <Delete />
          </IconButton>
        </>

      }
      disablePadding
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar
            alt={`Avatar n°${1}`}
            src={`/static/images/avatar/${1}.jpg`}
          />
        </ListItemAvatar>
        <ListItemText
          style={completed ? { "textDecoration": "line-through" } : { "textDecoration": "none" }}
          primary={description}
          secondary={moment.unix(date).format('lll')} />
      </ListItemButton>
    </ListItem>
  )
}
