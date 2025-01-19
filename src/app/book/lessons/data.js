// Initial article2020 object
const article2020 = {
    definition: ["Definition", "A placeholder object to demonstrate CRUD operations in JavaScript."],
    example: {
      question: "",
      options: ["one", "two", "three", "four"],
      solution: "Examples help understand the concepts more clearly."
    },
    alert: "Alert ;Examples help understand the concepts more clearly.",
    benefit: "Benefit ;Examples help understand the concepts more clearly.",
    topicTitle: "Topic Title ",
    lessonTitle: "Lesson Title",
    unitTitle: "Unit Title"
  };
  
  // 1. **Create** operation - Add a new property to article2020 and store it
  function createProperty(key, value) {
    const article = JSON.parse(localStorage.getItem('article2020')) || {};
    article[key] = value;
    localStorage.setItem('article2020', JSON.stringify(article));
    console.log(`Property '${key}' created:`, article);
  }
  
  // 2. **Read** operation - Retrieve the article2020 from localStorage
  function readArticle() {
    const article = JSON.parse(localStorage.getItem('article2020'));
    console.log('Retrieved article2020:', article);
    return article;
  }
  
  // 3. **Update** operation - Update a specific property of the article2020
  function updateProperty(key, newValue) {
    const article = JSON.parse(localStorage.getItem('article2020')) || {};
    if (article.hasOwnProperty(key)) {
      article[key] = newValue;
      localStorage.setItem('article2020', JSON.stringify(article));
      console.log(`Property '${key}' updated to:`, newValue);
    } else {
      console.log(`Property '${key}' does not exist.`);
    }
  }
  
  // 4. **Delete** operation - Remove a property from article2020 and update localStorage
  function deleteProperty(key) {
    const article = JSON.parse(localStorage.getItem('article2020')) || {};
    if (article.hasOwnProperty(key)) {
      delete article[key];
      localStorage.setItem('article2020', JSON.stringify(article));
      console.log(`Property '${key}' deleted.`);
    } else {
      console.log(`Property '${key}' does not exist.`);
    }
  }
  
  // Example Usage
  
  // Storing initial object in localStorage
  localStorage.setItem('article2020', JSON.stringify(article2020));
  
  // Create a new property
  createProperty('newProperty', 'This is a new property value');
  
  // Read and display the object
  readArticle();
  
  // Update an existing property
  updateProperty('topicTitle', 'Updated Topic Title');
  
  // Delete a property
  deleteProperty('benefit');
  
  // Read again after modifications
  readArticle();
  