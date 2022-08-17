import React from 'react'
import './portfolio.css'
function Portfolio() {
  const data = [
    {
      id: 1,
      title: 'Online Mobiles Store',
      image: 'https://bcimobilestore.com/pub/media/slidebanner/1/0/1080x1080_2__70.jpg',
      github: 'https://github.com/GSG-CF05/smart-phone-store-team2',
      live: 'https://gsg-cf05.github.io/smart-phone-store-team2/',
    },
    {
      id: 2,
      title: 'Twitter Home Page',
      image: 'https://www.everyinteraction.com/wp-content/uploads/2017/06/Twitter-profile_GUI-sketch-desktop.jpg',
      github: 'https://github.com/AbdullahLaham/Twitter-home-page',
      live: 'https://abdullahlaham.github.io/Twitter-home-page/',
    },
    {
      id: 3,
      title: 'Twitter Home Page',
      image: 'https://www.everyinteraction.com/wp-content/uploads/2017/06/Twitter-profile_GUI-sketch-desktop.jpg',
      github: 'https://github.com/AbdullahLaham/Twitter-home-page',
      live: 'https://abdullahlaham.github.io/Twitter-home-page/',
    }
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {data.map(item => {
          return (
            <article key={item.id} className='portfolio_item'>
              <div className='port_image'>
                <img src={item.image} />
              </div>
              <h3>{item.title}</h3>
              <div className='portfolio_item-cta'>
                <a href={item.github} className='btn' target='_blank'>GitHub</a>
                <a href={item.live} className='btn btn-primary' target='_blank'>GitHub</a> 
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
