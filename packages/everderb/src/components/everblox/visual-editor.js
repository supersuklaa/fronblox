import { styled } from "frontity";

const VisualEditor = ({ data }) =>{
    const itemWidth = `${100 / data.columns.length}%`;

    return (
        <Wrapper>
            <Container>
                <Items style={{ '--item-width': itemWidth }}>
                    {data.columns.map((item, i) => (
                        <Item key={i} dangerouslySetInnerHTML={{ __html: item.content }} />
                    ))}
                </Items>
            </Container>
        </Wrapper>
    );
} 

export default VisualEditor;

const Wrapper = styled.section`
    width: 100%;
    margin: 2em 0 0;
    padding: 0;
    list-style: none;
`;

const Container = styled.div`
margin: 0 auto 6em;
max-width: var(--main-width);

`;

const Items = styled.div`
margin: 0;
display: flex;
flex-flow: row wrap;
justify-content: space-between;
`;

const Item = styled.div`
margin: 0;
width: calc(var(--item-width) - 25px);
padding-bottom: 0;


`;
