export interface GroundSupportEquipments {
  groundSupportEquipments: { [equipments: string]: { [name: string]: EqDetails } };
}

export interface EqDetails {
  belongsTo: string;
  state: string;
  status: string;
  current_user: string;
  description: string;
  nextMaintenanceDate: Date;
  previousMaintenanceDate: Date;
  current_coordinates: number[];
  picture?: string;
}

