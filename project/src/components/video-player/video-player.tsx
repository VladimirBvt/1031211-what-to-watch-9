//import {Film} from '../../mocks/films';
import {useEffect, useRef, useState} from 'react';

type videoPlayerProps = {
  src: string,
  image: string,
}

function VideoPlayer (props:videoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
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

  }, [props.src]);

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

  return (
    <div className='small-film-card__image' onMouseEnter={() => {setIsPlaying(true);}}>
      <video ref={videoRef} poster={props.image}>
        <source src={props.src} type='video/mp4'/>
      </video>
    </div>
  );
}

export default VideoPlayer;
