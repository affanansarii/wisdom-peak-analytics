import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function LocationMap() {

    const googleMapsApiKey = 'AIzaSyCm4qw1_s6-iNX8A0VvDbK7p3x_3ZJ_Y8o';

    const [mapCenter] = useState({
        lat: 37.7749,
        lng: -122.4194,
    });

    const containerStyle = {
        width: '100%',
        height: '400px'
    }

    return (

        <Box mb={6}>

            <Heading as="h2" size="lg" mb={4}>Location</Heading>

            <LoadScript googleMapsApiKey={googleMapsApiKey}>

                <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={10}>
                    <Marker position={mapCenter} />
                </GoogleMap>

            </LoadScript>

        </Box>

    )

}

export default LocationMap;