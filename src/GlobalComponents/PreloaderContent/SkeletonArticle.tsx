import PreloaderContent from './PreloaderContent';

import {
    Shymer,
    ShymerWrapper,
    SkelletonWrapper,

} from "./preloadercontentStyled";

const SkeletonArticle = (props: {
    ColorTheme: string;

}) => {

    const { ColorTheme } = props || "light";
    return (
        <SkelletonWrapper theme={ColorTheme}>
            <PreloaderContent type={"thumbnail"} />
            
            <PreloaderContent type={"text"} />


            <ShymerWrapper><Shymer></Shymer></ShymerWrapper>
        </SkelletonWrapper>
    )
}

export default SkeletonArticle
