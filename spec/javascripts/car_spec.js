describe('Car', function(){
    var car;
    beforeEach(function() {
        car = new Car({title: 'Awesome'});
    });

    it ("should return the default title", function(){
        expect(car.get('title')).toEqual('Awesome');
    })
});