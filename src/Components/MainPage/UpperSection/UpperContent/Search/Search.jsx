import React , {useState} from 'react';
import "./Search.css"
import Select from "react-select";


const Search = () => {

    const [selectedOptions, setSelectedOptions] = useState();

    const [ExperienceOptions , setExperienceOptions] = useState();

    const optionList = [
        { value: "bangalore", label: "Bangalore" },
        { value: "delhi", label: "Delhi" },
        { value: "mumbai", label: "Mumbai" },
        { value: "noida", label: "Noida" },
        { value: "pune", label: "Pune" },
        { value: "agra", label: "Agra" },
        { value: "ghaziabad", label: "Ghaziabad" },
        { value: "jaipur", label: "Jaipur" },
        { value: "hyderabad", label: "Hyderabad" },
        { value: "gurugram", label: "Gurugram" },
        { value: "chennai", label: "Chennai" },
        { value: "kolkata", label: "Kolkata" },
        { value: "ahmedabad", label: "Ahmedabad" },
        { value: "surat", label: "Surat" },
        { value: "lucknow", label: "Lucknow" },
        { value: "kanpur", label: "Kanpur" },
        { value: "jaipur", label: "Jaipur" },
        { value: "nagpur", label: "Nagpur" },
        { value: "patna", label: "Patna" },
        { value: "indore", label: "Indore" },
        { value: "thiruvananthapuram", label: "Thiruvananthapuram" },
        { value: "chandigarh", label: "Chandigarh" },
        { value: "bhopal", label: "Bhopal" },
        { value: "visakhapatnam", label: "Visakhapatnam" },
        { value: "vadodara", label: "Vadodara" },
        { value: "bhubaneswar", label: "Bhubaneswar" },
        { value: "coimbatore", label: "Coimbatore" },
        { value: "ludhiana", label: "Ludhiana" },
        { value: "madurai", label: "Madurai" },
        { value: "nashik", label: "Nashik" },
        { value: "faridabad", label: "Faridabad" },
        { value: "meerut", label: "Meerut" },
      ];

      const experienceList = [
        { value: "0-3", label: "0-3 years" },
        { value: "3-5", label: "3-5 years" },
        { value: "5-7", label: "5-7 years" },
        { value: "7-10", label: "7-10 years" },
        { value: "10-15", label: "10-15 years" },
        { value: "15-20", label: "15-20 years" },
        { value: "20+", label: "20+ years" },
      ];
      
      function handleSelect(data) {
        setSelectedOptions(data);
      }

      const handleExperience = (data) => {
        setExperienceOptions(data);
      }

    const customStyles = {
        control: (provided) => ({
          ...provided,
          minHeight: '100%', // Set the height of the control
          width: '130%', // Set the width of the control
        }),
      };

    const customStyles2 = {
        control: (provided) => ({
          ...provided,
          minHeight: '100%', // Set the height of the control
          width: '120%', // Set the width of the control
        }),
      };



   

  return (
    <div className="search-con">
      <div className="searching">
        <div className="btnLessDiv">
        <div className="search">
          <input id="q" type="text" name="" placeholder="Search Jobs" />
        </div>

          <Select
            options={optionList}
            placeholder="Select Locations"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            styles={customStyles}
            required
            id="location"
            isMulti
          />

          <Select
            options={experienceList}
            placeholder="Experience"
            value={ExperienceOptions}
            onChange={handleExperience}
            isSearchable={true}
            styles={customStyles2}
            required
            id="experience"
          />
          </div>

        <div className="sea-btn">
          <input type="submit" value="Go"/>
        </div>
      </div>
    </div>
  );
}

export default Search;