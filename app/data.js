var APP_DATA = {
  "scenes": [
    {
      "id": "0-main",
      "name": "main",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
  // Get the hotspot container for scene.
var container = scene.hotspotContainer();
"infoHotspots": [
  {
    "yaw": -0.1457067243766943,
    "pitch": -0.006392650344780648,
    "title": "Title",
    "text": "Text"
  }
]
// Create hotspot with different sources.
container.createHotspot(document.getElementById('iframespot'), { yaw: -0.1457067243766943, pitch: -0.006392650344780648 },
  { perspective: { radius: 1640, extraTransforms: "rotateX(5deg)" }});
wrapper.innerHTML = '<iframe id="youtube" width="1280" height="480" src="https://www.youtube.com/embed/a4YjKmsXyds?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>';

};
