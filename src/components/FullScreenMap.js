import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const FlyToLocation = ({ position }) => {
    const map = useMap();
    useEffect(() => {
        if (position) {
            map.flyTo(position, 4, {
                duration: 1,
            });
        }
    }, [position, map]);
    return null;
};

const FullScreenMap = ({ points, isDrawerOpen, isFunMode }) => {
    if (!points || points.length === 0) {
        return <p>No locations provided!</p>;
    }

    const defaultPosition = points[0] ? [points[0].lat, points[0].lng] : [0, 0];
    // const apiKey = process.env.REACT_APP_STADI_MAPS_API_KEY;
    const apiKey = 'd5503c83-3fa9-44ef-bdc0-6a94b68047b0';


    return (
        <>
            <div className={`${isDrawerOpen ? 'md:w-2/12' : 'w-full'} h-1/2 bottom-0 md:h-screen md:w-1/4 fixed z-10 map-overlay`}></div>
            <div className={`${isDrawerOpen ? 'md:w-2/12' : 'w-full'} h-1/2 bottom-0 md:h-screen md:w-1/4 fixed z-0`}>
                <MapContainer center={defaultPosition} zoom={13} style={{ width: '100%', height: '100%' }}>
                    <TileLayer
                        url={`https://tiles.stadiamaps.com/tiles/${isFunMode ? 'stamen_watercolor/{z}/{x}/{y}{r}.jpg' : 'stamen_toner_lite/{z}/{x}/{y}{r}.png'}?api_key=${apiKey}`}
                    />

                    {points.map((point, index) => (
                        <Marker key={index} position={[point.lat, point.lng]}>
                            <Popup>
                                {point.popupText || `Point at (${point.lat}, ${point.lng})`}
                            </Popup>
                        </Marker>
                    ))}
                    <FlyToLocation position={defaultPosition} />
                </MapContainer>
            </div>
        </>
    );
};

export default FullScreenMap;
