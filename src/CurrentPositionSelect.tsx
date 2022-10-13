import React, { ChangeEvent, useCallback } from 'react';
import './CurrentPositionSelect.css';
import { Wrapper, Button, Select } from './components';
import { Target } from './components/UI/Icons';
import { useUFContext } from './context/FederalDistrictsContext';
import useCurrentLocation from './hooks/useCurrentLocation';

function CurrentPositionSelect() {
  const currentLocation = useCurrentLocation();
  const {
    listingDistrict,
    listingCities,
    fetchCities,
    setListingCities
  } = useUFContext()

  const handleClick = useCallback((location: IGeolocation) => {
    console.log(location, 'location')
  }, [])

  const handleChange = useCallback(async ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    const cities = await fetchCities(parseInt(value))
    setListingCities(cities)
    console.log(value, 'value')
  }, [fetchCities, setListingCities])

  const handleChangeCities = useCallback(async ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const { value } = target
    console.log(value, 'value')
  },[])


  return (
    <div className="App">
      <Wrapper>
        <Select 
          label="Estado"
          options={listingDistrict}
          value="id"
          message="Selecione um estado"
          onChange={handleChange}
        />
        <Select 
          label="Cidade"
          options={listingCities}
          value="id"
          message="Selecione uma cidade"
          onChange={handleChangeCities}
        />
        <Button 
          text='Usar minha localização'
          icon={<Target fill="#fff"/>}
          onClick={() => handleClick(currentLocation)}
        />
      </Wrapper>
    </div>
  );
}

export default CurrentPositionSelect;
