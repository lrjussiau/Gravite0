import { Footer, ItemPlacer, ItemWrapper, IconWrapper, RightContent, ButtonWrapper } from "./ContactPage.styled";
import ContactMap from "../../components/Map";
import ContactForm from "../../components/MailForm";
import { useTranslation } from "react-i18next";
import { SubTitle, Text } from 'components/shared/Typography';
import { PageContainer, ContentContainer } from 'components/shared/Container';
import { colors } from "styles/color";
import { Mail, Phone, MapPin} from 'lucide-react';
import { ResponsiveText } from "components/shared/ResponsiveText";
import { useState, useEffect } from "react";
import { BREAKPOINTS } from "utils/DeviceDetect";

export const ContactPage = () => {
    const position: [number, number] = [46.079220, 7.215883]; // Coordonnées sous forme de tableau
    const zoom = 13;
    const { t } = useTranslation();

    const [iconSize, setIconSize] = useState(40);

    useEffect(() => {
      const handleResize = () => {
        setIconSize(window.innerWidth <= BREAKPOINTS.mobile ? 30 : 40);
      };
      
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <PageContainer id="contact" $paddingTop={{mobile:"23%", tablet:"23%"}}>
            <ContentContainer $direction={{desktop:"row", tablet:"row"}}>
                <ContentContainer $width="100%">
                    <ContactMap position={position} zoom={zoom} />
                    <ItemPlacer>
                        <ItemWrapper>
                            <IconWrapper>
                                <Mail size={20} color={colors.background} />
                            </IconWrapper>
                            <Text color={colors.background}>info@gravite0.ch</Text>
                        </ItemWrapper>
                        <ItemWrapper>
                            <IconWrapper>
                                <Phone size={20} color={colors.background} />
                            </IconWrapper>
                            <Text color={colors.background}>+41 79 793 21 46</Text>
                        </ItemWrapper>
                        <ItemWrapper>
                            <IconWrapper>
                                <MapPin size={20} color={colors.background} />
                            </IconWrapper>
                            <Text color={colors.background}>Rte de Montagnier 20, 1934 Le Châble</Text>
                        </ItemWrapper>
                    </ItemPlacer>
                </ContentContainer>
                <RightContent>
                    <ContactForm />
                    <ContentContainer $justify="center" $width="100%">
                        <ResponsiveText $mobile="Contact nous !" $desktop="Ou par mail/telephone" $fontSize="1.5rem" color={colors.primary} $fontWeight='700' $align="center"></ResponsiveText>
                        <ContentContainer $direction="row" $height={{desktop:"100%", tablet:"50%", mobile:"50%"}} $width="100%" $justify="space-around">
                            <ButtonWrapper>
                                <Mail size={iconSize} color={colors.primary} />
                            </ButtonWrapper>
                            <ButtonWrapper>
                                <Phone size={iconSize} color={colors.primary} />
                            </ButtonWrapper>
                        </ContentContainer>
                    </ContentContainer>
                </RightContent>
            </ContentContainer>
            <Footer>
            </Footer>
        </PageContainer>
    );
}