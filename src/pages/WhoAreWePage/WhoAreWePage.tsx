import { WhoWeAreContainer,
            Title,
            FaceContainer,
            ImageFace,
            TextContainer,
            TeamContainer,
            MemberTextContainer,
            NameText, 
            ListContainer,
            ListItem,
            Line } from "./WhoareWePage.styled";

import NicolasPicture from "assets/medias/Nicolas.jpg";
import YaelPicture from "assets/medias/yael.jpg";
import SoleilPicture from "assets/medias/soleil.jpg";
import { useTranslation } from "react-i18next";

export const WhoAreWePage = () => {
  const { t } = useTranslation();
  return (
    <WhoWeAreContainer>
        <Title>{t('who_are_we.title')}</Title>
        <TextContainer>{t('who_are_we.description')}</TextContainer>
        <FaceContainer>
            <TeamContainer>
                <ImageFace src={NicolasPicture} alt="Nicolas's Picture"></ImageFace>
                <MemberTextContainer>
                <NameText>{t('who_are_we.nicolas.name')}</NameText>
                    <ListContainer>
                        <ListItem>{t('who_are_we.nicolas.comp1')}</ListItem>
                        <ListItem>{t('who_are_we.nicolas.comp2')}</ListItem>
                        <ListItem>{t('who_are_we.nicolas.comp3')}</ListItem>
                        <ListItem>{t('who_are_we.nicolas.comp4')}</ListItem>
                        <ListItem>{t('who_are_we.nicolas.comp5')}</ListItem>
                        <ListItem>{t('who_are_we.nicolas.comp6')}</ListItem>
                    </ListContainer>
                </MemberTextContainer>
            </TeamContainer>
            <Line />
            <TeamContainer style={{justifyContent: 'flex-end'}}>
                <MemberTextContainer>
                <NameText>{t('who_are_we.sebastien.name')}</NameText>
                    <ListContainer>
                        <ListItem>{t('who_are_we.sebastien.comp1')}</ListItem>
                        <ListItem>{t('who_are_we.sebastien.comp2')}</ListItem>
                        <ListItem>{t('who_are_we.sebastien.comp3')}</ListItem>
                        <ListItem>{t('who_are_we.sebastien.comp4')}</ListItem>
                        <ListItem>{t('who_are_we.sebastien.comp5')}</ListItem>
                    </ListContainer>
                </MemberTextContainer>
                <ImageFace src={SoleilPicture} alt="Soleil's Picture"></ImageFace>
            </TeamContainer>
            <Line />
            <TeamContainer>
                <ImageFace src={YaelPicture} alt="Yael's Picture"></ImageFace>
                <MemberTextContainer>
                    <NameText>{t('who_are_we.yael.name')}</NameText>
                    <ListContainer>
                        <ListItem>{t('who_are_we.yael.comp1')}</ListItem>
                        <ListItem>{t('who_are_we.yael.comp2')}</ListItem>
                        <ListItem>{t('who_are_we.yael.comp3')}</ListItem>
                        <ListItem>{t('who_are_we.yael.comp4')}</ListItem>
                    </ListContainer>
                </MemberTextContainer>
            </TeamContainer>
        </FaceContainer>
    </WhoWeAreContainer>
  );
}