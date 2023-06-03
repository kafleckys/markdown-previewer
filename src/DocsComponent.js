const DocsComponent = (props) => {
  const headingStyle = {
    color: "black",
    fontSize: "24px",
    fontWeight: "bold",
  };
  

  const { data } = props;
  console.log(data);
  return (
    <div>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <h2 style={headingStyle}>{item.name}</h2>
            <p>{item.description}</p>
            <div >
              {item.examples.map((example, index1) => (
                <div key={index1} className="example">
                  <h4>Markdown:</h4>
                  <p>{example.markdown}</p>
                  <h4>HTML:</h4>
                  <p>{example.html}</p>
                </div>
              ))}
            </div>
            <div className="">
              {item.additional_examples.map((additional, index2) => (
                <div key={index2} className="additional_example">
                <h4>NAME:</h4>
                  <p>{additional.name}</p>
                  <h4>DESCRIPTION:</h4>
                  <p>{additional.description}</p>
                  <h4>Markdown:</h4>
                  <p>{additional.markdown}</p>
                  <h4>HTML:</h4>
                  <p>{additional.html}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocsComponent;
