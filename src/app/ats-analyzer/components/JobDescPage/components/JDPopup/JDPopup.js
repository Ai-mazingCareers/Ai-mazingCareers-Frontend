import { useState } from 'react';
import Select from "react-select";
import './style/JDPopup.css'
import { skills } from './data/skills';
import { degrees } from './data/degrees';

const JDPopup = ({setShow,setCount,setData}) => {

      const darkThemeStyles = {
        control: (provided) => ({
          ...provided,
          backgroundColor: "#222", // Dark background
          borderColor: "#444",
          color: "#fff",
          minHeight: "40px",
          borderRadius: "5px",
          "&:hover": { borderColor: "#666" },
        }),
        menu: (provided) => ({
          ...provided,
          backgroundColor: "#222",
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isFocused ? "#333" : "#222",
          color: "#fff",
          "&:hover": { backgroundColor: "#444" },
        }),
        singleValue: (provided) => ({
          ...provided,
          color: "#fff",
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: "#000",}),
        placeholder: (provided) => ({
          ...provided,
          color: "#bbb",
        }),
      };

      const [formData, setFormData] = useState({
        jobTitle: "",
        location: "",
        employmentType: "",
        minExperience: "",
        preferredExperience: "",
        educationRequired: [],
        skillsRequired: [],
        preferredSkills: [],
        responsibilities: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleMultiSelectChange = (selectedOptions, field) => {
        setFormData((prev) => ({
          ...prev,
          [field]: selectedOptions.map((e)=>e.value) || [],
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setData(formData)
        setCount(count=>count+1);
      };
      function handleClosePopup(){
        setShow(false);
      }
    
  return (
    <div className='popup-jobform'>
        <div className='popup-close-btn' onClick={handleClosePopup}>x</div>
        <form onSubmit={handleSubmit}>
      <label>{"Job Title"}<sup>*</sup>{":"}</label>
      <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} 
        placeholder='e.g. Blockchain Developer'
      required />

      <label>{"Location:"}</label>
      <input type="text" name="location" value={formData.location} onChange={handleChange} 
        placeholder='Job Location'
      />

      <label>{"Employment Type"}<sup>*</sup>{":"}</label>
      {["Full-time", "Part-time", "Intern"].map((type) => (
        <label key={type}>
          <input type="radio" name="employmentType" value={type} checked={formData.employmentType === type} onChange={handleChange} /> {type}
        </label>
      ))}

      <label>{"Experience Required"}<sup>*</sup>{":"}</label>
      <input type="number" name="minExperience" placeholder="Minimum" value={formData.minExperience} onChange={handleChange} required />
      <input type="number" name="preferredExperience" placeholder="Preferred" value={formData.preferredExperience} onChange={handleChange} />

      <label>{"Education Required:"}</label>
      <Select isMulti name="educationRequired" options={degrees} styles={darkThemeStyles} onChange={(selected) => handleMultiSelectChange(selected, "educationRequired")} />


      <label>{"Skills Required"}<sup>*</sup>{":"}</label>
      <Select isMulti name="skillsRequired" options={skills} styles={darkThemeStyles} onChange={(selected) => handleMultiSelectChange(selected, "skillsRequired")} />

      <label>{"Preferred Skills"}<sup>*</sup>{":"}</label>
      <Select isMulti name="preferredSkills" styles={darkThemeStyles} options={skills} onChange={(selected) => handleMultiSelectChange(selected, "preferredSkills")} />

      <label>{"Responsibilities and Description"}<sup>*</sup>{":"}</label>
      <textarea name="responsibilities" rows="10" value={formData.responsibilities} onChange={handleChange} 
        placeholder='minimum 30 words required'
      required />
      <br/>
      <button className='form-submit' type="submit">Submit</button>
    </form>
    
    </div>
  )
}

export default JDPopup
