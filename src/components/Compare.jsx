import React from "react";

const plans = [
  { name: "Free", current: true },
  { name: "Pro", upgrade: true },
  { name: "Business+", upgrade: true },
  { name: "Enterprise Grid", contact: true },
];

const features = [
  {
    category: "Productivity & Collaboration",
    items: [
      {
        name: "Message and file history",
        plans: {
          Free: "90-day access",
          Pro: true,
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Slack Support",
        plans: {
          Free: "One-on-one only",
          Pro: true,
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Audio and video clips",
        plans: {
          Free: true,
          Pro: true,
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Work with external partners",
        plans: {
          Free: "One-on-one only",
          Pro: true,
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Slack Conveses",
        plans: {
          Free: "Channels and DMs only",
          Pro: true,
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Custom templates",
        plans: {
          Free: "",
          Pro: "",
          BusinessPlus: "",
          EnterpriseGrid: true,
        },
      },
      {
        name: "Slack AI",
        plans: {
          Free: "",
          Pro: "",
          BusinessPlus: "",
          EnterpriseGrid: "Add-on",
        },
      },
    ],
  },
  {
    category: "Automation Tools",
    items: [
      {
        name: "Integrations with other tools",
        plans: {
          Free: "10",
          Pro: true,
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Slack Support",
        plans: {
          Free: "",
          Pro: true,
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Audio and video clips",
        plans: {
          Free: "",
          Pro: true,
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Work with external partners",
        plans: {
          Free: "",
          Pro: true,
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Slack Conveses",
        plans: {
          Free: "",
          Pro: true,
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Custom templates",
        plans: {
          Free: "",
          Pro: true,
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
    ],
  },
  {
    category: "Automation Tools",
    items: [
      {
        name: "Total published workflows or integrations with other apps",
        plans: {
          Free: "",
          Pro: "Unlimited",
          BusinessPlus: "Unlimited",
          EnterpriseGrid: "Unlimited",
        },
      },
      {
        name: "Standard Workflow",
        plans: {
          Free: "",
          Pro: true,
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Premium Workflow",
        plans: {
          Free: "",
          Pro: "1000 runs/month",
          BusinessPlus: "2000 runs/month",
          EnterpriseGrid: "5000 runs/month",
        },
      },
    ],
  },
  {
    category: "Security",
    items: [
      {
        name: "Data encryption at rest and in transit",
        plans: {
          Free: true,
          Pro: true,
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Two factor authentication",
        plans: {
          Free: true,
          Pro: true,
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "OAuth with Google",
        plans: {
          Free: "",
          Pro: true,
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "SAML-based SSO",
        plans: {
          Free: "",
          Pro: true,
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Slack Enterprise Key Management",
        plans: {
          Free: "",
          Pro: "",
          BusinessPlus: "",
          EnterpriseGrid: "Add-on",
        },
      },
      {
        name: "Integration with EMM providers",
        plans: {
          Free: "",
          Pro: true,
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
    ],
  },
  {
    category: "Administration",
    items: [
      {
        name: "User provisioning and deprovisioning",
        plans: {
          Free: "",
          Pro: "",
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Audit logs of user activity",
        plans: {
          Free: "",
          Pro: "",
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Custom message retention policies",
        plans: {
          Free: "",
          Pro: "",
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Custom user groups",
        plans: {
          Free: "",
          Pro: "",
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Custom user groups",
        plans: {
          Free: "",
          Pro: "",
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Custom user groups",
        plans: {
          Free: "",
          Pro: "",
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
    ],
  },
  {
    category: "Compliance",
    items: [
      {
        name: "Data loss prevention (DLP)",
        plans: {
          Free: "",
          Pro: "",
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "eDiscovery",
        plans: {
          Free: "",
          Pro: "",
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Legal hold for messages",
        plans: {
          Free: "",
          Pro: "",
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Audit logs of user activity",
        plans: {
          Free: "",
          Pro: "",
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
      {
        name: "Custom message retention policies",
        plans: {
          Free: "",
          Pro: "",
          BusinessPlus: true,
          EnterpriseGrid: true,
        },
      },
    ],
  },
  {
    category: "Support",
    items: [
      {
        name: "24/7 support with 4-hour response time",
        plans: {
          Free: "",
          Pro: "",
          BusinessPlus: "",
          EnterpriseGrid: true,
        },
      },
      {
        name: "Dedicated account and customer success teams",
        plans: {
          Free: "",
          Pro: "",
          BusinessPlus: "",
          EnterpriseGrid: true,
        },
      },
      {
        name: "Slack Enterprise Key Management",
        plans: {
          Free: "",
          Pro: "",
          BusinessPlus: "",
          EnterpriseGrid: "Add-on",
        },
      },
    ],
  },
];

const Compare = () => {
  return (
    <div className="mt-14 mx-auto px-5">
      <div className="text-center">
        <h1 className="mt-16 mb-3.5 px-5 text-4xl">
          Compare features across plans
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex justify-center max-w-6xl">
          <table className="table-auto text-center text-gray-900 w-full">
            <thead>
              <tr>
                <th className="px-4 py-6 "></th>
                {plans.map((plan, index) => (
                  <th key={index} className="px-2 py-6 font-bold bg-gray-100">
                    {plan.name}
                    <div className="mt-2">
                      {plan.current && (
                        <div className="text-gray-500 border border-gray-300 rounded-md px-2 py-2 inline-flex justify-center items-center">
                          Current Plan
                        </div>
                      )}
                      {plan.upgrade && (
                        <button className="bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-600">
                          Upgrade Now
                        </button>
                      )}
                      {plan.contact && (
                        <a
                          href="https://snapthetech.slack.com/contact-sales?geocode=en-in&from_plans=1&campaign=7013y000002UvizAAC"
                          target="_self"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline hover:text-blue-700"
                        >
                          Contact Sales
                        </a>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((featureCategory) => (
                <React.Fragment key={featureCategory.category}>
                  <tr>
                    <td
                      className="text-lg font-extrabold text-left py-2" // Reduced padding
                      colSpan={5}
                    >
                      {featureCategory.category}
                    </td>
                  </tr>
                  {featureCategory.items.map((item) => (
                    <tr key={item.name}>
                      <td className="text-left px-2 py-2">
                        {" "}
                        {/* Reduced padding */}
                        <span className="border-b-2 border-dotted border-black">
                          {item.name}
                        </span>
                      </td>
                      {["Free", "Pro", "BusinessPlus", "EnterpriseGrid"].map(
                        (plan) => {
                          return (
                            <td
                              className="px-2 py-2" // Reduced padding
                              key={`${item.name}-${plan}`}
                            >
                              {typeof item.plans[plan] === "boolean" ? (
                                item.plans[plan] ? (
                                  <img
                                    className="h-6 mx-auto"
                                    src="assets/checkmark.png"
                                    alt="Available"
                                  />
                                ) : (
                                  <img
                                    className="h-6 mx-auto"
                                    src="assets/crossmark.png"
                                    alt="Not Available"
                                  />
                                )
                              ) : (
                                <span>{item.plans[plan]}</span>
                              )}
                            </td>
                          );
                        }
                      )}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Compare;
