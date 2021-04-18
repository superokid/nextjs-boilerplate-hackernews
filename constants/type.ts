export type StoriesRes = number[];

export interface StoryItem {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title?: string;
  type: string;
  url: string;
}

export type Stories = StoryItem[];
