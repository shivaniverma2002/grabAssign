import React, { useState, useEffect } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Navigation from "./components/Navigation";
import { motion } from "framer-motion";

const App = () => {
  // Step tracking
  const [step, setStep] = useState(1);

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  // Validation errors
  const [errors, setErrors] = useState({});

  // Confirmation checkbox state
  const [agree, setAgree] = useState(false);

  // Load saved form data on mount
  useEffect(() => {
    const saved = localStorage.getItem("formData");
    if (saved) {
      setFormData(JSON.parse(saved));
      console.log("// DEBUG: Loaded formData from localStorage");
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Handle form input changes
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Validate fields based on current step
  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
        newErrors.email = "Invalid email";
      if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    } else if (step === 2) {
      if (!formData.address1.trim())
        newErrors.address1 = "Address Line 1 is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.state.trim()) newErrors.state = "State is required";
      if (!formData.zip.trim()) newErrors.zip = "ZIP code is required";
    }

    setErrors(newErrors);
    console.log("// DEBUG: Validation Errors →", newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Proceed to next step
  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
      console.log("// DEBUG: Moved to Step", step + 1);
    }
  };

  // Go back to previous step
  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
      console.log("// DEBUG: Moved back to Step", step - 1);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!agree) {
      alert("Please confirm all details are correct before submitting.");
      return;
    }

    // TODO: Add API integration here
    console.log("// SUBMITTING FINAL DATA:", formData);
    alert("✅ Form submitted successfully!");

    // Reset all states
    localStorage.removeItem("formData");
    setFormData({
      name: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
    });
    setStep(1);
    setAgree(false);
  };

  // NOTE: Progress bar calculation
  const progressPercent = step === 1 ? 33 : step === 2 ? 66 : 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-800 via-purple-700 to-blue-600 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 md:p-10"
      >
        {/* Navigation Header */}
        <Navigation step={step} />

        {/* Progress bar */}
        <div className="w-full bg-white/20 h-2 rounded overflow-hidden mb-4">
          <div
            className="h-full bg-green-400 transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Step Components */}
        {step === 1 && (
          <Step1
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        )}

        {step === 2 && (
          <Step2
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        )}

        {step === 3 && (
          <>
            <Step3 formData={formData} />
            <div className="form-check mt-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="agreeCheck"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />
              <label className="form-check-label" htmlFor="agreeCheck">
                All details are correct
              </label>
            </div>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="d-flex justify-content-between mt-4">
          <button
            className="btn btn-outline-light"
            onClick={prevStep}
            disabled={step === 1}
          >
            Back
          </button>

          {step < 3 ? (
            <button className="btn btn-light" onClick={nextStep}>
              Next
            </button>
          ) : (
            <button className="btn btn-success" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default App;
