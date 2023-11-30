var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Kecamatansidoarjo_1 = new ol.format.GeoJSON();
var features_Kecamatansidoarjo_1 = format_Kecamatansidoarjo_1.readFeatures(json_Kecamatansidoarjo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatansidoarjo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatansidoarjo_1.addFeatures(features_Kecamatansidoarjo_1);
var lyr_Kecamatansidoarjo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kecamatansidoarjo_1, 
                style: style_Kecamatansidoarjo_1,
                interactive: true,
    title: 'Kecamatan sidoarjo<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_0.png" /> BANGUN<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_1.png" /> BOHAR<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_2.png" /> BUKUSIDOKARE<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_3.png" /> ENTALSEWU<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_4.png" /> GADING<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_5.png" /> GEMPOL<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_6.png" /> JANTI<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_7.png" /> JUNWANGI<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_8.png" /> KAJARTENGGULI<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_9.png" /> KEBAONSIKEP<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_10.png" /> KEDUNGBOCOK<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_11.png" /> KEDUNGBOTO<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_12.png" /> KEL. DUKUHMENANGGAL<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_13.png" /> KEL. GUNUNGANYARTAMBAK<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_14.png" /> KEL. KEBRAON<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_15.png" /> KEL. KUTISARI<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_16.png" /> KEL. PAGESANGAN<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_17.png" /> KEL. SIWALANKERTO<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_18.png" /> KENONGO<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_19.png" /> KETAPANG<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_20.png" /> KRIKILAN<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_21.png" /> KWATU<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_22.png" /> LEMINGGIR<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_23.png" /> LENGKONG<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_24.png" /> PEJARAKAN<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_25.png" /> PERNING<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_26.png" /> PULUNGAN<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_27.png" /> RACI<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_28.png" /> SEMAMBUNG<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_29.png" /> SUKODONO<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_30.png" /> SUMMORAME<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_31.png" /> SUMOKEMBANGSRI<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_32.png" /> TANJANGRONO<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_33.png" /> WRINGINANOM<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_34.png" /> WUNUT<br />\
    <img src="styles/legend/Kecamatansidoarjo_1_35.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Kecamatansidoarjo_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Kecamatansidoarjo_1];
lyr_Kecamatansidoarjo_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Kecamatansidoarjo_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Kecamatansidoarjo_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Kecamatansidoarjo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});