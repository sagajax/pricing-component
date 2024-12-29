import React from "react";

const Plan = () => {
  return (
    <section className="py-12 px-5 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-5 justify-between lg:flex-nowrap">
        {/* Price Item - Pro */}
        <div className="w-full max-w-[31%] bg-white rounded-lg overflow-hidden shadow-lg lg:w-auto">
          <div className="bg-fuchsia-950 text-white p-8 flex justify-between gap-5 min-h-[220px]">
            <div>
              <h2 className="text-2xl font-bold">Pro</h2>
              <p className="text-sm">
                More power for small teams who want better collaboration
              </p>
            </div>
            <img
              src="https://img.freepik.com/free-vector/business-man-dealing-multi-task-new-idea-working-laptop-concept-business-goals-success-satisfying-achievement_1150-39765.jpg?w=740&t=st=1710862050~exp=1710862650~hmac=5379ecc44469b46971e78ef6c11c62d107cf7ebf9b38501b93ed2fc9e7367b92"
              alt=""
              className="w-24 h-24 object-cover rounded-lg"
            />
          </div>
          <div className="p-8 bg-white">
            <h2 className="text-green-600 text-xl font-bold">₹245.25</h2>
            <p className="text-sm text-gray-500 mb-16">
              per person/month, when billed yearly ₹655 ₹294.75 per person/month
              when billed monthly
            </p>
            <h4 className="font-semibold text-base mb-2">
              All the benefits of Free, and:
            </h4>
            <ul className="mb-16 space-y-2">
              {[
                "Unlimited message history",
                "Unlimited lightweight voice hurdles",
                "Secure work with other companies using Slack Connect channels",
                "Unlimited canvases with 30 days of version history and advanced user roles",
                "Unlimited apps and workflows",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <img src="assets/checkmark.png" alt="" className="w-5 h-5" />
                  <p className="text-sm">{feature}</p>
                </li>
              ))}
            </ul>
            <div className="bg-green-600 text-white text-center py-3 rounded-md text-lg font-semibold">
              Upgrade Now
            </div>
          </div>
        </div>

        <div className="w-full max-w-[31%] bg-white rounded-lg overflow-hidden shadow-lg lg:w-auto">
          <div className="bg-[#0b4c8c] text-white p-8 flex justify-between gap-5 min-h-[220px]">
            <div>
              <h2 className="text-2xl font-bold">Buisness+</h2>
              <p className="text-sm">
                More power for small teams who want better collaboration
              </p>
            </div>
            <img
             src="https://img.freepik.com/free-vector/flat-design-finance-leaders-concept_23-2149154574.jpg?t=st=1710862050~exp=1710862650~hmac=7b3b97d918de0526a5616e2e366fb22cde1420b0b3ff0248db9b7bd87cd9e49a"
              alt=""
              className="w-24 h-24 object-cover rounded-lg"
            />
          </div>
          <div className="p-8 bg-white">
            <h2 className="text-green-600 text-xl font-bold">₹245.25</h2>
            <p className="text-sm text-gray-500 mb-16">
              per person/month, when billed yearly ₹655 ₹294.75 per person/month
              when billed monthly
            </p>
            <h4 className="font-semibold text-base mb-2">
              All the benefits of Free, and:
            </h4>
            <ul className="mb-16 space-y-2">
              {[
                "Unlimited message history",
                "Unlimited lightweight voice hurdles",
                "Secure work with other companies using Slack Connect channels",
                "Unlimited canvases with 30 days of version history and advanced user roles",
                "Unlimited apps and workflows",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <img src="assets/checkmark.png" alt="" className="w-5 h-5" />
                  <p className="text-sm">{feature}</p>
                </li>
              ))}
            </ul>
            <div className="bg-green-600 text-white text-center py-3 rounded-md text-lg font-semibold">
              Upgrade Now
            </div>
          </div>
        </div>

        <div className="w-full max-w-[31%] bg-white rounded-lg overflow-hidden shadow-lg lg:w-auto">
          <div className="bg-[#072542] text-white p-8 flex justify-between gap-5 min-h-[220px]">
            <div>
              <h2 className="text-2xl font-bold">Enterprise Grid</h2>
              <p className="text-sm">
                More power for small teams who want better collaboration
              </p>
            </div>
            <img
              src="https://img.freepik.com/free-vector/steal-data-concept_23-2148540050.jpg?size=626&ext=jpg"
              alt=""
              className="w-24 h-24 object-cover rounded-lg"
            />
          </div>
          <div className="p-8 bg-white">
            <h2 className="text-green-600 text-xl font-bold">₹245.25</h2>
            <p className="text-sm text-gray-500 mb-16">
              per person/month, when billed yearly ₹655 ₹294.75 per person/month
              when billed monthly
            </p>
            <h4 className="font-semibold text-base mb-2">
              All the benefits of Free, and:
            </h4>
            <ul className="mb-16 space-y-2">
              {[
                "Unlimited message history",
                "Unlimited lightweight voice hurdles",
                "Secure work with other companies using Slack Connect channels",
                "Unlimited canvases with 30 days of version history and advanced user roles",
                "Unlimited apps and workflows",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <img src="assets/checkmark.png" alt="" className="w-5 h-5" />
                  <p className="text-sm">{feature}</p>
                </li>
              ))}
            </ul>
            <div className="bg-green-600 text-white text-center py-3 rounded-md text-lg font-semibold">
              Upgrade Now
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
