
// Load the JSON data
d3.json("https://static.bc-edx.com/data/dla-1-2/m14/lms/starter/samples.json").then(data => {
  const sample = data.samples[0]; // Use the first sample

  // Extract top 10 data
  const top10Values = sample.sample_values.slice(0, 10).reverse();
  const top10Ids = sample.otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();

  // Create the bar chart
  Plotly.newPlot("bar", [{
    x: top10Values,
    y: top10Ids,
    type: "bar",
    orientation: "h"
  }], { title: "Top 10 Bacteria Cultures Found" });
});
