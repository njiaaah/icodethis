document.addEventListener( 'DOMContentLoaded', function (){

    let messages = [
          {
            "id": "1",
            "name": "Alice",
            "messages": [
              {
                "time": "2024-05-13T08:30:00",
                "author": "Alice",
                "message": "Hey, how's it going?"
              },
              {
                "time": "2024-05-13T08:35:00",
                "author": "You",
                "message": "Hey Alice! I'm doing great, thanks. How about you?"
              },
              {
                "time": "2024-05-13T08:40:00",
                "author": "Alice",
                "message": "I'm good, just busy with work. Did you hear about the latest gossip in the office?"
              },
              {
                "time": "2024-05-13T08:45:00",
                "author": "You",
                "message": "Oh, gossip time! Do tell."
              },
              {
                "time": "2024-05-13T08:50:00",
                "author": "Alice",
                "message": "Well, you won't believe what happened with Karen and the coffee machine!"
              },
              {
                "time": "2024-05-13T08:55:00",
                "author": "You",
                "message": "Karen and the coffee machine? Sounds intriguing!"
              },
              {
                "time": "2024-05-13T09:00:00",
                "author": "Alice",
                "message": "I know, right? It's the talk of the town!"
              },
              {
                "time": "2024-05-13T09:05:00",
                "author": "You",
                "message": "Well, spill the beans already!"
              },
              {
                "time": "2024-05-13T09:10:00",
                "author": "Alice",
                "message": "Okay, here it goes..."
              },
              {
                "time": "2024-05-13T09:15:00",
                "author": "Alice",
                "message": "Oops! Gotta run, I'll tell you later! :). I made this massage somewhat very long just to test my shit"
              }
            ]
          },
          {
            "id": "2",
            "name": "Bob",
            "messages": [
              {
                "time": "2024-05-13T10:00:00",
                "author": "Bob",
                "message": "Hey, what's up?"
              },
              {
                "time": "2024-05-13T10:05:00",
                "author": "You",
                "message": "Hey Bob! Not much, just chilling. How about you?"
              },
              {
                "time": "2024-05-13T10:10:00",
                "author": "Bob",
                "message": "Same here. Did you catch the game last night?"
              },
              {
                "time": "2024-05-13T10:15:00",
                "author": "You",
                "message": "Yeah, it was intense! Can't believe they pulled off that comeback."
              },
              {
                "time": "2024-05-13T10:20:00",
                "author": "Bob",
                "message": "Right? I thought it was over for sure."
              },
              {
                "time": "2024-05-13T10:25:00",
                "author": "You",
                "message": "But then bam! They turned it around."
              },
              {
                "time": "2024-05-13T10:30:00",
                "author": "Bob",
                "message": "That's why I love sports, you never know what's gonna happen."
              },
              {
                "time": "2024-05-13T10:35:00",
                "author": "You",
                "message": "Exactly! It keeps you on the edge of your seat."
              },
              {
                "time": "2024-05-13T10:40:00",
                "author": "Bob",
                "message": "Anyway, gotta get back to work. Catch you later!"
              },
              {
                "time": "2024-05-13T10:45:00",
                "author": "You",
                "message": "Sure thing, talk to you soon!"
              }
            ]
          },
          {
            "id": "3",
            "name": "Charlie",
            "messages": [
              {
                "time": "2024-05-13T11:00:00",
                "author": "Charlie",
                "message": "Hey, how's your day going?"
              },
              {
                "time": "2024-05-13T11:05:00",
                "author": "You",
                "message": "Hey Charlie! It's been busy but good. How about yours?"
              },
              {
                "time": "2024-05-13T11:10:00",
                "author": "Charlie",
                "message": "Not bad. Just trying to survive this week."
              },
              {
                "time": "2024-05-13T11:15:00",
                "author": "You",
                "message": "I feel you. The struggle is real."
              },
              {
                "time": "2024-05-13T11:20:00",
                "author": "Charlie",
                "message": "Tell me about it. Anyway, did you hear about the new restaurant downtown?"
              },
              {
                "time": "2024-05-13T11:25:00",
                "author": "You",
                "message": "No, what's the scoop?"
              },
              {
                "time": "2024-05-13T11:30:00",
                "author": "Charlie",
                "message": "They serve the best tacos in town!"
              },
              {
                "time": "2024-05-13T11:35:00",
                "author": "You",
                "message": "Tacos, you say? Count me in!"
              },
              {
                "time": "2024-05-13T11:40:00",
                "author": "Charlie",
                "message": "Right? We should definitely check it out sometime."
              },
              {
                "time": "2024-05-13T11:45:00",
                "author": "You",
                "message": "Absolutely, let's make plans!"
              }
            ]
          },
          {
            "id": "4",
            "name": "David",
            "messages": [
              {
                "time": "2024-05-13T12:00:00",
                "author": "David",
                "message": "Hey, how are you doing today?"
              },
              {
                "time": "2024-05-13T12:05:00",
                "author": "You",
                "message": "Hey David! I'm doing well, thanks. How about you?"
              },
              {
                "time": "2024-05-13T12:10:00",
                "author": "David",
                "message": "Not too bad. Just another day in paradise."
              },
              {
                "time": "2024-05-13T12:15:00",
                "author": "You",
                "message": "Haha, I hear you. Anything exciting happening?"
              },
              {
                "time": "2024-05-13T12:20:00",
                "author": "David",
                "message": "Not really, just the usual grind."
              },
              {
                "time": "2024-05-13T12:25:00",
                "author": "You",
                "message": "Well, at least it's almost the weekend!"
              },
              {
                "time": "2024-05-13T12:30:00",
                "author": "David",
                "message": "True that! Got any fun plans?"
              },
              {
                "time": "2024-05-13T12:35:00",
                "author": "You",
                "message": "Not yet, but I'm sure something will come up."
              },
              {
                "time": "2024-05-13T12:40:00",
                "author": "David",
                "message": "Well, if not, we can always just binge-watch Netflix."
              },
              {
                "time": "2024-05-13T12:45:00",
                "author": "You",
                "message": "Sounds like a plan!"
              }
            ]
          },
          {
            "id": "5",
            "name": "Emma",
            "messages": [
              {
                "time": "2024-05-13T13:00:00",
                "author": "Emma",
                "message": "Hey there, how's everything?"
              },
              {
                "time": "2024-05-13T13:05:00",
                "author": "You",
                "message": "Hey Emma! Everything's going smoothly, thanks. What about you?"
              },
              {
                "time": "2024-05-13T13:10:00",
                "author": "Emma",
                "message": "Pretty good. Just enjoying some sunshine."
              },
              {
                "time": "2024-05-13T13:15:00",
                "author": "You",
                "message": "Nice! It's a beautiful day out."
              },
              {
                "time": "2024-05-13T13:20:00",
                "author": "Emma",
                "message": "Definitely. Hey, did you see that hilarious meme I sent you?"
              },
              {
                "time": "2024-05-13T13:25:00",
                "author": "You",
                "message": "Oh yeah, it cracked me up! Where do you find these things?"
              },
              {
                "time": "2024-05-13T13:30:00",
                "author": "Emma",
                "message": "It's a talent. Glad it brought a smile to your face!"
              },
              {
                "time": "2024-05-13T13:35:00",
                "author": "You",
                "message": "For sure, thanks for sharing!"
              },
              {
                "time": "2024-05-13T13:40:00",
                "author": "Emma",
                "message": "Anytime. Gotta keep the laughter going!"
              },
              {
                "time": "2024-05-13T13:45:00",
                "author": "You",
                "message": "Absolutely!"
              }
            ]
          },
          {
            "id": "6",
            "name": "Frank",
            "messages": [
              {
                "time": "2024-05-13T14:00:00",
                "author": "Frank",
                "message": "Hey, how's your day been?"
              },
              {
                "time": "2024-05-13T14:05:00",
                "author": "You",
                "message": "Hey Frank! It's been pretty good, thanks. How about yours?"
              },
              {
                "time": "2024-05-13T14:10:00",
                "author": "Frank",
                "message": "Not bad, just the usual grind."
              },
              {
                "time": "2024-05-13T14:15:00",
                "author": "You",
                "message": "I hear you. Anything exciting happening?"
              },
              {
                "time": "2024-05-13T14:20:00",
                "author": "Frank",
                "message": "Nah, just another day in the office."
              },
              {
                "time": "2024-05-13T14:25:00",
                "author": "You",
                "message": "Well, at least the weekend's almost here!"
              },
              {
                "time": "2024-05-13T14:30:00",
                "author": "Frank",
                "message": "True that! Got any fun plans?"
              },
              {
                "time": "2024-05-13T14:35:00",
                "author": "You",
                "message": "Not yet, but I'm sure something will come up."
              },
              {
                "time": "2024-05-13T14:40:00",
                "author": "Frank",
                "message": "Well, if not, we can always just grab a beer."
              },
              {
                "time": "2024-05-13T14:45:00",
                "author": "You",
                "message": "Sounds like a plan!"
              }
            ]
          },
          {
            "id": "7",
            "name": "Grace",
            "messages": [
              {
                "time": "2024-05-13T15:00:00",
                "author": "Grace",
                "message": "Hey, how are you doing today?"
              },
              {
                "time": "2024-05-13T15:05:00",
                "author": "You",
                "message": "Hey Grace! I'm doing well, thanks. How about you?"
              },
              {
                "time": "2024-05-13T15:10:00",
                "author": "Grace",
                "message": "Not too bad. Just trying to get through the day."
              },
              {
                "time": "2024-05-13T15:15:00",
                "author": "You",
                "message": "I feel you. Hang in there!"
              },
              {
                "time": "2024-05-13T15:20:00",
                "author": "Grace",
                "message": "Thanks! Hey, did you hear about the new cafe that opened up?"
              },
              {
                "time": "2024-05-13T15:25:00",
                "author": "You",
                "message": "No, what's it like?"
              },
              {
                "time": "2024-05-13T15:30:00",
                "author": "Grace",
                "message": "It's so cozy, and their pastries are to die for!"
              },
              {
                "time": "2024-05-13T15:35:00",
                "author": "You",
                "message": "Sounds amazing! We should check it out sometime."
              },
              {
                "time": "2024-05-13T15:40:00",
                "author": "Grace",
                "message": "Definitely! Let's make plans."
              },
              {
                "time": "2024-05-13T15:45:00",
                "author": "You",
                "message": "Absolutely, looking forward to it!"
              }
            ]
          }
        ]
      
      
    const contactsList = document.querySelector('.contacts__list');

    messages.forEach((person) => {
    const personElement = document.createElement('li');
    personElement.className = 'contacts__human';
    personElement.id = person.id;

    const avatarElement = document.createElement('img');
    avatarElement.src = `https://i.pravatar.cc/50?img=${person.id}`;
    avatarElement.alt = '';

    const nameElement = document.createElement('p');
    nameElement.textContent = person.name;
    nameElement.className = 'contacts__name';

    const lastMessageElement = document.createElement('p');
    lastMessageElement.textContent = person.messages[person.messages.length - 1].message;
    lastMessageElement.className = 'contacts__last-message';

    const timeElement = document.createElement('span');
    timeElement.textContent = person.messages[person.messages.length - 1].time.split('T')[1].slice(0, -3);
    timeElement.className = 'contacts__last-message-time';

    personElement.appendChild(avatarElement);
    personElement.appendChild(nameElement);
    personElement.appendChild(lastMessageElement);
    personElement.appendChild(timeElement);

    contactsList.appendChild(personElement);
    });

document.querySelectorAll('.contacts__human').forEach((element) => {
    element.addEventListener('click', openChat);
    console.log(element)
  });





  let chatIsOpen = false;

  function openChat(event) {
    const chatElement = document.querySelector('.chat');

    if (event.target.classList.contains('contacts__human')) {
        // If the clicked element is the '.contacts__human' itself
        chatId = event.target.id;
      } else {
        // If the clicked element is a child of '.contacts__human', find the closest ancestor with the class 'contacts__human'
        const closestContactsHuman = event.target.closest('.contacts__human');
        if (closestContactsHuman) {
            chatId = closestContactsHuman.id;
        }
      }

      console.log(chatId)
  }


    

})