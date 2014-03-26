greet = require '../lib/index.js'

describe 'greet', ()->
    it "should greet a person by name", ()->
        expect( greet 'howard' ).to.eql 'hello, howard'

    it "should greet a person flirtatiously if drunk", ()->
        expect( greet 'howard', true ).to.eql 'hello howard, you look sexy today'
