import React from 'react';

const FAQ = () => {
  return (
    <div className="faq-page-wrapper">
      <div className="faq-content-container">
        <h2 className="faq-main-heading">FAQ</h2>

        {/* First Question/Answer Block */}
        <div className="faq-question-block">
          <h3 className="faq-question-text">How will I learn?</h3>
          <p className="faq-answer-text">
            When you get access to the course, you will be able to see the **modules** within the course. Watch the videos whenever you get time and complete the **tests** for each module. The self-paced videos have been created by subject matter experts to ensure you learn from the best.
          </p>
          <hr className="faq-separator" />
        </div>

        {/* Second Question/Answer Block */}
        <div className="faq-question-block">
          <h3 className="faq-question-text">Will I get a certificate?</h3>
          <p className="faq-answer-text">
            Yes, when you complete all videos and tests in the course you will be **eligible for certification**. Your certificate will get unlocked. You can share the certificate with others on social media and add it to your profile.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;