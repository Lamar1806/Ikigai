import { PassportStatic } from 'passport';
import googleStrategyConfig from './googleStrategy';

const setupAuthStrategies = (passport: PassportStatic): void => {
  googleStrategyConfig(passport);
};

export default setupAuthStrategies;
