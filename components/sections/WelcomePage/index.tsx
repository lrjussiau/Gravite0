// WelcomePage.tsx
import LanguageSelector from "components/Language";
import { ButtonContainer, VideoBackgroundWrapper } from "./welcomePage.styled";
import { DiscoverButton } from "components/DiscoverButton";
import WhatsAppButton from "components/WhatsApp/WhatsApp";
import { PageContainer } from 'components/shared/Container';
import { useEffect, useRef } from 'react';

export const WelcomePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Autoplay le video quand le composant est monté
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <PageContainer id="welcome" $paddingTop="0" $backgroundColor="black">
        <VideoBackgroundWrapper>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster="/path-to-fallback-image.jpg" // Une image de fallback pendant le chargement
          >
            <source src="/videos/background.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </VideoBackgroundWrapper>
      <ButtonContainer>
        <LanguageSelector />
        <DiscoverButton />
        <WhatsAppButton />
      </ButtonContainer>
    </PageContainer>
  );
}