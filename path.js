class Path {

  constructor(canvArray, pathsArray) {
    this.canvArray = canvArray;
    this.pathsArray = pathsArray; // array of arrays
  }

  draw_Path() {
    //we need another for-loop here so we can draw as many paths as we want on each update of the canvas
    for (let j = 0; j < this.canvArray.length; j++) {
        fill(255);
        let rect_x = this.canvArray[j][0];
        let rect_y = this.canvArray[j][1];
        // "startingPoint" is always the point in the SVG path that we
        // last checked, meaning that we don't loop through the whole
        // array every time we render the squares
        let startingPoint = 0;
        for (let i = 0; i < this.pathsArray.length; i++) { // Here we loop through as many paths as
                                                           // are added to pathsArray.
            for (let v = startingPoint; v < this.pathsArray[i].length; v++) {
                let point_x = this.pathsArray[i][v][0];
                let point_y = this.pathsArray[i][v][1];
                // If the point falls within the coordinates of the box,
                // then change the fill of that box to black.
                if (((point_x > rect_x)&& (point_x < (rect_x+9))) &&
                    ((point_y > rect_y) && (point_y < (rect_y + 9)))) {
                    fill(0);
                    startingPoint = v;
                }
            }
        }
        rect(rect_x, rect_y, 9, 9);
      }
    }
  }
