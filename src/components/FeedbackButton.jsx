import {ContentList} from './App.styled';
import {CustomButton} from './FeedbackButton.styled';

export const FeedbackButton = ({buttonName}) => {
    return <ContentList>
        <CustomButton type="button">
             {buttonName}
        </CustomButton>
    </ContentList>
}