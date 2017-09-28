const expect = chai.expect;
const should = chai.should();

describe('ShoppingListItem', function(){
  let sl;
  beforeEach(function(){
    let sl = new ShoppingListItem("foo", "bar");
  });
  it('should be a function', function(){
    expect(ShoppingListItem).to.be.a('function');
  });
  it('should have a name property', function(){
    let sl = new ShoppingListItem();
    expect(sl).to.have.property('name');
  });
  it('should have a description property', function(){
    let sl = new ShoppingListItem();
    expect(sl).to.have.property('description');
  });
  it('should have an is_done property', function(){
    let sl = new ShoppingListItem();
    expect(sl.is_done).to.be.undefined;
  });
  it('constructor should have name argument and set name property', function(){
    let sl = new ShoppingListItem("foo", "bar");
    expect(sl.name).to.equal("foo");
  });
  it('constructor should have description argument and set description property', function(){
    let sl = new ShoppingListItem("foo", "bar");
    expect(sl.description).to.equal("bar");
  })
  describe('.check', function(){
    it('should have a check method', function(){
      let sl = new ShoppingListItem();
      expect(sl.check).to.be.a('function');
    });
    it('should set is_done to true', function(){
      let sl = new ShoppingListItem();
      sl.check();
      expect(sl.is_done).to.be.true;
    });
  });
  describe('.uncheck', function(){
    it('should have uncheck method', function(){
      let sl = new ShoppingListItem();
      expect(sl.uncheck).to.be.a('function');
    });
    it('should set is_done to false', function(){
      let sl = new ShoppingListItem();
      sl.uncheck();
      expect(sl.is_done).to.be.false;
    })
  })
  describe('.render', function(){
    it('should have render method', function(){
      let sl = new ShoppingListItem();
      expect(sl.render).to.be.a('function');
    });
    it('should construct and return an html formatted string', function(){
      let sl = new ShoppingListItem("foo", "bar");
      sl.check();
      expect(sl.render()).to.equal(`<li class="completed_true"><span>foo</span> <span>bar</span></li>`);
    })
  })
})
