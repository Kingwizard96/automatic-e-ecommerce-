// getAllPosts.js
const fetchAllPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      if (response.ok) {
        const postData = await response.json();
        
        // Handlebars template compilation
        const source = document.querySelector('#posts-template').innerHTML;
        const template = Handlebars.compile(source);
        const html = template({ posts: postData });
        
        // Render the data on the page
        document.querySelector('#posts-container').innerHTML = html;
      } else {
        console.error('An error occurred while fetching posts:', error);
      }
    } catch (error) {

      console.error(error);
    }
  };
  
const fetchPostById = async () => {
    const url = window.location.href; 
    const postId = url.substr(url.lastIndexOf('/') + 1); 
  
    try {
      const response = await fetch(`/api/posts/${postId}`);
      if (response.ok) {
        const postData = await response.json();
        
        // Handlebars template compilation
        const source = document.querySelector('#post-template').innerHTML;
        const template = Handlebars.compile(source);
        const html = template(postData);
        
        // Render the post on the page
        document.querySelector('#post-container').innerHTML = html;
      } else {
        console.error('An error occurred while fetching posts:', error);
      }
    } catch (error) {
      // Handle exceptions
      console.error(error);
    }
  };
  

  fetchPostById();
  fetchAllPosts();