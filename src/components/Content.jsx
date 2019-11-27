import React from 'react';
import Profile from './Profile';

const Content = () => {
    return (
        <section className='content'>
        <header className='content__header'>
          <img className='content__img' src='https://images.unsplash.com/photo-1574749205529-9fbef2333941?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=813&q=80' />
        </header>  
        <Profile />
      </section>
    );
};

export default Content;