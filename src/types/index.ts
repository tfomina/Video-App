export interface Timestamp {
  id: number;
  timestamp: number;
  duration: number;
  zone: Zone;
}

interface Zone {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface TimestampsState {
  timestamps: Timestamp[];
  selectedTimestamp: Timestamp | null;
}

export interface AppState {
  loading: boolean;
}
