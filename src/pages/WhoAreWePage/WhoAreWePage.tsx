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

export const WhoAreWePage = () => {
  return (
    <WhoWeAreContainer>
        <Title>Qui sommes-nous ?</Title>
        <TextContainer>Notre structure compte 2 instructeurs. Sébastien Bruchez (dit soleil) et moi, Nicolas Terrettaz. Mais ce n'est pas tout, nous avons encore UNE instructeur, Yael Margelisch. Toute cette joyeuse équipe est la pour faire de votre rêve VOLER une réalité.</TextContainer>
        <FaceContainer>
            <TeamContainer>
                <ImageFace src={NicolasPicture} alt="Nicolas's Picture"></ImageFace>
                <MemberTextContainer>
                <NameText>Nicolas Terrettaz</NameText>
                    <ListContainer>
                        <ListItem>Instructeur de parapente OFAC</ListItem>
                        <ListItem>Pilote parapente biplace professionnel</ListItem>
                        <ListItem>Plieur de parachutes de secours pour parapente</ListItem>
                        <ListItem>Instructeur suisse de ski, ISSA</ListItem>
                        <ListItem>Instructeur suisse de télémark, ISSA</ListItem>
                        <ListItem>Ebéniste de formation</ListItem>
                    </ListContainer>
                </MemberTextContainer>
            </TeamContainer>
            <Line />
            <TeamContainer style={{justifyContent: 'flex-end'}}>
                <MemberTextContainer>
                <NameText>Sébastien Bruchez</NameText>
                    <ListContainer>
                        <ListItem>Instructeur de parapente</ListItem>
                        <ListItem>Pilote parapente biplace professionnel</ListItem>
                        <ListItem>Plieur de parachutes de secours pour parapente</ListItem>
                        <ListItem>Instructeur de speedfliying</ListItem>
                        <ListItem>Poly-mécanicien de formation</ListItem>
                    </ListContainer>
                </MemberTextContainer>
                <ImageFace src={SoleilPicture} alt="Soleil's Picture"></ImageFace>
            </TeamContainer>
            <Line />
            <TeamContainer>
                <ImageFace src={YaelPicture} alt="Yael's Picture"></ImageFace>
                <MemberTextContainer>
                    <NameText>Yael Margelisch</NameText>
                    <ListContainer>
                        <ListItem>Pilote parapente biplace professionnel</ListItem>
                        <ListItem>Plieur de parachutes de secours pour parapente</ListItem>
                        <ListItem>Instructeur suisse de ski ISSA</ListItem>
                        <ListItem>Instructeur parapente OFAC</ListItem>
                    </ListContainer>
                </MemberTextContainer>
            </TeamContainer>
        </FaceContainer>
    </WhoWeAreContainer>
  );
}