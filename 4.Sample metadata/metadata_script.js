
// Load the JSON data
d3.json("https://static.bc-edx.com/data/dla-1-2/m14/lms/starter/samples.json").then(data => {
  const metadata = data.metadata[0]; // Use the metadata for the first sample

  // Select the metadata panel
  const metadataPanel = d3.select("#sample-metadata");

  // Loop through each key-value pair and append it as a new HTML element
  Object.entries(metadata).forEach(([key, value]) => {
    metadataPanel.append("p").text(`${key}: ${value}`);
  });
});
