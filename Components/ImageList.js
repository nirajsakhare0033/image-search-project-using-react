
import React from 'react';


const ImageList = (props) => {
        //console.log(props);
        const images = props.images.map((image) => {
                return <img alt={image.description} key={image.id} src={image.urls.regular} />
        });
        return(

                <div className='pic'>{images}</div>

        );
};

export default ImageList;