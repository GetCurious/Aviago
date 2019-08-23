import {Component, OnInit, ViewChild} from '@angular/core';
import {GroundSupportEquipments} from '../model/ground-support-equipments.model';

import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import {Map, View} from 'ol';
import {Tile, Vector} from 'ol/layer';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';

import Overlay from 'ol/Overlay';
import TileJSON from 'ol/source/TileJSON';
import VectorSource from 'ol/source/Vector';
import {Icon, Style} from 'ol/style';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.styl']
})


export class MapComponent implements OnInit {
  map: Map;
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
          current_coordinates: [101.685149, 2.740894],
          picture: 'src/assets/groundpowerunit.jpeg'
        },
      }
    }
  };

  constructor() {
  }

  ngOnInit(): void {
    this.map = new Map({
      target: this.mapElement.nativeElement,
      layers: [
        new TileLayer({
          source: new OSM(),
        })
      ],
      view: new View({
        center: fromLonLat([101.685149, 2.740894]),
        zoom: 15
      })
    });
  }

  onClick() {
    const marker = new Feature({
      geometry: new Point(fromLonLat([101.685149, 2.740894]))
    });

    const vectorSource = new Vector({
      features: [marker]
    });

    const markerVectorLayer = new Vector({
      source: vectorSource,
    });
    this.map.addLayer(markerVectorLayer);
  }
}
