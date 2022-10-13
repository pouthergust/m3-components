/* eslint-disable eqeqeq */
import React, {
  useState,
  ReactNode,
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction,
  createContext,
  useContext
} from 'react'

interface FederalDistrictContexValue {
  listingDistrict: IFederalDistrict[];
  currentDistrict: IFederalDistrict;
  listingCities: ICityOptions[];
  currentCity: ICityOptions;
  setListingCities: Dispatch<SetStateAction<ICityOptions[]>>
  setCurrentDistrict: Dispatch<SetStateAction<IFederalDistrict>>
  setCurrentCity: Dispatch<SetStateAction<ICityOptions>>
  fetchDistricts: () => Promise<IFederalDistrict[]>
  fetchCities: (UFCode?: number) => Promise<ICityOptions[]>
}

interface FederalDistrictProviderProps {
  children: ReactNode;
  districtCode?: number;
  cityCode?: number;
}

const FederalDistrictContext = createContext<FederalDistrictContexValue>({} as FederalDistrictContexValue)

function FederalDistrictProvider({children, districtCode, cityCode}: FederalDistrictProviderProps) {
  const [listingDistrict, setListingDistrict] = useState<IFederalDistrict[]>([]);
  const [currentDistrict, setCurrentDistrict] = useState<IFederalDistrict>({} as IFederalDistrict);
  const [listingCities, setListingCities] = useState<ICityOptions[]>([]);
  const [currentCity, setCurrentCity] = useState<ICityOptions>({} as ICityOptions);

  const fetchDistricts = useCallback(async () => {
    const districts = await
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`)
        .then(res => res.json())

        if (currentDistrict) setListingDistrict(districts)
        return districts
  }, [])

  const fetchCities = useCallback(async (UFCode?: number) => {
    const cities = await
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${
        UFCode ? UFCode : currentDistrict.id || districtCode || 0
      }/municipios`)
        .then(res => res.json())

      setListingCities(cities)
      console.log(cities, 'cities')
      return cities
  }, [])

  useEffect(() => {
    fetchDistricts()

    if (districtCode) {
      setCurrentDistrict(() => {
        return listingDistrict.find(district => district.id == districtCode) || {} as IFederalDistrict
      })
      fetchCities()
    }

    if (cityCode) {
      setCurrentCity(() => {
        return listingCities.find(city => city.id == cityCode) || {} as ICityOptions
      })
    }
  }, []);

  return (
    <FederalDistrictContext.Provider value={{
      listingDistrict,
      currentDistrict,
      listingCities,
      currentCity,
      setListingCities,
      setCurrentDistrict,
      setCurrentCity,
      fetchDistricts,
      fetchCities
    }}>
      {children}
    </FederalDistrictContext.Provider>
  )
}

const useUFContext = () => {
  if (!FederalDistrictContext) {
    throw new Error('useUFContext must be used within a FederalDistrictContext')
  }

  return useContext(FederalDistrictContext);
}

export {useUFContext, FederalDistrictProvider}
export default FederalDistrictContext
