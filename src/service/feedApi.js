const getFeedData = async () => {
  try {
    const response = await fetch('data/feedData.json').then((data) =>
      data.json()
    );
    return response;
  } catch (error) {
    console.dir(error);
  }
};

export default getFeedData;
