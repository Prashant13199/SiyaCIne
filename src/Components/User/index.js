import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2';

export default function User({ user }) {
  return (
    <Grid xs={2} sm={4} md={4} key={user.uid}>
      <Link to={`/user/${user.uid}`} style={{ textDecoration: 'none' }}>
        <div className='User'>
          <img className='user_image' src={user ? user.photo : `https://api.dicebear.com/6.x/thumbs/png?seed=Spooky`} />
          <div className='user_back'>
            <div className='user_username'>
              {user.username.length>15 ? user.username.substring(0,15).concat('...') : user.username}
            </div>
          </div>
        </div>
      </Link>
    </Grid>
  )
}
