export const nav = {
  top: { slug: 'top', title: 'Top', api: '/topstories.json' },
  new: { slug: 'new', title: 'New', api: '/newstories.json' },
  ask: { slug: 'ask', title: 'ask', api: '/askstories.json' },
  show: { slug: 'show', title: 'show', api: '/showstories.json' },
  jobs: { slug: 'jobs', title: 'jobs', api: '/jobstories.json' },
} as const;

const apis = Object.values(nav).map((item) => item.api);

const ALL_SUITS = [...apis] as const;
type SuitTuple = typeof ALL_SUITS;
export type StoriesUrl = SuitTuple[number];

export const navArr = Object.keys(nav);
