import { navItems } from './NavBarItems';
import { NavContainer, NavList, NavItems } from './NavBar.styled';

type NavBarProps = {
    items?: string[];
};

const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

const NavBar: React.FC<NavBarProps> = ({items = navItems}) => {
    return (
        <NavContainer>
            <NavList>
                {items.map((item, index) => (
                    <NavItems key={index}>
                        <a onClick={() => scrollToSection(item.toLowerCase())}>{item}</a>
                    </NavItems>
                ))}
            </NavList>
        </NavContainer>
    );
}

export default NavBar;