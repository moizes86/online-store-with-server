export const getCategories = (items) => {
  return items
    .map((el) => ({
      category: el.category,
      image: el.image,
    }))
    .reduce((acc, curr) => {
      if (!acc.some((obj) => obj.category === curr.category)) {
        acc.push(curr);
      }
      return acc;
    }, []);
};

export const utilsGetItemsByCategory = (items, category) =>
  items.filter((el) => el.category === category);

export const utilsGetSingleItem = (items, itemID) => {
  return items.filter((el) => el.id === parseInt(itemID));
};
