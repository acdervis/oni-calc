import IBuilding from './IBuilding';
import IDupes from './IDupes';
import ISettings from './ISettings';
import IBuildingAggregate from './IBuildingAggregate';
import IFood from './IFood';
import IPlant from './IPlant';
import IGeysers from './IGeysers';
import IResource from './IResource';

export default interface IState {
  tabIndex: number;
  settings: ISettings;
  collapseBuildingPanels: boolean;
  collapseBuildingPanelsTrigger: number;
  theme: any;
  buildingOrder: 'asc' | 'desc';
  buildings: IBuilding[];
  buildingsLayout: string;
  buildingsOrderBy: string;
  resources: IResource[];
  resourcesOrderBy: string;
  resourcesOrder: 'asc' | 'desc';
  powerUsage: IBuildingAggregate;
  powerGeneration: IBuildingAggregate;
  powerCapacity: IBuildingAggregate;
  resourcesCapacity: IBuildingAggregate;
  dupes: IDupes;
  food: IFood[];
  plants: IPlant[];
  plantsOrderBy: string;
  plantsOrder: 'asc' | 'desc';
  geysers: IGeysers;
}
