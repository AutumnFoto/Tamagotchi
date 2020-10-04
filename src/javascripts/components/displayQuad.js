const displayQuad = () => {
  const domString = $('#pet').html(`
          <div class="image-container" id="pet">
          </div>   
   `);
  return domString;
};

export default { displayQuad };
