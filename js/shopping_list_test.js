const expect = chai.expect;
const should = chai.should();

//ShoppingListItem tests

describe('ShoppingListItem', function(){
  let sli;
  beforeEach(function(){
    let sli = new ShoppingListItem("foo", "bar");
  });
  it('should be a function', function(){
    expect(ShoppingListItem).to.be.a('function');
  });
  it('should have a name property', function(){
    let sli = new ShoppingListItem();
    expect(sli).to.have.property('name');
  });
  it('should have a description property', function(){
    let sli = new ShoppingListItem();
    expect(sli).to.have.property('description');
  });
  it('should have an is_done property', function(){
    let sli = new ShoppingListItem();
    expect(sli.is_done).to.be.undefined;
  });
  it('should have a constructor method', function(){
    let sli = new ShoppingListItem();
    expect(sli.constructor).to.be.a('function');
  });
  it('constructor should have name argument and set name property', function(){
    let sli = new ShoppingListItem("foo", "bar");
    expect(sli.name).to.equal("foo");
  });
  it('constructor should have description argument and set description property', function(){
    let sli = new ShoppingListItem("foo", "bar");
    expect(sli.description).to.equal("bar");
  });
  describe('.check', function(){
    it('should have a check method', function(){
      let sli = new ShoppingListItem();
      expect(sli.check).to.be.a('function');
    });
    it('should set is_done to true', function(){
      let sli = new ShoppingListItem();
      sli.check();
      expect(sli.is_done).to.be.true;
    });
  });
  describe('.uncheck', function(){
    it('should have uncheck method', function(){
      let sli = new ShoppingListItem();
      expect(sli.uncheck).to.be.a('function');
    });
    it('should set is_done to false', function(){
      let sli = new ShoppingListItem();
      sli.uncheck();
      expect(sli.is_done).to.be.false;
    });
  });
  describe('.render', function(){
    it('should have render method', function(){
      let sli = new ShoppingListItem();
      expect(sli.render).to.be.a('function');
    });
    it('should construct and return an html formatted string', function(){
      let sli = new ShoppingListItem("foo", "bar");
      sli.check();
      expect(sli.render()).to.equal(`<li class="completed_true"><span>foo</span><span>bar</span></li>`);
    });
  });
});

//ShoppingList tests

let testSLI = new ShoppingListItem("apple", "red");
// testSLI.check();
// testSLI.render();
let testSLI2 = new ShoppingListItem("orange", "orange");
// testSLI2.uncheck();
// testSLI2.render();
let nonSLI = {name: "pear", description: "green"};

describe('ShoppingList', function(){
  it('should be a function', function(){
    expect(ShoppingList).to.be.a('function');
  });
  it('should have an items property', function(){
    let sl = new ShoppingList();
    expect(sl).to.have.property('items');
  });
  describe('constructor', function(){
    it('should have a constructor that initializes items as empty array', function(){
      let sl = new ShoppingList();
      expect(sl.items).to.be.an('array');
      expect(sl.items).to.deep.equal([]);
    });
  });
  describe('.addItem', function(){
    it('should have an addItem method', function(){
      let sl = new ShoppingList();
      expect(sl.addItem).to.be.a('function');
    });
    it('should add ShoppingListItem object to items array', function(){
      let sl = new ShoppingList();
      sl.addItem(testSLI);
      expect(sl.items).to.deep.equal([{name: "apple", description: "red"}]);
    });
    it('should throw error if non-ShoppingListItem is passed in', function(){
      let sl = new ShoppingList();
      expect(sl.addItem.bind(sl, nonSLI)).to.throw(TypeError);
    });
  });
  describe('.removeItem', function(){
    it('should have a removeItem method', function(){
      let sl = new ShoppingList();
      expect(sl.removeItem).to.be.a('function');
    });
    it('should remove ShoppingListItem from items array', function(){
      let sl = new ShoppingList();
      sl.addItem(testSLI);
      sl.addItem(testSLI2);
      sl.removeItem(testSLI);
      expect(sl.items).to.deep.equal([{name: "orange", description: "orange"}]);
    });
    it('should throw error if non-ShoppingListItem is passed in', function(){
      let sl = new ShoppingList();
      sl.addItem(testSLI);
      expect(sl.removeItem.bind(sl, nonSLI)).to.throw(TypeError);
    });
  });
  describe('.render', function(){
    it('should have a render method', function(){
      let sl = new ShoppingList();
      expect(sl.render).to.be.a('function');
    });
    it('should concatenate result of calling render on each item in object\'s items array and return html formatted string', function(){
      let sl = new ShoppingList();
      sl.addItem(testSLI);
      testSLI.check();
      sl.addItem(testSLI2);
      testSLI2.uncheck();
      expect(sl.render()).to.equal(`<ul><li class="completed_true"><span>apple</span><span>red</span></li><li class="completed_false"><span>orange</span><span>orange</span></li></ul>`);
    });
  });
})
