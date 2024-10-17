import { DiscoverButtonContainer, TextDiscover } from "./DiscoverButton.styled";
import { useSnapScroll } from "../../utils/useSnapScroll";
import { useTranslation } from 'react-i18next';

export const DiscoverButton = () => {
    const { currentSection } = useSnapScroll();
    const { t } = useTranslation();

    const scrollToSection = (sectionIndex: number) => {
      const section = document.getElementById(`section-${sectionIndex}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    const handleClick = () => {
      const nextSection = currentSection + 1;
      scrollToSection(nextSection);
    };

    return (
        <DiscoverButtonContainer onClick={handleClick}>
            <TextDiscover>{t('welcome.decouvrir')}</TextDiscover>
        </DiscoverButtonContainer>
    );
}