import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

const GooglePlaces = ({ location, setLocation, handleInputChange }) => {
    return (
        <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
            selectProps={{
                location,
                placeholder: 'Destination',
                isClearable: true,
                onChange: (newValue) => {
                    setLocation(newValue);
                    handleInputChange('location', newValue);
                },
                styles: {
                    input: (provided) => ({
                        ...provided,
                        color: 'blue',
                        cursor: 'pointer',
                    }),
                    option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isFocused ? '#e0e0e0' : 'white',
                        color: state.isSelected ? 'purple' : 'black',
                        padding: '5px',
                    }),
                    singleValue: (provided) => ({
                        ...provided,
                        color: 'oklch(38.1% 0.176 304.987)',
                    }),
                    dropdownIndicator: (provided) => ({
                        ...provided,
                        color: 'oklch(62.7% 0.265 303.9)',
                    }),
                },
            }}
        />
    )
}

export default GooglePlaces