import TextBlockComponent from './app/templates/components/TextBlock'
import ContentPagePage from './app/templates/pages/ContentPage'
import HomePageBannerComponent from './app/templates/components/HomePageBanner'
import HomePagePage from './app/templates/pages/HomePage'
import HeroBannerComponent from './app/templates/components/HeroBanner'
import { MagnoliaConfig } from '@magnolia/react-editor';

import LinkList from './app/templates/components/LinkList';
import ListItem from './app/templates/components/ListItem';
import Text from './app/templates/components/Text';
import TextImage from './app/templates/components/TextImage';
import Basic from './app/templates/pages/Basic';

export const config: MagnoliaConfig = {
  componentMappings: {
    'spa-lm:pages/basic': Basic,

    'spa-lm:components/text': Text,
    'spa-lm:components/textImage': TextImage,
    'spa-lm:components/linkList': LinkList,
    'spa-lm:components/listItem': ListItem,
    "spa-lm:components/heroBanner": HeroBannerComponent,
    "spa-lm:pages/homePage": HomePagePage,
    "spa-lm:components/homePageBanner": HomePageBannerComponent,
    "spa-lm:pages/contentPage": ContentPagePage,
    "spa-lm:components/textBlock": TextBlockComponent
  },
};
