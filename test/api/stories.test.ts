import { createMocks } from 'node-mocks-http';
import getStories from '@pages/api/stories';

describe('/api/stories', () => {
  test('invalid path', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        page: '200',
        path: '/ast.json',
      },
    });

    await getStories(req, res);

    expect(res._getStatusCode()).toBe(500);
  });

  test('invalid page return first page data', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        page: 'asdfs',
      },
    });

    await getStories(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        data: expect.any(Object),
      })
    );
  });

  test('return correct data & page', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        page: '5',
      },
    });

    await getStories(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        data: expect.any(Object),
      })
    );
  });
});
