import { useRouter } from 'next/router';
import Link from 'next/link';
import { getStoriesApi } from '@helpers/api';
import { nav } from '@constants/nav';
import config from '@constants/config';

const App = ({ posts }) => {
  const router = useRouter();
  const currentPage = router.query.page
    ? parseInt(router.query.page as string, 10)
    : 1;

  return (
    <div>
      <Link href="/top/[page]" as={`/top/${currentPage + 1}`}>
        <a>Go to page {currentPage + 1}</a>
      </Link>
      {JSON.stringify(posts)}
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const page = params?.page || 1;
  const data = await getStoriesApi(nav.top.api, page);
  return {
    props: { posts: data },
    revalidate: config.REVALIDATE_API_AFTER,
  };
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

export default App;
