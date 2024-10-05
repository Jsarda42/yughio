import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent({ players, height, width, imageSrc }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg" style={{ height, width }}>
      <MapContainer center={[48.8566, 2.3522]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {players.map((player, index) => (
          <Marker key={index} position={player.position}>
            <Popup>
              {player.name}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Image in the top right corner */}
      <img
        src={imageSrc}
        alt="Overlay"
        className="absolute top-[0px] right-0 w-60 h-60" // Adjust size and position as needed
      />
    </div>
  );
}

export default MapComponent;








