const menuItems = [
  {
    name: 'Classic Cheeseburger',
    price: 8.99,
    image: 'https://www.kimscravings.com/wp-content/uploads/2023/05/cheese-stuffed-burgers-500x500.jpg',
  },
  {
    name: 'Pepperoni Pizza',
    price: 12.99,
    image: 'https://images.arla.com/recordid/DF1FEC6A-1E82-4435-B62EF9C786303EC2/pepperoni-pizza.jpg?format=jpg&width=1200&height=630&mode=crop',
  },
  {
    name: 'Chicken Wings',
    price: 14.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aIJfP4bQfOrTPLjX2ueWQnq90CG7siE0aQ&s',
  },
  {
    name: 'Chilli Patato ',
    price: 9.99,
    image: 'https://img-global.cpcdn.com/recipes/447b31c5dba6b27e/1200x630cq70/photo.jpg',
  },
  {
    name: 'Paneer Butter Masala ',
    price: 10.99,
    image: 'https://spiceniceportadelaide.com.au/wp-content/uploads/2024/03/Paneer-Butter-Masala.png'
  },
  {
   name: 'Garlic Naan',
   price: 6.99,
   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnrM-5ZzJ0kw2oc61i1d_LEkh1fKx8RE6w5A&s'
  }
];

document.getElementById('checkout-form').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent page reload

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const phone = this.phone.value.trim();
  const address = this.address.value.trim();


  if (name && email && phone && address) {
    const responseEl = document.getElementById('form-response');
    responseEl.textContent = `Thank you, ${name}! Your order is on its way 🚚🍽️`;
    this.reset(); // Clear the form
    cartCount = 0;
    updateCart(); // reset cart count
  }
});


let cartCount = 0;

function updateCart() {
  document.getElementById('cart-count').innerText = cartCount;
}

function renderMenu(items) {
  const menuContainer = document.getElementById('menu-items');
  menuContainer.innerHTML = '';
  items.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>$${item.price.toFixed(2)}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    menuContainer.appendChild(menuItem);
  });
}

function addToCart() {
  cartCount++;
  updateCart();
}

document.getElementById('search').addEventListener('input', function(e) {
  const query = e.target.value.toLowerCase();
  const filtered = menuItems.filter(item => item.name.toLowerCase().includes(query));
  renderMenu(filtered);
});

renderMenu(menuItems);
updateCart();
