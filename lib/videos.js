export const getCommonVideos = async (url) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  const BASE_URL = "https://youtube.googleapis.com/youtube/v3";
  

  try {
    const response = await fetch(`${BASE_URL}/${url}&key=${YOUTUBE_API_KEY}`);
    // https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${YOUTUBE_API_KEY}
    const data = await response.json();
    if (data?.error) {
      console.error("Youtube API error", data.error);
      return [];
    }

    return data?.items.map((item) => {
      return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id: item?.id?.videoId !== undefined ? item?.id?.videoId : null,
      };
    });
  } catch (error) {
    console.log(error, error.message);
  }
};

export const getVideos = (searchQuery) => {
  const URL = `search?part=snippet&maxResults=25&q=${searchQuery}`;
  return getCommonVideos(URL);
};
