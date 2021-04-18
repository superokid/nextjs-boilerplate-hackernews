import { useRouter } from 'next/router';
import { Stories as IStories } from '../constants/type';
import config from '@constants/config';
import { ButtonLink } from '@components/Button';

interface Props {
  stories?: IStories;
  isLoading: boolean;
}

const Stories = ({ stories = [], isLoading = true }: Props) => {
  if (isLoading) {
    return <div>loading...</div>;
  }
  const router = useRouter();
  const currentPage = router.query.page
    ? parseInt(router.query.page as string, 10)
    : 1;

  const path = router.pathname.replace('[page]', `${currentPage + 1}`);
  return (
    <div>
      <ol start={(currentPage - 1) * config.STORIES_PER_PAGE + 1}>
        {stories.map((item) => {
          return <li key={item?.id}>{item?.title}</li>;
        })}
      </ol>
      {!!stories.length && (
        <ButtonLink href={path} as={path}>
          More
        </ButtonLink>
      )}
    </div>
  );
};

export default Stories;
