fetch("shop.json")
  .then(response => response.text())
  .then(text => {
    const productGrid = document.getElementById('product-grid');
    const data = JSON.parse(text);
    const myMap = new Map();
    for (const cardData of data.cards) {
      myMap.set("images", cardData.images)
      myMap.set("title", cardData.title)
      myMap.set("description", cardData.description)
      myMap.set("category", cardData.category)
      myMap.set("price", cardData.price)

      console.log(myMap);
      try {
        const card = document.createElement('div');
        const image = document.createElement('img');
        const title = document.createElement('h2');
        const description = document.createElement('h3');
        const category = document.createElement('h3');
        const price = document.createElement('h3');

        image.src = myMap.get("images");
        title.textContent = myMap.get("title");
        description.textContent = myMap.get("description");
        category.textContent = `Categoria: ${myMap.get("category")}`;
        price.textContent = `Prezzo: ${myMap.get("price")} euro`;

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(category);
        card.appendChild(price);

        productGrid.appendChild(card);
      } catch(err) {
        console.log(err);
      }
    }
  });
