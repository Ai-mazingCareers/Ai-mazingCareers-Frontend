export const handleApi= async ({data,pdfFile,setUpload,setResponse})=>{
        // jobTitle: "",
        // location: "",
        // employmentType: "Full-time",
        // minExperience: "",
        // preferredExperience: "",
        // educationRequired: [],
        // skillsRequired: [],
        // preferredSkills: [],
        // responsibilities: "",
    const dataToSend={
        "job_title": data.jobTitle,
        "location": data.location,
        "employment_type": data.employmentType,
        "experience_required": {
          "minimum_years": parseInt(data.minExperience),
          "preferred_years": parseInt(data.preferredExperience)
        },
        "education_required": data.educationRequired,
        "skills_required": data.skillsRequired,
        "skills_preferred": data.preferredSkills,
        "responsibilities": data.responsibilities    
    }
    console.log("Data>>>>>>>>>>>",dataToSend);
    try {
        const formData = new FormData();
        formData.append('resume', pdfFile);
        formData.append('job_desc', JSON.stringify(dataToSend)); 
        const response = await fetch('http://localhost:5000/api/check-ats-score', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            console.log('File uploaded successfully');
            const responseData = await response.json();
            console.log(responseData);
            setResponse(responseData);
            setUpload(true);
        } else {
            console.log('Failed to upload file');
        }
    } catch (error) {
        console.log('An error occurred while uploading');
    }
}