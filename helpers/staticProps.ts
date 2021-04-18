import { StoriesUrl } from '@constants/nav';
import config from '@constants/config';
import { getStoriesApi } from '@helpers/api';

// incremental build page every new request
export const staticPropsFetcher = async (params, path: StoriesUrl) => {
  const page = params?.page || 1;
  const data = await getStoriesApi(path, page);
  return {
    props: { stories: data, isLoading: false },
    revalidate: config.REVALIDATE_API_AFTER,
  };
};

// prefetch all first page
export const staticPathsOptions = {
  fallback: true,
  paths: [{ params: { page: '1' } }],
};
