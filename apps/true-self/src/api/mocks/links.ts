import { IconType } from 'react-icons';
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaMedium,
  FaQuora,
  FaTwitch,
} from 'react-icons/fa';

interface Links {
  [platform: string]: {
    url: string;
    Icon: IconType;
  };
}

const links: Links = {
  YouTube: {
    url: 'https://www.youtube.com/@trueselfvibs',
    Icon: FaYoutube,
  },
  Facebook: {
    url: 'https://www.facebook.com/trueselfvibs',
    Icon: FaFacebook,
  },
  Instagram: {
    url: 'https://www.instagram.com/true_self_vibs/',
    Icon: FaInstagram,
  },
  Medium: {
    url: 'https://medium.com/@true_self_vibs',
    Icon: FaMedium,
  },
  Quora: {
    url: 'https://www.quora.com/profile/True-Self-23',
    Icon: FaQuora,
  },
  Twitch: {
    url: 'https://www.twitch.tv/trueselfvibs',
    Icon: FaTwitch,
  },
};

export default links;
