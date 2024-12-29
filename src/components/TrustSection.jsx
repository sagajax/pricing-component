const TrustSection = () => {
    const logos = [
      "https://a.slack-edge.com/bv1-12/airbnb-logo-4bc1cc0.png",
      "https://a.slack-edge.com/bv1-12/target-logo-66d368d.png",
      "https://a.slack-edge.com/bv1-12/ameritrade-logo-fff7720.png",
      "https://a.slack-edge.com/bv1-12/oracle-logo-859edc3.png",
      "https://a.slack-edge.com/bv1-12/electronic-arts-logo-500c189.png",
      "https://a.slack-edge.com/bv1-12/autodesk-logo-5a91dae.png",
    ];
  
    return (
      <section className="trust py-16 px-5">
        <div className="trust-container max-w-5xl mx-auto text-center">
          <h1 className="text-4xl  text-gray-900 leading-9 max-w-3xl mx-auto mb-10">
            Thousands of customers use Slack as their productivity platform
          </h1>
          <div className="trust-logos flex justify-around gap-10 flex-wrap mb-12">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Customer logo ${index + 1}`}
                className="h-auto"
              />
            ))}
          </div>
          <div className="mb-10">
            <a
              href="#"
              className="text-blue-600 hover:underline text-lg font-medium"
            >
              Hear what our customers have to say
            </a>
          </div>
          <a
            href="#top"
            className="backtotop-btn bg-gray-200 text-black py-3 px-12 rounded-lg font-semibold text-lg mb-12 inline-block"
          >
            Back to top
          </a>
          <p className="more-question text-lg">
            More questions? Let us help.{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </section>
    );
  };
  
  export default TrustSection;
  