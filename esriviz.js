looker.plugins.visualizations.add({
  id: "esri_map",
  label: "Esri Map",
  create: function(element, config) {

  // Insert a <style> tag with some styles we'll use later.
  //   <script src="plugins/visualizations/dojo/dojo.js"></script>
  var css = element.innerHTML = `
    <style>
      .viewDiv {
        // Vertical centering
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
    </style>
  `;

  // Create a container element to let us center the text.
  var container = element.appendChild(document.createElement("div"));
  container.className = "viewDiv";
  container.id = "viewDiv";
  this._textElement = container.appendChild(document.createElement("div"));


  console.log("hellocreate")

  var dj = dojo;

  var fl;
	var map;
	var graphics = [];
  var view;

  graphics = [];

// dot1 = new SimpleMarkerSymbol({
//       size: 20,
//       color: "red",
//       outline: {
//         width: 1,
//         color: "white"
//       }})

// dot2 = new SimpleMarkerSymbol({
//       size: 20,
//       color: "blue",
//       outline: {
//         width: 1,
//         color: "white"
//       }})

// dot3 = new SimpleMarkerSymbol({
//       size: 20,
//       color: "green",
//       outline: {
//         width: 1,
//         color: "white"
//       }})

// var renderer = {
//   type: "unique-value",  // autocasts as new UniqueValueRenderer()
//   field: "crime_type",  // values returned by this function will
//                      // be used to render features by type
//   uniqueValueInfos: [{
//       value: "Burglary",  // features labeled as "High"
//       symbol: dot1  // will be assigned sym1
//     }, {
//       value: "Vandalism",  // features labeled as "Medium"
//       symbol: dot2  // will be assigned sym2
//     }, {
//       value: "Theft",  // features labeled as "Medium"
//       symbol: dot3  // will be assigned sym2
//     }]
// };

  // map.add(fl);

  },
  update: function(data, element, config, queryResponse) {

    // var dj = dojo;
    // console.log(dj)
    // Grab the first cell of the data
    var firstRow = data[0];
    var firstCell = firstRow[queryResponse.fields.dimensions[0].name];
    // console.log(queryResponse);
    // console.log(config);
    // console.log(data);
    // console.log(element);
    console.log(global.dojo)
    // let map = exports.createMap();
    // let map = createMap();
    let map = new dojo.Map({basemap:"streets-night-vector",ground:"world-elevation"})

    // Insert the data into the page
  

  // makeMap();

}
})