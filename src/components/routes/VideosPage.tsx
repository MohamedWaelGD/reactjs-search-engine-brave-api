import { useEffect, useState } from 'react'
import { VideoResult } from '../../models/Video.Model';
import Loading from '../Loading';

const VideosPage = (props: any) => {
  const [videoData, setVideoData] = useState<VideoResult>();
  const { search } = props;

  useEffect(() => {
      async function getImageResults() {
          try {
              setVideoData(undefined);

              const baseUrl = `https://youtube138.p.rapidapi.com/search/?q=${search}&hl=en&gl=EG`;
              const res = await fetch(baseUrl, {
                  headers: {
                      "x-rapidapi-key":
                          "64e90bbfb3msh3e1a137ffaf8c25p15700fjsnbb66b815b2bb",
                      "x-rapidapi-host": "youtube138.p.rapidapi.com",
                  },
              });

              const data = await res.json();
              if (data) {
                  setVideoData(data);
              }
          } catch (error) {
              console.error(error);
          }
      }

      getImageResults();
  }, [search]);

  return videoData ? (
      <div className="flex flex-wrap justify-center gap-5 container mx-auto">
          {videoData?.contents.map((data, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            {/* Video Thumbnail */}
            <img 
              src={data.video?.thumbnails[0].url} 
              alt={data.video?.title} 
              className="w-60 h-40"
            />
            
            <div className="p-4">
              {/* Video Title */}
              <h3 className="text-xl font-semibold mb-2 w-60">{data.video?.title}</h3>
              
              {/* Video Description */}
              <p className="text-gray-600 mb-4 w-60 text-ellipsis truncate">{data.video?.descriptionSnippet}</p>
              
              {/* Video Author */}
              <div className="flex items-center mb-4">
                <img 
                  src={data.video?.author.avatar[0].url} 
                  alt={data.video?.author.title} 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span className="font-medium">{data.video?.author.title}</span>
              </div>
              
              {/* Video Stats and Metadata */}
              <div className="text-gray-500 text-sm mb-4">
                <span className="block">{data.video?.stats.views.toLocaleString()} views</span>
                <span className="block">{Math.floor(data.video?.lengthSeconds! / 60)}m {data.video?.lengthSeconds! % 60}s</span>
                <span className="block">{data.video?.publishedTimeText}</span>
              </div>
              
              {/* Video Link */}
              <a 
                href={`https://www.youtube.com/watch?v=${data.video?.videoId}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                Watch Video
              </a>
            </div>
          </div>
          ))}
      </div>
  ) : (
      <Loading />
  );
};

export default VideosPage
