import Stories from '@components/Stories';
import { nav } from '@constants/nav';
import { staticPropsFetcher } from '@helpers/staticProps';

export const getStaticProps = async ({ params }) => {
  return staticPropsFetcher(params, nav.top.api);
};

export const getStaticPaths = async () => {
  return {
    fallback: true,
    paths: [
      { params: { page: '1' } },
      { params: { page: '2' } },
      { params: { page: '3' } },
    ],
  };
};

export default Stories;
