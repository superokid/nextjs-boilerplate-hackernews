import Stories from '@components/Stories';
import { nav } from '@constants/nav';
import { staticPropsFetcher, staticPathsOptions } from '@helpers/staticProps';

export const getStaticProps = async ({ params }) => {
  return staticPropsFetcher(params, nav.new.api);
};

export const getStaticPaths = async () => {
  return staticPathsOptions;
};

export default Stories;
