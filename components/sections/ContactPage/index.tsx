import { Footer, ItemPlacer, ItemWrapper, IconWrapper, RightContent, ButtonWrapper, Content } from "./ContactPage.styled";
import ContactMap from "components/Map";
import { ContactForm } from "components/MailForm";
import { SubTitle, Text } from 'components/shared/Typography';
import { PageContainer, ContentContainer} from 'components/shared/Container';
import { colors } from "styles/color";
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import Link from 'next/link';
import useDeviceDetect from "utils/DeviceDetect";

export const ContactPage = () => {
    const position: [number, number] = [46.079220, 7.215883];
    const zoom = 13;
    const { t } = useTranslation();
    const [showMailForm, setShowMailForm] = useState(false);
    const { isDesktop } = useDeviceDetect();
    const iconSize = isDesktop? 32 : 16;

    const handleMessageClick = () => {
        setShowMailForm(true);
    };

    const handleBack = () => {
        setShowMailForm(false);
    };

    return (
        <PageContainer id="contact" $paddingTop={{mobile:"15%", tablet:"23%"}}>
            <ContentContainer $direction={{desktop:"row", mobile:"column-reverse"}} $height="80%">
                <ContentContainer $width="100%" $height={{mobile:"20%"}}>
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
                    <Content $visible={!showMailForm}>
                        <ContentContainer $width="100%" $gap="5%">
                            <ContentContainer $height="auto" $width="100%">
                                <SubTitle>{t('contact.title')}</SubTitle>
                                <Text $align="justify">{t('contact.description')}</Text>
                            </ContentContainer>
                            <ContentContainer $width="100%" $gap="4%">
                                <ButtonWrapper onClick={handleMessageClick}>
                                    <Image src="/images/icons/message.png" alt="Message Icon" width={iconSize} height={iconSize} />
                                    <Text color={colors.text.light}>{t('contact.message')}</Text>
                                </ButtonWrapper>
                                <ButtonWrapper onClick={() => window.location.href = 'tel:+41782499015'}>
                                    <Image src="/images/icons/telephone.png" alt="Phone Icon" width={iconSize} height={iconSize} />
                                    <Text color={colors.text.light}>{t('contact.phone')}</Text>
                                </ButtonWrapper>
                                <ButtonWrapper onClick={() => window.location.href = 'mailto:lr.jussiaume@gmail.com'}>
                                    <Image src="/images/icons/email.png" alt="Email Icon" width={iconSize} height={iconSize} />
                                    <Text color={colors.text.light}>{t('contact.email')}</Text>
                                </ButtonWrapper>
                                <ButtonWrapper onClick={() => window.location.href = 'https://wa.me/41782499015'}>
                                    <Image src="/images/icons/whatsapp.png" alt="WhatsApp Icon" width={iconSize} height={iconSize} />
                                    <Text color={colors.text.light}>{t('contact.whatsapp')}</Text>
                                </ButtonWrapper>
                            </ContentContainer>
                        </ContentContainer>
                    </Content>
                    <ContactForm isVisible={showMailForm} onBack={handleBack} />
                </RightContent>
            </ContentContainer>
            <Footer>
                <Link href="/login">login</Link>
            </Footer>
        </PageContainer>
    );
};