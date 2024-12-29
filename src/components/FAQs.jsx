import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How does the 55% discount for teams in India work?",
      answer: `
        This offer is for Slack teams that are based in India and have
        most of their users located there. Teams that upgrade to or are
        already on the Pro or Business+ plan will get the discounted rate
        for at least one year, and can add new members at the lower rate
        during that time. If teams are eligible for or already have other
        discounts, we’ll apply only the largest single discount to their
        subscription. While we may offer discounted rates for longer than
        a year, Slack reserves the right to stop offering this promotion
        at any time after the initial one year subscription.
      `,
    },
    {
      question: "Can I upgrade Slack just for myself, instead of upgrading everyone in our workspace?",
      answer: `
        Unfortunately, no. Slack is built for teams, so you’ll get the
        most out of paid Slack when you all use it together. To upgrade
        Slack, you’ll need to upgrade your entire workspace at once.
      `,
    },
    {
      question: "What are my payment options? Can I pay by credit card? Can you invoice me?",
      answer: `
        You can use your credit card for any plan, and can now pay in
        Indian rupees (as well as other local currencies around the
        globe). If you sign up for an annual subscription and plan to
        spend at least $5,000 (USD), we can invoice you annually in select
        currencies (GBP, EUR, JPY or USD). Visit the help center or
        contact us to start the process.
      `,
    },
    {
      question: "Can I upgrade Slack just for myself, instead of upgrading everyone in our workspace?",
      answer: `
        Unfortunately, no. Slack is built for teams, so you’ll get the
        most out of paid Slack when you all use it together. To upgrade
        Slack, you’ll need to upgrade your entire workspace at once.
      `,
    },
    {
      question: "What are my payment options? Can I pay by credit card? Can you invoice me?",
      answer: `
        You can use your credit card for any plan, and can now pay in
        Indian rupees (as well as other local currencies around the
        globe). If you sign up for an annual subscription and plan to
        spend at least $5,000 (USD), we can invoice you annually in select
        currencies (GBP, EUR, JPY or USD). Visit the help center or
        contact us to start the process.
      `,
    },
  ];

  return (
    <section className=" py-20 px-5">
      <div className=" max-w-3xl mx-auto">
        <h1 className="text-center text-3xl font-bold mb-16">Frequently Asked Questions</h1>
        {faqItems.map((item, index) => (
          <div key={index} className=" border-b border-gray-300 py-8">
            <div
              className=" flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-xl font-normal">{item.question}</p>
              <img
                src={`assets/${activeIndex === index ? "minus" : "plus"}.png`}
                alt={activeIndex === index ? "Collapse" : "Expand"}
                className="w-4 h-4 "
              />
            </div>
            <div
              className={`faq-answer text-gray-600 overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <p className="mt-4">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
