import greekSalad from './images/greek salad.jpg'
import bruschetta from './images/bruschetta.png'
import lemonDessert from './images/lemon dessert.jpg'


const recipes = [
    {
        id: 1,
        title: "Greek Salad",
        price: 12.99,
        image: greekSalad,
        description: "A fresh Mediterranean dish made with tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese, all drizzled with olive oil and seasoned with oregano. It's a simple yet flavorful combination that embodies the vibrant tastes of Greece.",
    },
    {
        id: 2,
        title: "Bruschetta",
        price: 5.99,
        image: bruschetta,
        description: "A classic Italian appetizer featuring toasted slices of crusty bread topped with a mixture of diced tomatoes, fresh basil, garlic, and olive oil. The combination of crunchy bread and savory, fragrant toppings creates a delicious, light bite.",
    },
    {
        id: 3,
        title: "Lemon Dessert",
        price: 4.99,
        image: lemonDessert,
        description: "A light and moist treat, infused with bright, tangy lemon flavor. Topped with a sweet glaze or frosting, it offers a perfect balance of citrusy zest and sugary sweetness.",
    },
];

export default recipes