const trelloSearch =  fetch('https://api.trello.com/1/members/me/boards?key=20d29d4900cb3e58f684d4cd963473ef&token=a185fdb894bb350b5991f2a7f1fab5dc09cf2547229d1a82714276035b849347')
.then(res => res.json())
.then(data => console.log(data))


console.log(trelloSearch);
