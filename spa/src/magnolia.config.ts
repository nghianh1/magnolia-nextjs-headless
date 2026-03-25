import GridSectionComponent from './app/templates/components/GridSection/GridSection'
import BannerCarouselComponent from './app/templates/components/BannerCarousel/BannerCarousel'
import SecondaryHeroComponent from './app/templates/components/SecondaryHero/SecondaryHero';
import FreeGiftCardComponent from './app/templates/components/FreeGiftCard/FreeGiftCard';
import FreeGiftsComponent from './app/templates/components/FreeGifts/FreeGifts';
import HomePageByDesignPage from './app/templates/pages/HomePageByDesign/HomePageByDesign';
import ContainerComponent from './app/templates/components/Container/Container';
import MyCarouselComponent from './app/templates/components/MyCarousel/MyCarousel';
import DemoComponent from './app/templates/components/Demo/Demo';
import DemoPage from './app/templates/pages/Demo/Demo';
import AccordionComponent from './app/templates/components/Accordion';
import MyCustomTourCardComponent from './app/templates/components/MyCustomTourCard';
import TourListComponent from './app/templates/components/TourList';
import LandingPagePage from './app/templates/pages/LandingPage';
import TextBlockComponent from './app/templates/components/TextBlock';
import ContentPagePage from './app/templates/pages/ContentPage';
import HomePageBannerComponent from './app/templates/components/HomePageBanner';
import HomePagePage from './app/templates/pages/HomePage';
import HeroBannerComponent from './app/templates/components/HeroBanner';
import { MagnoliaConfig } from '@magnolia/react-editor';

import LinkList from './app/templates/components/LinkList';
import ListItem from './app/templates/components/ListItem';
import Text from './app/templates/components/Text';
import TextImage from './app/templates/components/TextImage';
import Basic from './app/templates/pages/Basic';
import TrustedLeaders from './app/templates/components/TrustedLeaders/TrustedLeaders';
import { ExploreIndustries } from './app/templates/components/ExploreIndustries/ExploreIndustries';
import IndustryItem from './app/templates/components/IndustryItem/IndustryItem';

export const config: MagnoliaConfig = {
  componentMappings: {
    'spa-lm:pages/basic': Basic,
    'spa-lm:components/text': Text,
    'spa-lm:components/textImage': TextImage,
    'spa-lm:components/linkList': LinkList,
    'spa-lm:components/listItem': ListItem,
    'spa-lm:components/heroBanner': HeroBannerComponent,
    'spa-lm:pages/homePage': HomePagePage,
    'spa-lm:components/homePageBanner': HomePageBannerComponent,
    'spa-lm:pages/contentPage': ContentPagePage,
    'spa-lm:components/textBlock': TextBlockComponent,
    'spa-lm:pages/landingPage': LandingPagePage,
    'spa-lm:components/tourList': TourListComponent,
    'spa-lm:components/tourCard': MyCustomTourCardComponent,
    'spa-lm:components/accordion': AccordionComponent,
    'spa-lm:pages/demo': DemoPage,
    'spa-lm:components/demo': DemoComponent,
    'spa-lm:components/myCarousel': MyCarouselComponent,
    'spa-lm:components/container': ContainerComponent,
    'spa-lm:pages/homePageByDesign': HomePageByDesignPage,
    'spa-lm:components/freeGifts': FreeGiftsComponent,
    'spa-lm:components/freeGiftCard': FreeGiftCardComponent,
    'spa-lm:components/trustedLeaders': TrustedLeaders,
    'spa-lm:components/secondaryHero': SecondaryHeroComponent,
    'spa-lm:components/exploreIndustries': ExploreIndustries,
    'spa-lm:components/industryItem': IndustryItem,
    "spa-lm:components/bannerCarousel": BannerCarouselComponent,
    "spa-lm:components/gridSection": GridSectionComponent
  },
};
