
// Load the JSON data
d3.json("https://static.bc-edx.com/data/dla-1-2/m14/lms/starter/samples.json").then(data => {
  const sample = data.samples[0]; // Use the first sample

  // Extract data for the bubble chart
  const otuIds = sample.otu_ids;
  const sampleValues = sample.sample_values;
  const otuLabels = sample.otu_labels;

  // Create the bubble chart
  const trace = {
    x: otuIds,
    y: sampleValues,
    text: otuLabels,
    mode: "markers",
    marker: {
      size: sampleValues,
      color: otuIds,
      colorscale: "Earth"
    }
  };

  const layout = {
    title: "Bubble Cultures Per Sample",
    xaxis: { title: "OTU ID" },
    yaxis: { title: "Number of Bacteria" },
    showlegend: false
  };

  Plotly.newPlot("bubble", [trace], layout);
});
