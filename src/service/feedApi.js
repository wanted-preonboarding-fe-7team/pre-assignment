const BASE_FILE_PATH = 'data/feedData.json';

const getFeedData = async () => {
  try {
    const response = await fetch(BASE_FILE_PATH);

    if (!response.ok) {
      throw new Error('feed 데이터를 가져오는 데 실패했습니다.');
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export default getFeedData;
