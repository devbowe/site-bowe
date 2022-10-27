import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle, StyledBlockImg } from './styled';

const TileBlocksImg = props => {
  const { title, list, imagesCenter, imagesHasSpacing = true } = props;

  return (
    <div className="w-100">
      <StyledTitle textColor="black">{title}</StyledTitle>
      <div className={`mt-2 py-3 d-flex flex-row align-items-center overflow-auto hidden-scrollbar ${imagesCenter ? 'justify-content-center' : ''}`}>
        {list != null && list.map((element, index) => {
          if (element.href) {
            return <a key={index} href={element.href} target="_blank" rel="noreferrer">
              <StyledBlockImg
                className={imagesHasSpacing && "pr-5 mr-3 "}
                src={element.img}
              />
            </a>
          } else {
            return <StyledBlockImg
              key={index}
              className={imagesHasSpacing && "pr-5 mr-3"}
              src={element.img}
            />
          }
        })}
      </div>
    </div>
  );
}

TileBlocksImg.defaultProps = {}

TileBlocksImg.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.any.isRequired,
  imagesHasSpacing: PropTypes.bool
}

export default TileBlocksImg;
