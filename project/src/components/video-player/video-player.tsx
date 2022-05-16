//import {Film} from '../../mocks/films';
//import {useEffect, useRef, useState} from 'react';
import {useRef, useEffect} from 'react';
//import Timeout = NodeJS.Timeout;

type videoPlayerProps = {
  src: string,
  image: string,
}

function VideoPlayer (props:videoPlayerProps) {
  /*const [isLoading, setIsLoading] = useState(true);
  // состояние о наличии или отсутствии процесса воспроизведения (воспроизводиться сейчас видео или нет)
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      // подписка на событие, когда загрузка видео не ведется, завершена
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if (videoRef.current !== null) {
        // обнуление подписки на событие загрузки видео
        videoRef.current = null;
      }
    };

  }, [props.src]);*/
  {/*
  useEffect(() => {
    if (videoRef === null) {
      return;
    }

    //не уверен, что условие здесь описано верно
    if (isPlaying || isLoading) {
      videoRef.current?.play();
    }

    videoRef.current?.pause();

  }, [isPlaying]);
*/}


  /*const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    console.log('vidRef', videoRef.current.play);
  }, [videoRef]);

  return (
    <div className='small-film-card__image' /!*onMouseEnter={() => {setIsPlaying(true);}}*!/>
      <video ref={videoRef} poster={props.image} onMouseOver={() => {
        if (!videoRef.current) {
          return;
        }

        videoRef.current?.play();
      }} onMouseDown={() => {
        if (!videoRef.current) {
          return;
        }

        videoRef.current?.pause();
      }} width='210'
      >
        <source src={props.src} type='video/mp4'/>
      </video>
    </div>
  );*/

  /*type MutableRefObject = {
    current: ReturnType<typeof setTimeout>
  }*/

  //type Type = typeof Timeout;
  type Type = any;

  const mutableRefObject: React.MutableRefObject<Type | null> = useRef<Type | null>(null);

  const vidRef = useRef <HTMLVideoElement | null>(null);

  /*const playTimeout = () => {
    const id = setTimeout(() => {vidRef.current?.play();}, 1000);
    mutableRefObject.current = id;
  };*/

  /*useEffect(() => {
    if (isOut) {
      clearTimeout(mutableRefObject.current);
    }
  }, [isOut]);*/

  useEffect(() => {

    if (!vidRef.current) {
      //return;
    }

  }, [vidRef]);

  return (
    <video
      onMouseOver={() => {
        if (!vidRef.current) {
          return;
        }

        let id: ReturnType<typeof setTimeout>;
        id = setTimeout(() => {vidRef.current?.play();}, 1000);
        mutableRefObject.current = id;
        //playTimeout();
      }}
      onMouseOut={() => {
        if (!vidRef.current) {
          return;
        }
        clearTimeout(mutableRefObject.current);
        vidRef.current.pause();
        vidRef.current?.load();
      }}
      ref={vidRef}
      width="270"
      //controls
      muted
      poster={props.image}
    >
      <source
        src={props.src}
        type="video/mp4"
      />
    </video>
  );

}

export default VideoPlayer;
