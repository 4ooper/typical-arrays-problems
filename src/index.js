
exports.min = function min (array) {
    if(array.length > 0)
    {
    let min = 0;
    for(let i=0;i<array.length;i++)
        {
            if(array[min]<array[i])
                min = i;
            return min;
        }
    }
    else
        return 0;
}

exports.max = function max (array) {
  if(array.length > 0)
    {
    let max = 0;
    for(let i=0;i<array.length;i++)
        {
            if(array[max]>array[i])
                max = i;
            return max;
        }
    }
    else
        return 0;
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
