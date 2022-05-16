import DetailsTab from './details-tab';
import {Film} from '../../mocks/films';
import OverviewTab from './overview-tab';
import ReviewsTab from './reviews-tab';

type TabsProps = {
  setting:string
  film?:Film
};

function Tabs (props:TabsProps) {
  const componentSwitching = () => {
    switch (props.setting) {
      case 'overview':
        return <OverviewTab film={props.film} />;
      case 'details':
        return <DetailsTab film={props.film} />;
      case 'reviews':
        return <ReviewsTab film={props.film} />;
    }
  };

  return (
    <>
      {componentSwitching()}
    </>
  );
}

export default Tabs;
