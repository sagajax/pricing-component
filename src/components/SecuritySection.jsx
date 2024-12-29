const SecuritySection = () => {
    const logos = [
      "https://a.slack-edge.com/bv1-12/logo_fedramp-9fda6d3.png",
      "https://a.slack-edge.com/bv1-12/logo_fedramp-9fda6d3.png",
      "https://a.slack-edge.com/bv1-12/logo_iso-27001-48c5cfb.png",
      "https://a.slack-edge.com/bv1-12/logo_iso-27001-48c5cfb.png",
      "https://a.slack-edge.com/bv1-12/logo_fedramp-9fda6d3.png",
      "https://a.slack-edge.com/bv1-12/logo_fedramp-9fda6d3.png",
      "https://a.slack-edge.com/bv1-12/logo_fedramp-9fda6d3.png",
    ];
  
    return (
      <section className="security py-32 px-5">
        <div className="security-container max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Techsnap leads the way in Enterprise security
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto mb-3">
            In addition to data encryption in transit and at rest, we operate
            comprehensive compliance and assurance
          </p>
          <a
            className="security-learn inline-block text-blue-600 hover:underline mb-16"
            href="#"
          >
            Learn how Slack keeps data secure
          </a>
          <div className="security-logos mt-16 flex justify-around gap-5 flex-wrap">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Security logo ${index + 1}`}
                className="w-12 h-12"
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SecuritySection;
  