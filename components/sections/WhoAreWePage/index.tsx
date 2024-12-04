import { PageContainer, ContentContainer } from 'components/shared/Container';
import { Title, Text } from 'components/shared/Typography';
import { useTranslation } from "react-i18next";
import TeamCarousel from 'components/TeamCarousel';

export const WhoAreWePage = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      name: t('who_are_we.nicolas.name'),
      image: "/images/Nicolas.jpg",
      description: [
        t('who_are_we.nicolas.comp1'),
        t('who_are_we.nicolas.comp2'),
        t('who_are_we.nicolas.comp3'),
        t('who_are_we.nicolas.comp4')
      ]
    },
    {
      id: 2,
      name: t('who_are_we.sebastien.name'),
      image: "/images/soleil.jpg",
      description: [
        t('who_are_we.sebastien.comp1'),
        t('who_are_we.sebastien.comp2'),
        t('who_are_we.sebastien.comp3'),
        t('who_are_we.sebastien.comp4')
      ]
    },
    {
      id: 3,
      name: t('who_are_we.yael.name'),
      image: "/images/yael.jpg",
      description: [
        t('who_are_we.yael.comp1'),
        t('who_are_we.yael.comp2'),
        t('who_are_we.yael.comp3'),
        t('who_are_we.yael.comp4')
      ]
    }
  ];

  return (
    <PageContainer id="about" $paddingTop={{mobile:"18%"}}>
      <ContentContainer $height="100%" $gap="2%" $width={{mobile:"100%"}}>
        <ContentContainer $height={{desktop:"40%", tablet:"60%", mobile:"30%"}} $justify="center" $gap="5%">
            <Title $margin="2% 0">{t('who_are_we.title')}</Title>
            <Text>{t('who_are_we.description')}</Text>
        </ContentContainer>
        <TeamCarousel members={teamMembers} />
      </ContentContainer>
    </PageContainer>
  );
};