import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Everblox from "./everblox";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  console.log(data)

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Everblox when={data.type === 'page' || data.isHome} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`

  body {
--main-width: 800px;
--main-color: rgba(209, 221, 223, 0.77);
--hover-color: rgba(232, 189, 208, 0.9);
--bg-color: rgba(9, 23, 30, 0.86);
--spicy-color: rgba(196, 180, 170, 0.8);
--head-height: 80px;

color: var(--main-color);
background: var(--bg-color);

margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  max-width: var(--main-width);
  margin: auto;
  align-items: center;
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
