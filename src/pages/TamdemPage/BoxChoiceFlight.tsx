import React, { useState, useEffect } from 'react';
import { BoxContainer, ButtonContainer, Button, PhotoBox, ContactButton, TextPhoto, TextPrice } from './boxChoixeFlight.styled';
import PhotoBiplace from 'assets/medias/para_biplace.jpeg';
import PhotoExtreme from 'assets/medias/para_extreme.jpg';

type TabType = 'Biplace' | 'Extreme';

export const BoxChoiceFlight = () => {
    const [activeTab, setActiveTab] = useState<TabType>('Biplace');
    const [isVisible, setIsVisible] = useState(false);

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

    return (
        <BoxContainer>
            <ButtonContainer>
                <Button onClick={() => handleClick('Biplace')} active={activeTab === 'Biplace'}>Biplace</Button>
                <Button onClick={() => handleClick('Extreme')} active={activeTab === 'Extreme'}>Extreme</Button>
            </ButtonContainer>
            {activeTab === 'Biplace' && (
                <>
                    <PhotoBox src={PhotoBiplace} alt='Biplace Picture' className={isVisible ? 'visible' : ''} />
                    <TextPrice className={isVisible ? 'visible' : ''}>20-25 minutes de vol</TextPrice>
                    <TextPrice className={isVisible ? 'visible' : ''}>190 CHF par personne</TextPrice>
                    <TextPrice className={isVisible ? 'visible' : ''}>Durée de l'activité environ 1h30</TextPrice>
                </>
            )}
            {activeTab === 'Extreme' && (
                <>
                    <PhotoBox src={PhotoExtreme} alt='Extreme Picture' className={isVisible ? 'visible' : ''} />
                    <TextPrice className={isVisible ? 'visible' : ''}>40-45 minutes de vol</TextPrice>
                    <TextPrice className={isVisible ? 'visible' : ''}>250 CHF par personne</TextPrice>
                    <TextPrice className={isVisible ? 'visible' : ''}>Durée de l'activité environ 2h</TextPrice>
                </>
            )}
            <TextPhoto>Sur demande, le pilote se chargera de faire quelques photos et vidéos.</TextPhoto>
            <ContactButton>Nous contacter</ContactButton>
        </BoxContainer>
    );
};
