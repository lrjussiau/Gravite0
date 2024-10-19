import { TamdemPageContainer,
            Content,
            LeftPart,
            RightPart,
            Title,
            Text, 
            Image,
            ImageContainer } from "./tamdemPage.styled";
import { BoxChoiceFlight } from "./BoxChoiceFlight";
import ImagePara from "assets/medias/para-1.jpg";
import { useTranslation } from "react-i18next";

export const TamdemPage = () => {
  const { t } = useTranslation();
  return (
    <TamdemPageContainer>
        <Content>
            <LeftPart>
                <ImageContainer>
                    <Image src={ImagePara} alt="Paraglinding Picture"></Image>
                </ImageContainer>
                <Title>{t('tamdem.title')}</Title>
                <Text>{t('tamdem.description')}</Text>
            </LeftPart>
            <RightPart>
                <BoxChoiceFlight />
            </RightPart>
        </Content>
    </TamdemPageContainer>
  );
}
