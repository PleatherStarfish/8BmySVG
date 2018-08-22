class SVG_Multipath {
  // Class returns an array of all points in an SVG

  constructor(listOfPathIDs) {
    this.pathIDs = listOfPathIDs;
    this.pathVariables = [];
    this.pathLengths = [];
    this.pathArray = [];
  }

  path_Variables_Array() {
    for (let n = 0; n < this.pathIDs.length; n++) {
        this.pathVariables.push(document.getElementById(this.pathIDs[n]));
      }
  }
  path_Lengths_Array() {
      for (let n = 0; n < this.pathIDs.length; n++) {
          this.pathLengths.push(this.pathVariables[n].getTotalLength());
        }
  }
  svg_Path_Length() {
    this.path_Variables_Array();
    this.path_Lengths_Array();
      for (let n = 0; n < this.pathIDs.length; n++) {
        for (let m = 0; m < this.pathLengths[n]; m++) {
            const path_x = this.pathVariables[n].getPointAtLength(m).x;
            const path_y = this.pathVariables[n].getPointAtLength(m).y;
            this.pathArray.push([path_x, path_y]);
      }
    }
  }
  svg_Array() {
    this.svg_Path_Length();
    return this.pathArray;
  }
}
