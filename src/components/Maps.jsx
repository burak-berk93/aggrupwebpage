import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Örnek koordinatlar
const position = { lat: 51.505, lng: -0.09 }; // London

function MapComponent() {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={position}
        zoom={13}
      >
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
