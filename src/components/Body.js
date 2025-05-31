const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <div className="search-input">
          <input
            className="search-text-box"
            type="text"
            placeholder="Search for food items..."
          />
          <button className="search-button">Search</button>
        </div>
        <div className="filter-button-container">
          <button className="filter-button">Filter veg options</button>
        </div>
      </div>
      <div className="card-containers">
        <div className="card">
          <img
            className="card-image"
            src="https://example.com/food1.jpg"
            alt="Food Item 1"
          />
          <div className="card-content">
            <h3 className="card-title">Food Item 1</h3>
            <div className="food-price">400 for TWO</div>
            <p className="card-description">Delicious food item description.</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
