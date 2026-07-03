import { useState } from "react";

import "./SurveyPage.css";

const SurveyPage = ({ onContinueShopping }) => {
  const [surveyForm, setSurveyForm] = useState({
    rating: "",
    easyToUse: "",
    favoritePart: "",
    suggestion: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setSurveyForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleSubmitSurvey = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="survey-page">
        <div className="survey-success-box">
          <p className="survey-eyebrow">Thank you</p>

          <h1>Your feedback means a lot ♡</h1>

          <p>
            Thank you for sharing your shopping experience with Chérie’s.
            Your feedback helps us make the website easier, smoother, and more
            enjoyable for every shopper.
          </p>

          <button type="button" onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="survey-page">
      <div className="survey-header">
        <p className="survey-eyebrow">Share your experience</p>

        <h1>How was your visit?</h1>

        <p>
          We would love to hear your thoughts. This short survey helps us
          improve the shopping experience at Chérie’s Clothing.
        </p>
      </div>

      <form className="survey-form" onSubmit={handleSubmitSurvey}>
        <div className="survey-form-section">
          <label>
            Overall, how would you rate your experience?
            <select
              name="rating"
              value={surveyForm.rating}
              onChange={handleInputChange}
              required
            >
              <option value="">Choose a rating</option>
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Very good</option>
              <option value="3">3 - Good</option>
              <option value="2">2 - Needs improvement</option>
              <option value="1">1 - Poor</option>
            </select>
          </label>

          <label>
            Was the website easy to use?
            <select
              name="easyToUse"
              value={surveyForm.easyToUse}
              onChange={handleInputChange}
              required
            >
              <option value="">Choose an answer</option>
              <option value="Yes, very easy">Yes, very easy</option>
              <option value="Mostly easy">Mostly easy</option>
              <option value="A little confusing">A little confusing</option>
              <option value="Difficult to use">Difficult to use</option>
            </select>
          </label>
        </div>

        <label>
          What did you like most?
          <input
            type="text"
            name="favoritePart"
            value={surveyForm.favoritePart}
            onChange={handleInputChange}
            placeholder="Example: the product layout, colors, checkout, filters..."
            required
          />
        </label>

        <label>
          Do you have any suggestions?
          <textarea
            name="suggestion"
            value={surveyForm.suggestion}
            onChange={handleInputChange}
            placeholder="Tell us what we can improve."
            rows="5"
            required
          />
        </label>

        <label>
          Email address, optional
          <input
            type="email"
            name="email"
            value={surveyForm.email}
            onChange={handleInputChange}
            placeholder="name@example.com"
          />
        </label>

        <button type="submit" className="survey-submit-btn">
          Submit Feedback
        </button>
      </form>
    </section>
  );
};

export default SurveyPage;