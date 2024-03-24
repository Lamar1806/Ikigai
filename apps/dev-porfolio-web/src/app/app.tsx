import styled from '@emotion/styled';
import me from '../assets/me.png';
import { AboutDalmar, ContactLinks } from '../components/about-me/about-me';
import {
  GraphicDesignSkills,
  SoftwareEngineerSkills,
} from '../components/software-engineering-skills/software-engineering-skills';
import { HeadingWithSubtextAbove } from '../components/heading-with-subtext-above/heading-with-subtext-above';
import { ProjectListItem } from '../components/portfolio-list-item/portfolio-list-item';

interface H1Props {
  withOpacity?: boolean;
  textAlign: 'center' | 'left' | 'right';
}

const StyledApp = styled.div`
  padding: 12px;
`;

const ImageOfMe = styled.img`
  width: 100%;
  max-width: 500px;
`;

export const H1 = styled.h1<H1Props>`
  font-size: 50px;
  color: rgb(0, 0, 0);
  text-align: ${(props) => props.textAlign};
  opacity: ${(props) => (props.withOpacity ? 0.5 : 1)};
  margin: 5px 0px;
`;

const H2 = styled.h1<H1Props>`
  font-size: 24px;
  color: rgb(0, 0, 0);
  text-align: ${(props) => props.textAlign};
  opacity: ${(props) => (props.withOpacity ? 0.5 : 1)};
  margin: 5px 0px;
`;

export function App() {
  return (
    <StyledApp>
      <H1 textAlign={'center'} withOpacity>
        About
      </H1>
      <ImageOfMe src={me} alt="me" />
      <section>
        <H1 textAlign={'left'}>I'm a Software Engineer</H1>
        <AboutDalmar />
      </section>
      <HeadingWithSubtextAbove
        heading="Here Are Some of My Skills"
        subHeading="My Skills"
        textAlign="left"
      />
      <GraphicDesignSkills />
      <SoftwareEngineerSkills />
      <HeadingWithSubtextAbove heading="Portfolio" subHeading="Projects" />
      <ProjectListItem
        title={'Digital Versatility'}
        description={''}
        imageUrl={me}
        liveUrl={''}
        detailUrl={''}
      />
      <H2 textAlign={'left'} withOpacity>
        Dalmar Brooks
      </H2>
      <ContactLinks />
    </StyledApp>
  );
}

export default App;
