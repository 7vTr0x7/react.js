import { useState } from "react";

const LanguageForm = () => {
  const [selectedLang, setSelectedLang] = useState([]);

  const handleLanguageCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedLang((prev) => [...prev, value]);
    } else {
      setSelectedLang((prev) => prev.filter((lang) => lang !== value));
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        value="Javascript"
        onChange={handleLanguageCheckbox}
      />
      Javascript
      <input
        type="checkbox"
        value="Typescript"
        onChange={handleLanguageCheckbox}
      />
      Typescript
      <input
        type="checkbox"
        value="Python"
        onChange={handleLanguageCheckbox}
      />{" "}
      Python
      <p>Selected Language: {selectedLang.join(", ")}</p>
    </div>
  );
};

export default LanguageForm;
