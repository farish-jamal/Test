import React from 'react'
import Info from './Info'

function ContentLeft() {
  return (
    <div className='content__left'>
        <div className="description">
            <div className="description__img">
                <img src="https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png" alt="Logo__img" />
            </div>
            <div className="description__info">
                <p className='name'>Antriksh Chaudhary</p>
                <p className="profession">Atlete</p>
                <div className="subcategory">
                  <p className="username">@antriksh07</p>
                  <a href='' className="edit">Edit</a>
                </div>
            </div>
        </div>
        <div className="profile__numbers">
            <div className="profile__info">
                <p className='numbers'>67</p>
                <p>Followers</p>
            </div>
            <div className="profile__info">
                <p className='numbers'>65</p>
                <p>Following</p>
            </div>
            <div className="profile__info">
                <p className='numbers'>10</p>
                <p>Posts</p>
            </div>
        </div>
        <div className="about__info">
            <Info heading="About" description="Deserunt unde quisquam quia autem, non tempora quibusdam quam mollitia magnam tenetur."/>
            <Info heading="Exprience" description="Deserunt unde quisquam quia autem, non tempora quibusdam quam mollitia magnam tenetur."/>
            <Info heading="Skills" description="Deserunt unde quisquam quia autem, non tempora quibusdam quam mollitia magnam tenetur."/>
            <Info heading="Recognition" description="Deserunt unde quisquam quia autem, non tempora quibusdam quam mollitia magnam tenetur."/>
            <Info heading="Education" description="Deserunt unde quisquam quia autem, non tempora quibusdam quam mollitia magnam tenetur."/>
        </div>
    </div>
  )
}

export default ContentLeft