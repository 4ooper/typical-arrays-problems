
exports.min = function min (array) {
    return Math.min.apply(null, this);
}

exports.max = function max (array) {
  return Math.max.apply(null, this);
}

exports.avg = function avg (array) {
    if(array.length > 0)
    {
        let avg = 0;
        for(let i=0;i<array.length;i++)
            avg+=array[i]
        avg = avg/array.length;
        return avg;
    }
   else
        return 0;
}
