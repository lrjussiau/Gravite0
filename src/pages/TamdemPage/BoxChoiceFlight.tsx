import React, { useState, useEffect , useRef } from 'react';
import { BoxContainer, ButtonContainer, Button, PhotoBox, ContactButton, TextPhoto, TextPrice } from './boxChoixeFlight.styled';
import PhotoBiplace from 'assets/medias/para_biplace.jpeg';
import PhotoExtreme from 'assets/medias/para_extreme.jpg';
import { useTranslation } from "react-i18next";

type TabType = 'Biplace' | 'Extreme';

export const BoxChoiceFlight = () => {
    const [activeTab, setActiveTab] = useState<TabType>('Biplace');
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useTranslation();
    const sectionsRef = useRef<HTMLElement[]>([]);


    const handleClick = (tab: TabType) => {
        setIsVisible(false);
        setTimeout(() => {
            setActiveTab(tab);
            setIsVisible(true); 
        }, 500);
    };

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
      sectionsRef.current = Array.from(document.querySelectorAll('section'));
    }, []);

    const GoContact = () => {
        const lastSection = sectionsRef.current.length;

        sectionsRef.current[lastSection - 1]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        });
    };

    return (
        <BoxContainer>
            <ButtonContainer>
                <Button onClick={() => handleClick('Biplace')} active={activeTab === 'Biplace'}>{t('tamdem.biplace')}</Button>
                <Button onClick={() => handleClick('Extreme')} active={activeTab === 'Extreme'}>{t('tamdem.extreme')}</Button>
            </ButtonContainer>
            {activeTab === 'Biplace' && (
                <>
                    <PhotoBox src={PhotoBiplace} alt='Biplace Picture' className={isVisible ? 'visible' : ''} />
                    <TextPrice className={isVisible ? 'visible' : ''}>{t('tamdem.time_biplace')}</TextPrice>
                    <TextPrice className={isVisible ? 'visible' : ''}>{t('tamdem.price_biplace')}</TextPrice>
                    <TextPrice className={isVisible ? 'visible' : ''}>{t('tamdem.duration_biplace')}</TextPrice>
                </>
            )}
            {activeTab === 'Extreme' && (
                <>
                    <PhotoBox src={PhotoExtreme} alt='Extreme Picture' className={isVisible ? 'visible' : ''} />
                    <TextPrice className={isVisible ? 'visible' : ''}>{t('tamdem.time_extreme')}</TextPrice>
                    <TextPrice className={isVisible ? 'visible' : ''}>{t('tamdem.price_extreme')}</TextPrice>
                    <TextPrice className={isVisible ? 'visible' : ''}>{t('tamdem.duration_extreme')}</TextPrice>
                </>
            )}
            <TextPhoto>{t('tamdem.description_box')}</TextPhoto>
            <ContactButton onClick={() => GoContact()}>{t('tamdem.nous_contacter')}</ContactButton>
        </BoxContainer>
    );
};
