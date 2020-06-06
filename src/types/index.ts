export interface IItem {
  id: number;
  timestamp: number;
  duration: number;
  zone: IZone;
}

interface IZone {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface ItemsState {
  items: IItem[];
}
