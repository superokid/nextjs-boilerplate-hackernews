import axios, { AxiosResponse } from 'axios';
import { StoriesUrl, nav } from '../constants/nav';
import { StoriesRes, StoryItemRes } from '../constants/type';
import config from '../constants/config';

const { API_URL } = process.env;

export const getStoriesApi = async (
  url: StoriesUrl,
  page: number
): Promise<StoryItemRes> => {
  if (isNaN(page)) {
    page = 1;
  }
  const stories = await getRemoteStoriesApi(url || nav.top.api);
  const data = await getItemsApi(stories.data, page);
  return data;
};

export const getItemsApi = async (stories, page): Promise<StoryItemRes> => {
  const arrRequest = stories
    .slice(page, config.STORIES_PER_PAGE * page)
    .map(async (id) => {
      const item = await axios({
        method: 'GET',
        url: `${API_URL}/item/${id}.json`,
      });
      return item.data;
    });
  return await Promise.all(arrRequest);
};

export const getRemoteStoriesApi = (
  path: StoriesUrl
): Promise<AxiosResponse<StoriesRes>> => {
  return axios({
    method: 'GET',
    url: API_URL + path,
  });
};
