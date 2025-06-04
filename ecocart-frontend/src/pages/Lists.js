import React from 'react';

const Lists = () => {
  // Mock data for wish lists
  const wishLists = [
    {
      id: 1,
      name: 'Birthday Wishlist',
      items: [
        { id: 'B1', title: 'Eco-friendly Water Bottle', price: '$15.99' },
        { id: 'B2', title: 'Reusable Shopping Bag', price: '$9.99' },
      ],
    },
    {
      id: 2,
      name: 'Christmas Wishlist',
      items: [
        { id: 'C1', title: 'Solar Charger', price: '$29.99' },
        { id: 'C2', title: 'Bamboo Toothbrush', price: '$4.99' },
      ],
    },
  ];

  // Map of product titles to fixed sample image URLs (replace with actual URLs or local images)
  const productImages = {
    "Eco-friendly Water Bottle": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=64&q=80",
    "Reusable Shopping Bag": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=64&q=80",
    "Solar Charger": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=64&q=80",
    "Bamboo Toothbrush": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=64&q=80",
  };

  const getImageForItem = (title) => {
    const imgSrc = productImages[title] || "https://via.placeholder.com/64?text=Image";
    return {
      imgSrc,
      imgLink: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(title + " product")}`,
    };
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded shadow min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Lists</h1>

      {wishLists.map(list => (
        <section key={list.id} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{list.name}</h2>
          <ul>
            {list.items.map(item => (
              <li key={item.id} className="mb-4 flex items-center space-x-4">
<a href={getImageForItem(item.title).imgLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={getImageForItem(item.title).imgSrc}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                    loading="lazy"
                  />
                </a>
                <div className="flex-1">
                  <span className="block font-medium">{item.title}</span>
                  <span className="font-semibold">{item.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Lists;
