import { ReactNode, FC } from 'react';
import styles from './HeroComponent.module.scss'; // You can define your styles here

interface HeroComponentProps {
  backgroundImage: string;
  children: ReactNode;
}
export const HeroComponent: FC<HeroComponentProps> = ({
  backgroundImage,
  children,
}) => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw', // 100% of viewport width
    height: '100vh', // 100% of viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="hero" style={heroStyle}>
      {children}
    </div>
  );
};
