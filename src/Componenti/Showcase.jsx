import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container,
    Col,
    Row
} from 'reactstrap';

const items = [
    {
        src: 'https://i.postimg.cc/rFQTWJgV/Cattura.png',
        altText: 'Appcademix',
        caption: 'Team leader of Appcademix Demo project'
    },
    {
        src: 'https://www.youthemployment.org.uk/dev/wp-content/uploads/2015/01/linkedin-career-advice-600x300.png',
        altText: 'Linkedin',
        caption: 'Linkedin Mockup'
    },
    {
        src: 'https://i.postimg.cc/nhjY8nd6/FBImage.png',
        altText: 'Spotify',
        caption: 'Spotify Mockup'
    }
];

const Showcase = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Container className="about-box text-right">
            <Row>
                <Col>
                    <h1>
                        <span className="second-half p-3">PORTFOLIO</span>
                    </h1>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Carousel 
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default Showcase;