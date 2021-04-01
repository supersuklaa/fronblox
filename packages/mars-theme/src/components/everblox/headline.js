import { styled } from "frontity";

const Headline = ({ data }) => {
    const backgroundImage = `url(${data.background_image.url})`;
    const opacity = +data.overlay_opacity / 100;

    return (
        <Wrapper>
            <Background>
                <BackgroundImageWrapper>
                    <BackgroundImage style={{ backgroundImage }} />
                </BackgroundImageWrapper>
                <Overlay style={{ opacity }} />
            </Background>
            <Container>
                <TextWrapper>
                    <TextButtons>
                        <Text>{data.headline}</Text>
                    </TextButtons>
                </TextWrapper>
            </Container>
        </Wrapper>
    );
};

export default Headline;

const Wrapper = styled.section`

    position: relative;
    overflow: hidden;
    background-color: #000;
    width: 100%;
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;
`;

const BackgroundImageWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const BackgroundImage = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: grayscale(100%);
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--bg-color);
    opacity: 0.75;
`;

const Container = styled.div`
max-width: var(--main-width);
padding-top: var(--head-height);
    padding-left: 70px;
    padding-right: 70px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: relative;
    z-index: 2;
`;

const TextWrapper = styled.div`
    max-width: 75%;
    padding-top: calc(10% + 10px);
    padding-bottom: calc(10% + 10px);
`;

const TextButtons = styled.div`
    position: relative;
`;

const Text = styled.h2`
    font-size: 4.8rem;
    margin-bottom: 35px;
    color: #fff;
`;
