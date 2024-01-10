import httpClient from '../api/httpClient';

const photoService = {
  async getAll(page: number = 1) {
    const {data} = await httpClient.get('/photos', {
      params: {
        page,
      },
    });

    return data;
  },
};

export default photoService;
