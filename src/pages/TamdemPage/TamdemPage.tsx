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

export const TamdemPage = () => {
  return (
    <TamdemPageContainer>
        <Content>
            <LeftPart>
                <ImageContainer>
                    <Image src={ImagePara} alt="Paraglinding Picture"></Image>
                </ImageContainer>
                <Title>Voler, un rêve !</Title>
                <Text>Tout le monde a déjà regardé le ciel avec l'envie de voler…
Avec nous, c'est possible! Tous les jours de l'année, des pilotes professionnels se chargent de faire de ton rêve une réalité.
Les vols s'effectuent des Ruinettes ou de la Croix de Cœur. Après 20 à 25 minutes d'un vol inoubliable, ton pilote te déposera au Châble, d'où tu ne regarderas plus jamais le ciel de la même façon.</Text>
            </LeftPart>
            <RightPart>
                <BoxChoiceFlight />
            </RightPart>
        </Content>
    </TamdemPageContainer>
  );
}
