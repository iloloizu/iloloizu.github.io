import React from 'react'

function MenuItems({menuItem}) {
    return (
        <div className="portfolis">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="Ilolo's Project"/>
                            <ul className="hovitems">
                                <li >
                                    <a className="newButtons" href={item.link2} target="_blank">{item.icon1}</a>
                                    <a className="newButtons" href={item.link1} target="_blank">{item.icon2}</a>
                                </li>
                            </ul>
                            <h5 className="hovitems">
                                {item.title}
                            </h5>
                             <p className="hovitems">{item.paragraph}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;