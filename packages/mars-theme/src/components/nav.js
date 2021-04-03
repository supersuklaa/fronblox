import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => {
  const menu = state.source.get(`/menu/main-menu/`).items;

  return (
    <NavContainer>
      {menu.map(({ title, link }) => {
        // Check if the link matched the current page url
        const isCurrentPage = state.router.link === link;
        return (
          <NavItem key={title}>
            {/* If link url is the current page, add `aria-current` for a11y */}
            <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
              {title}
            </Link>
          </NavItem>
        );
      })}
    </NavContainer>
  );

}
export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  max-width: var(--main-width);
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow-x: auto;
  justify-content: flex-end;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-width: 2px 0;
    border-style: solid;
    border-color: transparent;
    transition: all .25s;

    &[aria-current="page"] {
      color: var(--hover-color);
    }

    &:hover {
      transform: translateY(-2px);
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
