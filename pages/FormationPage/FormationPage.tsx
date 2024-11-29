import { useTranslation } from "react-i18next";
import { Title, SubTitle, Text } from 'components/shared/Typography';
import { PageContainer, ContentContainer } from 'components/shared/Container';
import { Carousel } from 'components/Carousel';
import { ImageContainer, ColorBox, BoxText, VerticalText } from "./FormationPage.styled";
import { VerticalLine, HorizontalLine } from "components/shared/Line/Line.styled";
import Image from 'next/image';
import { colors } from "styles/color";
import { ResponsiveText } from "components/shared/ResponsiveText";


export const FormationPage = () => {
  const { t } = useTranslation();

  const slides = [
    <ContentContainer key="stage1" $width={{desktop:"100%", tablet:"100%", mobile:"100%"}} $direction={{desktop:"row"}} $gap={{desktop:"4%", mobile:"0"}}>
      <ImageContainer>
        <Image 
          src="/images/Para-stage1.png"
          alt="Paragliding Picture"
          fill
          style={{ objectFit: 'cover' }}
        />
        <BoxText>
          <VerticalText>STAGE 1</VerticalText>
        </BoxText>
      </ImageContainer>
      <ContentContainer $width={{desktop:"50%", mobile:"100%"}} $justify="center" $height={{tablet:"50%", mobile:"50%"}} $padding={{mobile:"0 5%"}}>
        <ResponsiveText $align="justify" $desktop={t('formation.stage1.desktop')} $mobile={t('formation.stage1.mobile')} />
      </ContentContainer>
    </ContentContainer>,
    <ContentContainer key="stage2" $width={{desktop:"100%", tablet:"100%", mobile:"100%"}} $direction={{desktop:"row"}} $gap={{desktop:"4%", mobile:"0"}}>
      <ImageContainer>
        <Image 
          src="/images/Para-stage2.png"
          alt="Paragliding Picture"
          fill
          style={{ objectFit: 'cover' }}
        />
        <BoxText>
          <VerticalText>STAGE 2</VerticalText>
        </BoxText>
      </ImageContainer>
      <ContentContainer $width={{desktop:"50%", mobile:"100%"}} $justify="center" $height={{tablet:"50%", mobile:"50%"}} $padding={{mobile:"0 5%"}}>
        <ResponsiveText $align="justify" $desktop={t('formation.stage2.desktop')} $mobile={t('formation.stage2.mobile')} />
      </ContentContainer>
    </ContentContainer>,
  ];

  return (
    <PageContainer id="formation" $paddingTop={{mobile:"23%"}}>
      <ContentContainer $justify="space-around" $direction={{mobile:"column-reverse"}} $width="100%">
        <ContentContainer $justify="center" 
                          $height={{desktop:'50%', tablet:"50%", mobile:'40%'}} 
                          $width="100%"
                          $gap="8%"
                          $padding={{mobile:"0 0 10% 0"}}>
                          
          <Title>{t('formation.title')}</Title>
          <ColorBox>
            <ContentContainer $width={{desktop:"60%", mobile:"80%"}} $justify="center">
              <ResponsiveText $align="justify" color={colors.background} $desktop={t('formation.description.desktop')} $mobile={t('formation.description.mobile')}/>
            </ContentContainer>
          </ColorBox>

        </ContentContainer>
        <ContentContainer $height={{desktop:"100%", mobile:"60%"}} $width={{desktop:"70%", mobile:"100%"}} $padding={{desktop:"2%", mobile:"0% 2% 2%"}} $justify="center">
          <Carousel 
            $slides={slides}
            $height="350px"
            $width="100%"
            $mobileWidth="85%"
            $autoPlay={false}
            $dots={true}
          />
        </ContentContainer>
      </ContentContainer>
    </PageContainer>
  );
};
