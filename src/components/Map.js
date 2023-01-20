import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import './style.css'


function Map() {
  return (
    <div className='Map'>
        <MapContainer center={[50.61381110000000, 3.04235990000000]} zoom={4} scrollWheelZoom={true} className='leaflet-container'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[50.61381110000000, 3.04235990000000]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    </div>
  );
}

export default Map;

