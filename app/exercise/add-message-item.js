export default function addMessageItem(list, data) {
  // list = <ul></ul>
  // Create a new list item
  const listItem = document.createElement('li');
  // <li></li>

  listItem.innerHTML = `<span class="message-item__username">${data.username}</span> ${data.message}`;
  // <li><span class="message-item__username">Ryan</span> Do Your Homework</li>

  // Put the new list item inside the provided list
  list.append(listItem)
  // first time...
  // <ul><li><span class="message-item__username">Ryan</span> Do Your Homework</li></ul>
  // second time...
  // <ul>
  //  <li><span class="message-item__username">Ryan</span> Do Your Homework</li>
  //  <li><span class="message-item__username">Josh</span> blah blah</li>
  // </ul>

  // Return the list, just in case
  return list;
}
