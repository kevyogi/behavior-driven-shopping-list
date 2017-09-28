class ShoppingList {
  constructor(items){
    this.items = [];
  }

  addItem(item) {
    if(!(item instanceof ShoppingListItem)){
      throw new TypeError;
    }
    this.items.push(item);
  }

  removeItem(item) {
    if(!(item instanceof ShoppingListItem)){
      throw new TypeError;
    }
    let itemIndex = this.items.indexOf(item);
    this.items.splice(itemIndex, 1);
  }

  render() {
    let theList = "";
    this.items.forEach(function(items){
      theList += items.render();
    })
    return `<ul>${theList}</ul>`;
  }
}