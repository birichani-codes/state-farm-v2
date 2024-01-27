import React from "react";

const HexagonComponent = ({ children }) => {
  const containerStyle = {
    width: '80%', // Set the container width to 80% of its parent
    position: 'relative',
    margin: 'auto', // Center the container
  };

  const contentStyle = {
    width: '100%',
    position: 'relative',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    backgroundColor: '#EAD7BB',
    padding: '12%', // Increased padding to prevent video from touching the edges
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '2.5%', // Make the corners circular
  };

  // Media query for screens up to 768px wide
  const mediaQueryStyle = {
    '@media (max-width: 768px)': {
      // Adjust styles for smaller screens
      padding: '8%', // Decrease padding for smaller screens
    },
  };

  const lineStyle = {
    margin: '20px 0', // Adjust margin for spacing
    border: 'none',
    borderBottom: '1px solid #000', // Horizontal line style
  };

  const containerAfterLineStyle = {
    marginTop: '20px', // Adjust margin for spacing
    padding: '20px', // Adjust padding as needed
    border: '1px solid #000', // Add a border to the container
  };

  const containerAfterContentStyle = {
    width: '100%',
    position: 'relative',
    paddingTop: '20px', // Adjust top padding as needed
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Four columns, each taking 1/4 of the container width
    gap: '20px', // Gap between columns
  };

  const cardStyle = {
    border: '1px solid #000', // Border for the card
    borderRadius: '5px', // Optional: Add border radius for rounded corners
    overflow: 'hidden', // Optional: Hide content that overflows the card
    width: '100%', // Set the width of the card to 100%
    aspectRatio: '1/1', // Maintain aspect ratio (square)
    display: 'grid',
    gridTemplateRows: '1fr auto', // Two rows, first for image, second for text
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    gridRow: '1 / 2', // Image occupies the first row
  };

  const textBoxStyle = {
    padding: '10px', // Adjust padding for the text box
    textAlign: 'center', // Center the text within the box
    gridRow: '2 / 3', // Text box occupies the second row
  };

  return (
    <div style={containerStyle}>
      <div style={{ ...contentStyle, ...mediaQueryStyle }}>
        <video style={videoStyle} controls>
          <source src="https://youtu.be/xXVB8fhl0vA?si=7-A-ERm1rQl_NU85" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {children}
      </div>
      <hr style={lineStyle} />
      <div style={containerAfterLineStyle}>
        {/* Grid of cards */}
        <div style={containerAfterContentStyle}>
          {/* Card 1 */}
          <div style={cardStyle}>
            <img
              src="https://example.com/image1.jpg" // Replace with your image URL
              alt="Card 1"
              style={imageStyle}
            />
            <div style={textBoxStyle}>
              {/* Text Box for Card 1 */}
              Text for Card 1
            </div>
          </div>
          {/* Card 2 */}
          <div style={cardStyle}>
            <img
              src="https://example.com/image2.jpg" // Replace with your image URL
              alt="Card 2"
              style={imageStyle}
            />
            <div style={textBoxStyle}>
              {/* Text Box for Card 2 */}
              Text for Card 2
            </div>
          </div>
          {/* Card 3 */}
          <div style={cardStyle}>
            <img
              src="https://example.com/image3.jpg" // Replace with your image URL
              alt="Card 3"
              style={imageStyle}
            />
            <div style={textBoxStyle}>
              {/* Text Box for Card 3 */}
              Text for Card 3
            </div>
          </div>
          {/* Card 4 */}
          <div style={cardStyle}>
            <img
              src="https://example.com/image4.jpg" // Replace with your image URL
              alt="Card 4"
              style={imageStyle}
            />
            <div style={textBoxStyle}>
              {/* Text Box for Card 4 */}
              Text for Card 4
            </div>
          </div>
          {/* ... Add more cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default HexagonComponent;
