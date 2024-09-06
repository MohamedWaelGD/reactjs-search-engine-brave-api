import React, { useEffect, useState } from 'react'
import { ImageRequest } from '../../models/Image.Model';
import Loading from '../Loading';

const ImagesPage = (props: any) => {
  const [imageData, setImageData] = useState<ImageRequest>();
  const { search } = props;

  useEffect(() => {
      async function getImageResults() {
          try {
              setImageData(undefined);

              const baseUrl = `https://real-time-image-search.p.rapidapi.com/search?query=${search || 'games'}&limit=20&size=any&color=any&type=any&time=any&usage_rights`;
              const res = await fetch(baseUrl, {
                  headers: {
                      "x-rapidapi-key":
                          "64e90bbfb3msh3e1a137ffaf8c25p15700fjsnbb66b815b2bb",
                      "x-rapidapi-host": "real-time-image-search.p.rapidapi.com",
                  },
              });

              const data = await res.json();
              if (data) {
                  setImageData(data);
              }
          } catch (error) {
              console.error(error);
          }
      }

      getImageResults();
  }, [search]);

  return imageData ? (
      <div className="flex flex-wrap gap-5 container mx-auto">
          {imageData?.data.map((data, index) => (
            <a href={data.source_url}>
              <img src={data.thumbnail_url} className="h-40 object-cover w-72" />
              <p className="text-slate-400 hover:underline text-sm truncate text-ellipsis w-72">{data.title}</p>
            </a>
          ))}
      </div>
  ) : (
      <Loading />
  );
};

export default ImagesPage
