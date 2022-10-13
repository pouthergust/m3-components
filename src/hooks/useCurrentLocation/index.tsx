import { useEffect, useState } from "react";

const useCurrentLocation = () => {
  const [location, setLocation] = useState<IGeolocation>({} as IGeolocation);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const latitude = coords.latitude;
      const longitude = coords.longitude;

      setLocation({ latitude, longitude });
    });
  }, []);

  return location;
}

export default useCurrentLocation;
