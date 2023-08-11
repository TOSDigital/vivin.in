function changeTab(tabIndex) {
    // Hide all content divs
    var contentDivs = document.getElementsByClassName('content');
    for (var i = 0; i < contentDivs.length; i++) {
      contentDivs[i].style.display = 'none';
    }
  
    // Show the selected content div
    var selectedContent = document.getElementById('content' + tabIndex);
    selectedContent.style.display = 'block';
  }