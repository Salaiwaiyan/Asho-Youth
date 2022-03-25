import React from 'react';
import {COLORS, SIZES} from '../Constants/theme';
import {RenderHTML} from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';

const RenderHtmlComponent = React.memo(function RenderHtmlComponent({html}) {
  const {width: contentWidth} = useWindowDimensions();
  const htmlStyles = {
    p: {
      lineHeight: 25,
      fontFamily: 'Inter-Regular',
      color: COLORS.black,
    },
  };
  return (
    <RenderHTML
      systemFonts={["Inter-Regular"]}
      contentWidth={contentWidth}
      source={{html}}
      tagsStyles={htmlStyles}
    />
  );
});

export default RenderHtmlComponent
