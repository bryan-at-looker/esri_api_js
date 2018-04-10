  // https://github.com/d3/d3-sankey Version 0.6.1. Copyright 2017 Mike Bostock.
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('esri/Map'), require('esri/views/SceneView'), require('esri/widgets/Search')) :
  typeof define === 'function' && define.amd !== 'undefined' ? define(['exports', 'esri/Map', 'esri/views/SceneView', 'esri/widgets/Search'], factory) :
  (factory((global.dojo = global.dojo || {}),global.dojo,global.dojo,global.dojo));
}(this, (function (exports,Map,SceneView,Search) { 'use strict'; 

  console.log(typeof exports === 'object');
  console.log(typeof module !== 'undefined');
  console.log(typeof define === 'function');
  console.log(global.dojo);
  

  var createMap = function() {
    function createMap(){
    var map = new Map({basemap:"streets-night-vector",ground:"world-elevation"});
    var view = new SceneView({container:"esri_map_vis",map:map,scale:5E7,center:[-101.17,21,78]});

      view.then(function() {view.goTo({
        center: [-117.1382,32.7232],
        zoom: 14,
        heading: 30,
        tilt: 60
      }, { speedFactor: 0.5 })});

      console.log("helloupdate")

      return map;
    }
  }

exports.createMap = createMap;
global.dojo.createMap = createMap;
console.log(global.dojo);
console.log(exports.createMap);

Object.defineProperty(exports, '__esModule', { value: true });


})));