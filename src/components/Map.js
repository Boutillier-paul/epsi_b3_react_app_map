import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet'
import './style.css'


const api_key = "5b3ce3597851110001cf6248997adddf0dee4f3ea94d45ffd391066f";


function Map({ locationTo, locationFrom }) {
    const [coordinates, setCoordinates] = useState([]);
    const [mapCenter, setMapCenter] = useState([50.6138111, 3.0423599]);
    const [zoom, setZoom] = useState(6);
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);

    const getLatLng = (location) => {
        if (!location) return null;
        if (location.city && Object.keys(location.city).length !== 0) {
            return [location.city.gps_lat, location.city.gps_lng];
        }
    }

    useEffect(() => {
        const getRoute = async (from, to) => {
            const response = await fetch(
                `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${api_key}&start=${from[1]},${from[0]}&end=${to[1]},${to[0]}`
            );
            const data = await response.json();
            const coordinates = data.features[0].geometry.coordinates;
            setCoordinates(coordinates.map((coord) => coord.reverse()));
        };


        if (locationTo && locationFrom) {
            const fromCoord = getLatLng(locationFrom);
            const toCoord = getLatLng(locationTo);
            if (fromCoord && toCoord) {
                setFrom(fromCoord);
                setTo(toCoord)
                getRoute(fromCoord, toCoord);
                setMapCenter(([fromCoord[0] + toCoord[0]]) /2, ([fromCoord[1] + toCoord[1]]) /2)
                setZoom(14)
            } else {
                setCoordinates(null)
                setFrom(null)
                setTo(null)
            }
        }
    }, [locationTo, locationFrom, mapCenter, zoom]);

    return (
        <div className='Map'>
            <MapContainer center={mapCenter} zoom={zoom} scrollWheelZoom={true} className='leaflet-container map'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {coordinates &&
                    <Polyline color="blue" positions={coordinates} />
                }

                {from &&
                    <Marker position={from}>
                        <Popup>
                            Ville de départ
                        </Popup>
                    </Marker>
                }
                {to &&
                    <Marker position={to}>
                        <Popup>
                            Ville d'arrivée
                        </Popup>
                    </Marker>
                }
            </MapContainer>
        </div>
    );
}

export default Map;

//<Marker position={[50.61381110000000, 3.04235990000000]}>
                //    <Popup>
                //        A pretty CSS3 popup. <br /> Easily customizable.
                //    </Popup>
                //</Marker>

