import React from 'react';

const Profile = () => {
    return (
        <article className='content__profile profile'>
          <section className='profile__card'>
            <img className='profile__ava' src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'/>
            <div className='profile__info'>
              <h3 className='profile__full-name'>Andrii Lukich</h3>
              <p className='profile__data'>Date of birth: 15 December</p>
              <p className='profile__data'>City: Odessa</p>
              <p className='profile__data'>Education: Master of Banking</p>
              <p className='profile__data'>Web site: https://github.com/riiand</p>
            </div>
          </section>
        </article>
    );
};

export default Profile;