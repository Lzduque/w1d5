maxProfit = function(arr) {

  var fromBackwards = function(arr) {
    var maxValue = arr[arr.length-1]; // 33

    // console.log("arr: ",arr);
    // console.log("max: ",maxValue);

    var indexOfMax = arr.length-1;

    // console.log("Index of max: ",indexOfMax);
    // console.log("entering the loop");
    // console.log("");

    for (var i = arr.length - 1 ; i >= 0 ; i--) {
      if (maxValue < arr[i]) {
        maxValue = arr[i];
        indexOfMax = i;

        // console.log("i: ",i);
        // console.log("max: ",maxValue);
        // console.log("Index of max: ",indexOfMax);
        // console.log("finish x");

      }
    };

    // console.log("");
    // console.log("starting to analize the min");

    var indexOfMin = indexOfMax;
    var minValue = arr[indexOfMax];

    for (var j = indexOfMax ; j >= 0 ; j--) {
      if (minValue > arr[j]) {
        minValue = arr[j];
        indexOfMin = j;

        // console.log("j: ",j);
        // console.log("min: ",minValue);
        // console.log("Index of min: ",indexOfMin);
        // console.log("finish x")
      }
    }

    return maxValue - minValue;
  };



  var fromForwards = function(arr) {
    var minValue = arr[0]; // 24

    var indexOfMin = 0;

    console.log("arr: ",arr);
    console.log("mix: ",minValue);
    console.log("Index of mix: ",indexOfMin);

    console.log("entering the loop");
    console.log("");

    for (var i = 0 ; i <= arr.length - 1 ; i++) {
      if (minValue > arr[i]) {
        minValue = arr[i];
        indexOfMin = i;

        console.log("i: ",i);
        console.log("min: ",minValue);
        console.log("Index of min: ",indexOfMin);
        console.log("finish x");

      }
    };

    console.log("");
    console.log("starting to analize the max");

    var indexOfMax = indexOfMin;
    var maxValue = arr[indexOfMin];

    console.log("Index of max: ",indexOfMax);
    console.log("max by now: ",maxValue);

    for (var j = indexOfMin ; j <= arr.length - 1 ; j++) {
      if (maxValue < arr[j]) {
        maxValue = arr[j];
        indexOfMax = j;

        console.log("j: ",j);
        console.log("max: ",maxValue);
        console.log("Index of max: ",indexOfMax);
        console.log("finish x")
      }
    }

    return maxValue - minValue;
  };


  if (fromForwards(arr) > fromForwards(arr)) {
    return fromForwards(arr);
  } else {
    return fromBackwards(arr);
  }

};

console.log("\nResult is... ",maxProfit([45, 24, 35, 31, 40, 38, 11]));