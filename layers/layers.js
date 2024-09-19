var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.255000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "ตะวันตก",
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> ตะวันตก'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "ร้านอาหารโซนตะวันออก",
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> ร้านอาหารโซนตะวันออก'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: "ตะวันออก",
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> ตะวันออก'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr__2,lyr__3,lyr__4];
lyr__2.set('fieldAliases', {'ตะวันตก': 'ตะวันตก', 'x': 'x', 'y': 'y', 'ภาพ': 'ภาพ', });
lyr__3.set('fieldAliases', {'ร้านอาหาร': 'ร้านอาหาร', 'x': 'x', 'y': 'y', 'ภาพ': 'ภาพ', });
lyr__4.set('fieldAliases', {'ตะวันออก': 'ตะวันออก', 'x': 'x', 'y': 'y', 'ภาพ': 'ภาพ', });
lyr__2.set('fieldImages', {'ตะวันตก': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'ภาพ': 'TextEdit', });
lyr__3.set('fieldImages', {'ร้านอาหาร': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'ภาพ': 'TextEdit', });
lyr__4.set('fieldImages', {'ตะวันออก': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'ภาพ': 'TextEdit', });
lyr__2.set('fieldLabels', {'ตะวันตก': 'inline label - always visible', 'x': 'no label', 'y': 'no label', 'ภาพ': 'header label - always visible', });
lyr__3.set('fieldLabels', {'ร้านอาหาร': 'inline label - always visible', 'x': 'no label', 'y': 'no label', 'ภาพ': 'header label - always visible', });
lyr__4.set('fieldLabels', {'ตะวันออก': 'header label - always visible', 'x': 'no label', 'y': 'no label', 'ภาพ': 'header label - visible with data', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});