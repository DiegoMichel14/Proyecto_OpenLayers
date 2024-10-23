// var map =null;
//   function inicializa(){
//   map= new ol.Map({  
//                 layers: [  
//                     new ol.layer.Tile({   
//                          source: new ol.source.OSM()  
//                     })
					
//                 ],
//                 target: 'map',  
//                 view: new ol.View({
//                 center: ol.proj.transform([-102.552784, 23.634501], 'EPSG:4326', 'EPSG:3857'),  
//                 zoom: 5
                   
//                 })               
// 			});
          
// 	      olView = map.getView();
// 			olView.on('propertychange', olViewPropertyChange);
   
//   } 


// function olViewPropertyChange(e) {
//     switch (e.key) {
//         case 'resolution':
//             olViewResolutionChange(e);
//             break;
//     }
// };

// function olViewResolutionChange(e) {
 
//   objzoom = document.getElementById('zoom');
//     zoom = olView.getZoom();
//     objzoom.innerText= zoom;
// 	console.log(zoom);
// }


//             var lyr = null;
//             var lyr2 = null;
//                 function ActivaCapa(obj) {

//                 if (obj.id === "chkEstatal") {
//                    if (document.getElementById('chkEstatal').checked) {
//                         url = "https://mapas.inegi.org.mx/geoserver/wms?"
//                         ws = "Sitio_Inegi"
//                       gslyrname = "Estatal"
// 				        name = "1_1_1"
//                         stylename = "estatal"
//                         zoom = 5
//                         visible = true
//                         zIndex = 163
//                         var lyrs = '';

//                         if (ws !== '')
//                             lyrs = ws + ':' + gslyrname;
//                         else
//                             lyrs = gslyrname;

//                         lyr = new ol.layer.Tile({
//                             name: name,
//                             visible: visible,
//                             zoomInicial: zoom,
//                             source: new ol.source.TileWMS({
//                                 preload: Infinity,
//                                 crossOrigin: 'anonymous',
//                                 url: url,
//                                 params: { 'LAYERS': lyrs, 'TILED': 'true', 'FORMAT': 'image/png8', 'STYLES': stylename, 'SLD': undefined }
//                             })
//                         });
//                         lyr.setZIndex(zIndex);
//                         map.addLayer(lyr);
						
// 						 actualZoom = map.getView().getZoom();
						  
// 						  console.log(actualZoom);
//                    }
//                     else {
//                         map.removeLayer(lyr);
//                        lyr = null;
//                     }
//                 }
//               else {
//                     if (document.getElementById('chkMunicipal').checked) {
//                         url = "https://mapas.inegi.org.mx/geoserver/wms?"
//                         ws = "Sitio_Inegi"
//                         gslyrname = "mg_Municipal"
//                         name = "1_1_2"
//                         stylename = "mg_municipal"
//                         zoom = 9
//                         visible = true
//                         zIndex = 163
//                         var lyrs = '';

//                         if (ws !== '')
//                             lyrs = ws + ':' + gslyrname;
//                         else
//                             lyrs = gslyrname;

//                         lyr2 = new ol.layer.Tile({
//                             name: name,
//                             visible: visible,
//                             zoomInicial: zoom,
//                             source: new ol.source.TileWMS({
//                                 preload: Infinity,
//                                 crossOrigin: 'anonymous',
//                                 url: url,
//                                 params: { 'LAYERS': lyrs, 'TILED': 'true', 'FORMAT': 'image/png8', 'STYLES': stylename, 'SLD': undefined }
//                             })
//                         });
//                         lyr2.setZIndex(zIndex);
//                         map.addLayer(lyr2);
//                     }
//                     else {
//                         map.removeLayer(lyr2);
//                         lyr2 = null;
//                     }
//                 } 
			
				
//             } 
        


var map = null;

function inicializa() {
    map = new ol.Map({
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM() // Mapa base de OpenStreetMap
            })
        ],
        target: 'map',
        view: new ol.View({
            center: ol.proj.transform([-102.552784, 23.634501], 'EPSG:4326', 'EPSG:3857'), // Coordenadas iniciales centradas en México
            zoom: 5
        })
    });
    
    olView = map.getView();
    olView.on('propertychange', olViewPropertyChange);
}

function olViewPropertyChange(e) {
    switch (e.key) {
        case 'resolution':
            olViewResolutionChange(e);
            break;
    }
}

function olViewResolutionChange(e) {
    var objzoom = document.getElementById('zoom');
    var zoom = olView.getZoom();
    objzoom.innerText = zoom;
    console.log(zoom);
}

var lyr = null;
var lyr2 = null;

function ActivaCapa(obj) {
    if (obj.id === "chkEstatal") {
        if (document.getElementById('chkEstatal').checked) {
            // Configuración de la capa de Localidades
            var url = "https://mapas.inegi.org.mx/geoserver/wms?";
            var ws = "Sitio_Inegi";
            var gslyrname = "Localidades"; // Capa de localidades
            var name = "1_1_1";
            var stylename = "localidades"; // Estilo asociado a localidades
            var zoom = 10; // Nivel de zoom inicial para localidades
            var visible = true;
            var zIndex = 163;
            var lyrs = '';

            if (ws !== '')
                lyrs = ws + ':' + gslyrname;
            else
                lyrs = gslyrname;

            lyr = new ol.layer.Tile({
                name: name,
                visible: visible,
                zoomInicial: zoom,
                source: new ol.source.TileWMS({
                    preload: Infinity,
                    crossOrigin: 'anonymous',
                    url: url,
                    params: { 'LAYERS': lyrs, 'TILED': 'true', 'FORMAT': 'image/png8', 'STYLES': stylename, 'SLD': undefined }
                })
            });
            lyr.setZIndex(zIndex);
            map.addLayer(lyr);
        } else {
            map.removeLayer(lyr);
            lyr = null;
        }
    } else {
        if (document.getElementById('chkMunicipal').checked) {
            // Configuración de la capa de Manzanas
            var url = "https://mapas.inegi.org.mx/geoserver/wms?";
            var ws = "Sitio_Inegi";
            var gslyrname = "Manzanas"; // Capa de manzanas
            var name = "1_1_2";
            var stylename = "manzanas"; // Estilo asociado a manzanas
            var zoom = 14; // Nivel de zoom inicial para manzanas
            var visible = true;
            var zIndex = 163;
            var lyrs = '';

            if (ws !== '')
                lyrs = ws + ':' + gslyrname;
            else
                lyrs = gslyrname;

            lyr2 = new ol.layer.Tile({
                name: name,
                visible: visible,
                zoomInicial: zoom,
                source: new ol.source.TileWMS({
                    preload: Infinity,
                    crossOrigin: 'anonymous',
                    url: url,
                    params: { 'LAYERS': lyrs, 'TILED': 'true', 'FORMAT': 'image/png8', 'STYLES': stylename, 'SLD': undefined }
                })
            });
            lyr2.setZIndex(zIndex);
            map.addLayer(lyr2);
        } else {
            map.removeLayer(lyr2);
            lyr2 = null;
        }
    }
}