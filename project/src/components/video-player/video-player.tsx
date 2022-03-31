//import {Film} from '../../mocks/films';
//import {useEffect, useRef, useState} from 'react';
import {useRef, useEffect} from 'react';

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

  const vidRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!vidRef.current) {
      //return;
    }

    //console.log('vidRef', vidRef.current);
  }, [vidRef]);

  return (
    <video
      onMouseOver={() => {
        if (!vidRef.current) {
          return;
        }

        vidRef.current.play();
      }}
      onMouseDown={() => {
        if (!vidRef.current) {
          return;
        }

        vidRef.current.pause();
      }}
      onMouseOut={() => {
        if (!vidRef.current) {
          return;
        }

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
