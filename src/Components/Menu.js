import React from 'react'
import recipes from '../recipes'
import deliveryLogo from '../images/delivery logo.png'

function Menu() {
  return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h2>This weeks specials!</h2>
                <button>Online Menu</button>
            </div>

            {/* Menu Cards*/}
            <div className='cards'>
                {
                    recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt="" />
                        <div className='menu-content'>
                            <div className='heading'>
                                <h4>{recipe.title}</h4>
                                <p>$ {recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                        </div>
                        <div className='delivery'>
                            <h5>Order a Delivery</h5>
                            <img src={deliveryLogo} alt=""/>
                        </div>
                    </div>)
                }
            </div>
        </div>
  )
}

export default Menu