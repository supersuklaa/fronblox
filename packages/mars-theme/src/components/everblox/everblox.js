import { connect, styled, decode } from "frontity";

import Headline from "./headline";
import VisualEditor from "./visual-editor";

const Everblox = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];

  if (!post || !post.acf|| !post.acf.everblox_v1) {
      return null;
  }

  const items = post.acf.everblox_v1;

  return (
    <Container>
        {items.map((item, i) => (
            <>
                {item.acf_fc_layout === 'VisualEditor' && (
                    <VisualEditor key={item.id} data={item}/>
                )}
                {item.acf_fc_layout === 'Headline' && (
                    <Headline key={item.id} data={item} />
                )}
            </>
        ))}
    </Container>
  );
};

export default connect(Everblox);

const Container = styled.section`
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
