import React from 'react';
import AlbumList from './AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'nhà nhà nghe gì',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/1/2/e/912e99454cfec0b388523db92abebe5f.jpg',
        },
        {
            id: 2,
            name: 'nhạc mới mỗi ngày',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/c/d/c/3cdc217b10da3baf4911f126ef4c72e3.jpg',
        },
        {
            id: 3,
            name: 'dance viet',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/0/9/9/5099c98268ddcb8c73bf683d4f40d49b.jpg',
        }
    ];
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;