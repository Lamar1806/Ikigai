import { IconType } from 'react-icons';
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaMedium,
  FaQuora,
} from 'react-icons/fa';

interface Links {
  [platform: string]: {
    url: string;
    // icon: IconType;
  };
}

const links: Links = {
  YouTube: {
    url: 'https://www.youtube.com/@trueselfvibs',
    // icon: FaYoutube,
  },
  Facebook: {
    url: 'https://www.facebook.com/trueselfvibs',
    // icon: FaFacebook,
  },
  Instagram: {
    url: 'https://www.instagram.com/true_self_vibs/',
    // icon: FaInstagram,
  },
  Medium: {
    url: 'https://medium.com/@true_self_vibs',
    // icon: FaMedium,
  },
  Quora: {
    url: 'https://www.quora.com/profile/True-Self-23',
    // icon: FaQuora,
  },
};

export default links;
