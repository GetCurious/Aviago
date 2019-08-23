import {Component, OnInit, ViewChild} from '@angular/core';
import {GroundSupportEquipments} from '../model/ground-support-equipments.model';

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {MultiPoint, Point} from 'ol/geom.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';
import {fromLonLat} from 'ol/proj';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.styl']
})

// TODO CORE
// https://openlayers.org/en/latest/examples/feature-move-animation.html
// https://openlayers.org/en/latest/examples/geolocation.html
// https://openlayers.org/en/latest/examples/geolocation-orientation.html

// TODO Map Limiting features
// https://openlayers.org/en/latest/examples/zoom-constrained.html
// https://openlayers.org/en/latest/examples/wmts-hidpi.html
// https://openlayers.org/en/latest/examples/utfgrid.html

// TODO Points
// https://openlayers.org/en/latest/examples/popup.html
// https://openlayers.org/en/latest/examples/overlay.html
// https://openlayers.org/en/latest/examples/vector-tile-info.html
// https://openlayers.org/en/latest/examples/vector-labels.html
// https://openlayers.org/en/latest/examples/icon.html
// https://openlayers.org/en/latest/examples/icon-negative.html
// https://openlayers.org/en/latest/examples/gpx.html

// https://openlayers.org/en/latest/examples/getfeatureinfo-image.html
// https://openlayers.org/en/latest/examples/getfeatureinfo-tile.html

// TODO Optional features
// https://openlayers.org/en/latest/examples/measure.html
// https://openlayers.org/en/latest/examples/lazy-source.html
// https://openlayers.org/en/latest/examples/draw-freehand.html
// https://openlayers.org/en/latest/examples/flight-animation.html
// https://openlayers.org/en/latest/examples/here-maps.html
// https://openlayers.org/en/latest/examples/graticule.html

export class MapComponent implements OnInit {
  @ViewChild('map', {static: true}) mapElement: any;

  GSE: GroundSupportEquipments = {
    groundSupportEquipments: {

      Lifts: {
        ScissorsLift001: {
          belongsTo: 'KLIA2',
          state: 'Available',
          status: 'Serviceable',
          current_user: 'LAE Ikrammula',
          description: 'A380 TowTug',
          nextMaintenanceDate: new Date(),
          previousMaintenanceDate: new Date(),
          current_coordinates: [101.685149, 2.740894]
        },
      },
      ServicingCarts: {
        WheelDolly001: {
          belongsTo: 'KLIA2',
          state: 'Available',
          status: 'Serviceable',
          current_user: 'LAE Ikrammula',
          description: 'A380 TowTug',
          nextMaintenanceDate: new Date(),
          previousMaintenanceDate: new Date(),
          current_coordinates: [101.685149, 2.740894]
        },
        HydraulicJack001: {
          belongsTo: 'KLIA2',
          state: 'Available',
          status: 'Serviceable',
          current_user: 'LAE Ikrammula',
          description: 'A380 TowTug',
          nextMaintenanceDate: new Date(),
          previousMaintenanceDate: new Date(),
          current_coordinates: [101.685149, 2.740894]
        },
        BaggageCarts: {
          belongsTo: 'KLIA2',
          state: 'Available',
          status: 'Serviceable',
          current_user: 'LAE Ikrammula',
          description: 'A380 TowTug',
          nextMaintenanceDate: new Date(),
          previousMaintenanceDate: new Date(),
          current_coordinates: [101.685149, 2.740894]
        },
      },
      BeltLoaders: {
        Loader001: {
          belongsTo: 'KLIA2',
          state: 'Available',
          status: 'Serviceable',
          current_user: 'LAE Ikrammula',
          description: 'A380 TowTug',
          nextMaintenanceDate: new Date(),
          previousMaintenanceDate: new Date(),
          current_coordinates: [101.685149, 2.740894]
        },
      },
      TowTugs: {
        Tug001: {
          belongsTo: 'KLIA2',
          state: 'Available',
          status: 'Serviceable',
          current_user: 'LAE Ikrammula',
          description: 'A380 TowTug',
          nextMaintenanceDate: new Date(),
          previousMaintenanceDate: new Date(),
          current_coordinates: [101.685149, 2.740894],
          picture: 'src/assets/towtug.jpeg'
        },
      },
      GroundPowerUnits: {
        GPU001: {
          belongsTo: 'KLIA',
          state: 'In-Service',
          status: 'Serviceable',
          current_user: 'LAE Ikrammula',
          description: 'A380 Ground Power Unit',
          nextMaintenanceDate: new Date(),
          previousMaintenanceDate: new Date(),
          current_coordinates: [101.684249, 2.741094],
          picture: 'src/assets/groundpowerunit.jpeg'
        },
      }
    }
  };

  constructor() {
  }

  ngOnInit(): void {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: this.mapElement.nativeElement,
      view: new View({
        center: fromLonLat([101.685149, 2.740894]),
        zoom: 17
      })
    });

    const TowTug = new Style({
      image: new CircleStyle({
        radius: 5,
        fill: new Fill({color: 'yellow'}),
        stroke: new Stroke({color: 'red', width: 0.5})
      })
    });

    const GPU = new Style({
      image: new CircleStyle({
        radius: 5,
        fill: new Fill({color: 'green'}),
        stroke: new Stroke({color: 'red', width: 0.5})
      })
    });

    map.on('postcompose', (event) => {
      const vectorContext = event.vectorContext;

      // TowTug
      var headPoint = new Point(fromLonLat([101.685149, 2.740894]));
      vectorContext.setStyle(TowTug);
      vectorContext.drawGeometry(headPoint);

      // GPU
      var headPoint = new Point(fromLonLat([101.684249, 2.741094]));
      vectorContext.setStyle(GPU);
      vectorContext.drawGeometry(headPoint);

    });
    map.render();
  }
}
