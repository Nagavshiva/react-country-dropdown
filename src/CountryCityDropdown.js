import React, { useState } from "react";

// Array of country and city objects
const countries = [
  { name: "India", cities: ["Chennai", "Mumbai", "Delhi"] },
  { name: "USA", cities: ["New York", "Los Angeles", "Chicago"] },
  { name: "Canada", cities: ["Toronto", "Vancouver", "Montreal"] },
];

function CountryCityDropdown() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  // Handle country selection
  const handleCountryChange = (e) => {
    const countryName = e.target.value;
    setSelectedCountry(countryName);

    // Find the selected country's cities
    const selectedCountryObj = countries.find(
      (country) => country.name === countryName
    );
    if (selectedCountryObj) {
      setCities(selectedCountryObj.cities);
      setSelectedCity(selectedCountryObj.cities[0]); // Automatically select the first city
    } else {
      setCities([]);
      setSelectedCity(""); // Reset the city when no country is selected
    }
  };

  // Handle city selection
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      {/* Country Dropdown */}
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      {/* City Dropdown */}
      <select
        value={selectedCity}
        onChange={handleCityChange}
        disabled={!selectedCountry}
      >
        {cities.length === 0 ? (
          <option value="">Select City</option>
        ) : (
          cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))
        )}
      </select>
    </div>
  );
}

export default CountryCityDropdown;
