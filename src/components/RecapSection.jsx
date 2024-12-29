import React from 'react';

const RecapSection = () => {
  return (
    <section className="py-12 px-5">
      <div className="max-w-6xl mx-auto rounded-3xl bg-[#EEE4D5] p-5 flex flex-col md:flex-row justify-between gap-5">
        {/* Row 1 */}
        <div className="p-6 py-8 px-4 flex-1">
          <h1 className="text-2xl font-bold">Work smarter with Slack AI</h1>
          <p className="mt-2 text-gray-700">
            Empower everyone with trusted AI, where work already happens.
          </p>
          <ul className="mt-4 mb-8 space-y-5">
            <li className="flex items-center gap-2 text-sm">
              <img src="assets/checklist.png" alt="" className="w-4 h-4" />
              <p>
                <span className="font-semibold">Channel recaps:</span> get key
                highlights in any channel and cut straight to what’s most
                important
              </p>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <img src="assets/checklist.png" alt="" className="w-4 h-4" />
              <p>
                <span className="font-semibold">Summarize long threads:</span>{' '}
                quickly catch up on long conversations in one click
              </p>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <img src="assets/checklist.png" alt="" className="w-4 h-4" />
              <p>
                <span className="font-semibold">AI-powered search:</span> ask a
                question and get clear, concise answers in real-time
              </p>
            </li>
          </ul>
          <button className="bg-green-600 text-white py-2 px-4 rounded-md">
            Contact Sales
          </button>
        </div>
        {/* Row 2 */}
        <div className="max-w-sm flex-1">
          <img
            src="https://img.freepik.com/free-vector/financial-insurance-guarantees-protection-your-money-gold_1150-52744.jpg?w=740&t=st=1710864925~exp=1710865525~hmac=b9febffe66b32f62fedb570de947a78dcd3302abc502ad95a1abeebe00fa0ba5"
            alt="Illustration"
            className="w-full mix-blend-multiply rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default RecapSection;
