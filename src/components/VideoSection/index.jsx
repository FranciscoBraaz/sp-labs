import React from 'react';
import './styles.scss';

export function VideoSection() {
  return (
    <section className="video-section">
      <div className="container">
        <div className="video-section__content">
          <div className="video-section__container-text">
            <h3 className="video-section__title">
              Quem são, o que fazem, onde vivem?
            </h3>
            <p className="video-section__description">
              Não precisa embedar o vídeo do Rick Astley Remastered 4K 60 FPS,
              pode ser qualquer outro vídeo da sua escolha, mas queremos dar
              play.
            </p>
          </div>
          <iframe
            className="video-section__iframe"
            title="Video"
            src="https://www.youtube.com/embed/MAephq7gfpU"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
