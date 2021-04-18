import { NextApiRequest, NextApiResponse } from 'next';
import { StoriesUrl } from '@constants/nav';
import { getStoriesApi } from '@helpers/api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const page = parseInt(req.query.page as string, 10);
  const path = req.query.path as StoriesUrl;
  try {
    const data = await getStoriesApi(path, page);

    res.status(200).json({
      data,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

export default handler;
