function colors(tag) {
   			var x = document.getElementsByClassName('all');
    for(var i=0; i<x.length; i++) {
      x[i].style.display= 'none';
    }
    var y = document.getElementsByClassName(tag);
    for(var j=0; j<y.length; j++) { // Corrected: changed <> to <
      y[j].style.display= 'inline-block';
    }
  }