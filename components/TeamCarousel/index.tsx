import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  TeamMemberContainer,
  ImageContainer,
  NavigationButton,
  ContentPanel,
  ImageCardContainer,
  LogoContainer
} from './TeamCarousel.styled';
import { ContentContainer } from 'components/shared/Container';
import { Text, SubTitle } from 'components/shared/Typography';
import { colors } from 'styles/color';

interface TeamMember {
  id: number;
  name: string;
  image: any;
  description: string[];
}

const TeamCarousel = ({ members }: { members: TeamMember[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const getPosition = (index: number): 'left' | 'center' | 'right' => {
    const diff = (index - activeIndex + members.length) % members.length;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    return 'left';
  };

  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % members.length);
      setIsVisible(true);
    }, 150);
  };

  const handlePrev = () => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + members.length) % members.length);
      setIsVisible(true);
    }, 150);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <ContentContainer $height={{desktop:"100%", mobile:"60%"}}>
      <ContentContainer $height={{desktop:"69%", mobile:"60%"}} $width={{desktop:"90%", mobile:"100%"}} $centered $justify="center">
        <ContentPanel $isVisible={isVisible}>
            <ContentContainer $direction="row" $height="100%" $width="100%">
                <ContentContainer $width="30%" $justify="space-around" $height="100%" $padding="2% 0" $background="linear-gradient(to bottom, #FFFFFF, #D1EAFF);">
                    <ImageCardContainer>
                        <Image
                            src={members[activeIndex].image}
                            alt={members[activeIndex].name}
                            fill
                            sizes="100%"
                            style={{ objectFit: 'cover' }}
                        />
                    </ImageCardContainer>
                    <LogoContainer>
                        <Image
                            src="/images/LogoSmall.png"
                            alt='logo'
                            fill
                            sizes="100%"
                            style={{ objectFit: 'cover' }}
                        />
                    </LogoContainer>
                </ContentContainer>
                <ContentContainer $width="70%" $justify="space-between">
                    <ContentContainer $width="100%" $height="30%" $backgroundColor={colors.primaryHover} $centered $justify="center">
                        <SubTitle color='white' $margin="0">{members[activeIndex].name}</SubTitle>
                    </ContentContainer>
                    <ContentContainer 
                        $width="100%" 
                        $height="68%" 
                        $backgroundColor={colors.primary}
                        $justify="space-around"
                        $padding="2%"
                    >
                        {members[activeIndex].description.map((text, index) => (
                            <Text color='white' $lineHeight={{mobile:"1.1", smallMobile:"1"}} key={index}>{text}</Text>
                        ))}
                    </ContentContainer>
                </ContentContainer>
            </ContentContainer>
        </ContentPanel>
      </ContentContainer>

      <ContentContainer $width={{desktop:"40%", mobile:"90%"}} $height={{desktop:"30%", mobile:"40%", tablet:"50%"}}>
        {members.map((member, index) => (
          <TeamMemberContainer
            key={member.id}
            $position={getPosition(index)}
            $isActive={index === activeIndex}
          >
            <ImageContainer>
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="100%"
                style={{ objectFit: 'cover' }}
              />
            </ImageContainer>
          </TeamMemberContainer>
        ))}
        
        <NavigationButton $position="left" onClick={handlePrev}>
          <ChevronLeft size={24} />
        </NavigationButton>
        
        <NavigationButton $position="right" onClick={handleNext}>
          <ChevronRight size={24} />
        </NavigationButton>
      </ContentContainer>
    </ContentContainer>
  );
};

export default TeamCarousel;