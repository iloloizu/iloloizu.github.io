import React from 'react';
import MenuItems from '../components/MenuItems';
import portfolios from '../components/allportfolios';
import { useState } from 'react';

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

function PortfoliosPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData  = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="portfolioPage">
            <div className="portfolios-content">
                <h2 className="section-title">All Projects</h2>
                <div className="portfolios-data section-content">
                    <MenuItems menuItem={menuItems} />
                </div>
            </div>
        </div>
    )
}

export default PortfoliosPage;