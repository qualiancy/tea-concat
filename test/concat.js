describe('concat', function () {
  var arr1 = [ 1, 2 ]
    , arr2 = [ 3, 4 ];

  it('should be able to concat two arrays', function () {
    concat(arr1, arr2)
      .should.deep.equal([ 1, 2, 3, 4 ]);
  });
});
