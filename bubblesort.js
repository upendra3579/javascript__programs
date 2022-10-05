function bubblesort() {
    var numElements = dataStore.length;
    var temp;
    for (var outer = numElements; outer >= 2; --outer) {
       for (var inner = 0; inner <= outer-1; ++inner) {
          if (dataStore[inner] >dataStore[inner+1]) {
             temp = dataStore[inner];
             dataStore[inner] = dataStore[inner+1];
             dataStore[inner+1] = temp;
          }
       }
    }
 };
  

 var dataStore = [23,35,65,34,56,90]; [90,23,35,65,34,56]; 
 var res = bubblesort();
 console.log(res);