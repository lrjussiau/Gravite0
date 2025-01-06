import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  CarouselContainer,
  SlidesWrapper,
  SlideContainer,
  NavigationButton,
  DotsContainer,
  DotButton
} from './carousel.styled';

interface CarouselProps {
  $slides: React.ReactElement[];
  $height?: string;
  $width?: string;
  $dots?: boolean;  
  $autoPlay?: boolean;
  $autoPlaySpeed?: number;
  $mobileWidth?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
    $slides,
    $height = '100%',
    $width = '100%',
    $dots = false,
    $autoPlay = false,
    $autoPlaySpeed = 5000,
    $mobileWidth = '100%'
  }) => {
    const [$currentslide, setCurrentslide] = useState(0);

    const nextSlide = () => {
      setCurrentslide(prev => (prev === 0 ? 1 : 0));
    };
  
    const prevSlide = () => {
      setCurrentslide(prev => (prev === 1 ? 0 : 1));
    };

    const handlers = useSwipeable({
      onSwipedLeft: () => nextSlide(),
      onSwipedRight: () => prevSlide(),
      trackMouse: false,
      preventScrollOnSwipe: false,
      delta: 50,
      swipeDuration: 500,
    });
  
    React.useEffect(() => {
      if ($autoPlay) {
        const interval = setInterval(nextSlide, $autoPlaySpeed);
        return () => clearInterval(interval);
      }
    }, [$autoPlay, $autoPlaySpeed]);
  
    return (
      <CarouselContainer $height={$height} $width={$width} $dots={$dots}>
         <SlidesWrapper 
           $currentslide={$currentslide}
           {...handlers}
         >
          {$slides.map((slide, index) => (
            <SlideContainer
              key={index}
              $isActive={index === $currentslide}
              $position={index === 0 ? 'left' : 'right'}
              $mobileWidth={$mobileWidth}
            >
              {slide}
            </SlideContainer>
          ))}
        </SlidesWrapper>
  
        <NavigationButton 
          $position="left" 
          onClick={prevSlide}
          $isActive={$currentslide === 1}
        >
          <ChevronLeft size={24} />
        </NavigationButton>
        
        <NavigationButton 
          $position="right" 
          onClick={nextSlide}
          $isActive={$currentslide === 0}
        >
          <ChevronRight size={24} />
        </NavigationButton>
  
        <DotsContainer $isActive={$dots}>
          {[0, 1].map((index) => (
            <DotButton
              key={index}
              $active={$currentslide === index}
              onClick={() => setCurrentslide(index)}
            />
          ))}
        </DotsContainer>
      </CarouselContainer>
    );
  };