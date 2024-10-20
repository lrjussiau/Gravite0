import { FormationPageContainer,
            FormationPageBackground,
            BoxsContainer,
            Box,
            BoxTitle,
            BoxText,
            Title, 
            Text,
            Link
 } from "./FormationPage.styled";
import { useTranslation } from "react-i18next";

export const FormationPage = () => {
  const { t } = useTranslation();
  return (
    <FormationPageBackground>
        <FormationPageContainer>
        <Title>{t('formation.title')}</Title>
        <Text>{t('formation.description')}</Text>
        <BoxsContainer>
            <Box>
                <BoxTitle>{t('formation.stage1.title')}</BoxTitle>
                <BoxText>{t('formation.stage1.text1')}</BoxText>
                <BoxText>{t('formation.stage1.text2')}</BoxText>
                <BoxText>{t('formation.stage1.text3')}</BoxText>
                <BoxText>{t('formation.stage1.text4')}</BoxText>
                <BoxText>{t('formation.stage1.price')}</BoxText>
                <BoxText>{t('formation.stage1.material')}</BoxText>
            </Box>
            <Box>
                <BoxTitle>{t('formation.stage2.title')}</BoxTitle>
                <BoxText>{t('formation.stage2.text1')}</BoxText>
                <BoxText>{t('formation.stage2.price')}</BoxText>
                <BoxText>{t('formation.stage2.material')}</BoxText>
                <BoxText>{t('formation.stage2.text2')}</BoxText>
            </Box>
            <Box>
                <BoxTitle>{t('formation.link.title')}</BoxTitle>
                <Link href="https://www.meteosuisse.admin.ch/#tab=forecast-map" target="_blank">{t('formation.link.link1')}</Link>
                <Link href="https://www.rts.ch/meteo/" target="_blank">{t('formation.link.link2')}</Link>
                <Link href="https://meteo-parapente.com/#/" target="_blank">{t('formation.link.link3')}</Link>
                <Link href="https://www.parapente-verbier.ch/" target="_blank">{t('formation.link.link4')}</Link>
                <Link href="https://www.shv-fsvl.ch/" target="_blank">{t('formation.link.link5')}</Link>
                <Link href="https://verbier4vallees.ch/fr" target="_blank">{t('formation.link.link6')}</Link>
            </Box>
        </BoxsContainer>
        </FormationPageContainer>
    </FormationPageBackground>
  );
}   