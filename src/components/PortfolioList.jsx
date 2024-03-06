import { useState } from 'react';
import PortfolioForm from './PortfolioForm';
import Portfolio from './Portfolio';

function PortfolioList() {
  const [portfolio, setPortfolio] = useState([]);

  // Function to add a bucket list item
  const addPortfolioItem = (item) => {
    console.log(
      'File: PortfolioList.js ~ line 10 ~ addPortfolioItem ~ item',
      item
    );
    // Check to see if the item text is empty
    if (!item.text) {
      return;
    }

    // Add the new bucket list item to the existing array of objects
    const newPortfolio = [item, ...portfolio];
    console.log(newPortfolio);

    // Call setBucket to update state with our new set of bucket list items
    setBucket(newPortfolio);
  };

  // Function to mark bucket list item as complete
  const completePortfoliotItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedPortfolio = portfolio.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedPortfolio);
    setBucket(updatedPortfolio);
  };

  // Function to remove bucket list item and update state
  const removePortfolioItem = (id) => {
    const updatedPortfolio = [...portfolio].filter((item) => item.id !== id);

    setBucket(updatedPortfolio);
  };

  // Function to edit the bucket list item
  const editPortfolioItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setPortfolio((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is on your portfolio list?</h1>
      <PortfolioForm onSubmit={addPortfolioItem} />
      <Bucket
        portfolio={portfolio}
        completePortfolioItem={completePortfolioItem}
        removePortfolioItem={removePortfolioItem}
        editPortfolioItem={editPortfolioItem}
      ></Portfolio>
    </div>
  );
}

export default PortfolioList;