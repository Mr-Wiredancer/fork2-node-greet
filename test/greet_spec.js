var greet = require('../lib/index.js');

describe('greet', function(){
    it("should greet a person by name", function(){
        expect( greet('Howard') ).to.eql('hello, Howard');
    });

    it("should greet a person flirtatiously if drunk", function(){
        expect( greet('Howard', true) ).to.eql('hello Howard, you look sexy today');    
    });
        
});
