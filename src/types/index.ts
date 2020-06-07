export type Timestamp = {
  id: number;
  timestamp: number;
  duration: number;
  zone: Zone;
};

export type Zone = {
  left: number;
  top: number;
  width: number;
  height: number;
};

export type Sort = "asc" | "desc";

export type TimestampsState = {
  timestamps: Timestamp[];
  selectedTimestamp: Timestamp | null;
  sort: Sort;
};

export type AppState = {
  loading: boolean;
};

export type VideoState = {
  currentTime: number;
};
