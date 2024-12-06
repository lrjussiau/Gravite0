import { ImageContainer, ImageBackground, TopTitleContainer, BottomTextContainer, BoxContainerWrapper, HoverTitle, ContactButton} from "./tamdemPage.styled";
import { useTranslation } from "react-i18next";
import ScrollDownButton from "components/ScrollDownButton";
import Image from 'next/image';
import { Title, SubTitle, Text } from 'components/shared/Typography';
import { PageContainer, ContentContainer, BoxContainer } from 'components/shared/Container';
import { ResponsiveText } from "components/shared/ResponsiveText";
import { HorizontalLine } from "components/shared/Line/Line.styled";
import { colors } from "styles/color";
import { Carousel } from 'components/Carousel';

export const TamdemPage = () => {
  const { t } = useTranslation();

  const handleContactClick = () => {
    const sections = Array.from(document.querySelectorAll('section'));
    const lastSection = sections[sections.length - 1];
    lastSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const slides = [
    <BoxContainer key="flight1" $width={{desktop:'100%', mobile:'80%'}} $backgroundColor="transparent" $shadow>
        <BoxContainerWrapper>
            <ImageBackground>
                <Image
                src="/images/para_background.jpg"
                alt="Paraglinding Picture"
                fill
                style={{ objectFit: 'cover' }}
                />
            </ImageBackground>
            <TopTitleContainer className="hover-container">
                <Text color={colors.background} $fontWeight="900" $align="center">{t('tamdem.biplace')}</Text>
            </TopTitleContainer>
            <HoverTitle className="hover-title">
                <Text $fontSize="1.8rem" color="white" $fontWeight="900">{t('tamdem.choice')}</Text>
            </HoverTitle>
            <BottomTextContainer className="hover-container">
                <ContentContainer $width="100%" $justify="space-around">
                    <Text $fontSize={{desktop:'1.8rem'}} color={colors.primaryHover} $margin="1% 0" $centered>{t('tamdem.time_biplace')}</Text>
                    <Text color={colors.text.light} $centered>{t('tamdem.price_biplace')}</Text>
                    <ContactButton onClick={handleContactClick}>
                        {t('tamdem.nous_contacter')}
                    </ContactButton>
                </ContentContainer>
            </BottomTextContainer>
        </BoxContainerWrapper>
    </BoxContainer>,
    <BoxContainer key="flight2" $width={{desktop:'100%', mobile:'80%'}} $backgroundColor="transparent" $shadow>
        <BoxContainerWrapper>
            <ImageBackground>
                <Image
                src="/images/para_background_2.jpg"
                alt="Paraglinding Picture"
                fill
                style={{ objectFit: 'cover' }}
                />
            </ImageBackground>
            <TopTitleContainer className="hover-container">
                <Text color={colors.background} $fontWeight="900" $align="center">{t('tamdem.extreme')}</Text>            </TopTitleContainer>
            <HoverTitle className="hover-title">
                <Text $fontSize="1.8rem" color="white" $fontWeight="900">{t('tamdem.choice')}</Text>
            </HoverTitle>
            <BottomTextContainer className="hover-container">
                <ContentContainer $width="100%" $justify="space-around">
                    <Text $fontSize={{desktop:'1.8rem'}} color={colors.primaryHover} $margin="1% 0" $centered>{t('tamdem.time_extreme')}</Text>
                    <Text color={colors.text.light} $centered>{t('tamdem.price_extreme')}</Text>
                    <ContactButton onClick={handleContactClick}>
                        {t('tamdem.nous_contacter')}
                    </ContactButton>
                </ContentContainer>
            </BottomTextContainer>
        </BoxContainerWrapper>
    </BoxContainer>,
  ];

  return (
    <PageContainer id="tandem" $paddingTop={{mobile:"20%"}}>
        <ContentContainer $height={{desktop: '87%', mobile: '100%'}} $width={{desktop:"70%"}}>
            <ContentContainer $direction={{mobile:"column", desktop:"row"}} $width="100%" $gap="1%" $justify="flex-end">
                <ContentContainer $width={{mobile:"90%", desktop:"50%"}} $justify="flex-end" $height={{desktop: "100%",mobile:"33%"}}>
                    <ImageContainer>
                        <Image 
                            src="/images/para-1.jpg"
                            alt="Paraglinding Picture"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </ImageContainer>
                    <ContentContainer $height={{tablet:"45%", desktop:"50%"}} $width="100%" $gap="5%" $justify="center">
                        <Title $fontSize={{desktop:"2rem"}}>{t('tamdem.title')}</Title>
                        <HorizontalLine $width="50%" $height="2px" $color={colors.primary} $margin="0 0px"/>
                        <ResponsiveText $align="justify" $desktop={t('tamdem.description.desktop')} $mobile={t('tamdem.description.mobile')} />
                        <HorizontalLine $width="50%" $height="2px" $color={colors.primary} $margin="0px"/>
                    </ContentContainer>
                </ContentContainer>
                <ContentContainer $height={{mobile:"90%"}} $width={{desktop:"50%", mobile:"90%"}}>
                    <Carousel 
                        $slides={slides}
                        $height="99%"
                        $width="100%"
                        $mobileWidth="90%"
                        $autoPlay={false}
                        $dots={true}
                    />
                </ContentContainer>
            </ContentContainer>
        </ContentContainer>
        <ContentContainer $height={{desktop: '13%', tablet:'0%', mobile: '0%'}} $justify="center">
            <ScrollDownButton />
        </ContentContainer>
    </PageContainer>
  );
}
