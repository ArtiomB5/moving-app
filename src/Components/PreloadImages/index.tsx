import React, { Dispatch, FC, SetStateAction } from 'react';

interface IPreloadImages {
  urlsArray: string[],
  preloadSetter: Dispatch<SetStateAction<boolean[]>>
}

export const PreloadImages:FC<IPreloadImages> = ({urlsArray, preloadSetter}) => {
  const onLoadhandler = (index: number) => preloadSetter((pv: boolean[]) => {
    const urlsStatus = [...pv];
    urlsStatus[index] = true;
    return urlsStatus;
  })
  return (
    <>
      {urlsArray.map((url, index) => <img src={url} key={url} alt={""} style={{width: "0.01px", height: "0.01px", padding: "0px", margin: "0px"}} onLoad={() => onLoadhandler(index)}/>)}
    </>
  );
}