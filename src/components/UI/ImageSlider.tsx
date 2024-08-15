import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Modal } from 'antd';
import ZoomIcon from '../../assets/zoomIcon.svg';

const ImageSlider = ({ images }: { images: string[] }) => {
    const [visible, setVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        initialSlide: currentIndex,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true, // Включаем точки навигации (сейчас они будут превью)
        customPaging: (i: number) => (
            <div>
                <img
                    src={images[i]}
                    alt={`Preview ${i}`}
                    style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '9px' }}
                />
            </div>
        ),
        appendDots: (dots: React.ReactNode) => (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '10px',
                }}
            >
                <ul style={{ margin: '0px' }}>{dots}</ul>
            </div>
        ),
    };

    const openSlider = (index: number) => {
        setCurrentIndex(index);
        setVisible(true);
    };

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: "8px" }}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'relative',
                            cursor: 'pointer',
                            textAlign: 'center',
                        }}
                        onClick={() => openSlider(index)}
                    >
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <img
                                src={image}
                                alt={`Image ${index}`}
                                style={{
                                    width: '104px',
                                    height: '100px',
                                    borderRadius: '9px',
                                    objectFit: 'cover',
                                    backgroundColor: 'rgba(0, 0, 0, 0.15)',
                                }}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                    borderRadius: '9px',
                                }}
                            />
                            <img
                                src={ZoomIcon}
                                alt="Zoom Icon"
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '24px',
                                    height: '24px',
                                }}
                            />
                        </div>
                        <span style={{ display: 'block', marginTop: '5px', fontSize: '14px', color: '#333' }}>
                            {index + 1}
                        </span>
                    </div>
                ))}
            </div>

            <Modal
                visible={visible}
                footer={null}
                onCancel={() => setVisible(false)}
                width={784}
                height={802}
            >
                <Slider {...settings} >
                    {images.map((image, index) => (
                        <div key={index}>
                            <img
                                src={image}
                                alt={`Image ${index}`}
                                style={{ width: '527px', height: '651px', margin: "0 auto" }}
                            />
                        </div>
                    ))}
                </Slider>
            </Modal>
        </>
    );
};

export default ImageSlider;