import React from 'react';

const displayName = (event) => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: 'test grinning face',
  },
  {
    emoji: '🎉',
    name: 'party popper',
  },
  {
    emoji: '💃',
    name: 'woman dancing',
  },
];
const studentNames = ['Fist person', 'Second Person', 'Third Person'];

export default function Jsxextension() {
  const greeting = 'greetings';
  const displayAction = true;
  return (
    <div class="container">
      <p id={greeting}>How To Create React Elements with JSX</p>
      {displayAction && <p>I am writing JSX</p>}
      {displayAction ? 'Hello World!sshh' : 'False!'}
      <p>Mapping Over Data to Create Elements</p>
      <ul>
        {emojis.map((emoji) => (
          <li key={emoji.name}>
            <button onClick={displayName}>
              <span role="img" arial-label={emoji.name} id={emoji.name}>
                {emoji.emoji}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <span>{studentNames}</span>

      <div>
        {studentNames.map((studentName) => (
          <div key={studentName}>{studentName}</div>
        ))}
      </div>

      <p>Adding Events to Elements</p>
      <ul>
        <li>
          <button onClick={(event) => alert(event.target.id)}>
            <span role="img" aria-label="grinning face" id="grinning facesss">
              😀
            </span>
          </button>
        </li>
        <li>
          <button onClick={(event) => alert(event.target.id)}>
            <span role="img" aria-label="party popper" id="party poppersss">
              🎉
            </span>
          </button>
        </li>
        <li>
          <button onClick={(event) => alert(event.target.id)}>
            <span role="img" aria-label="woman dancing" id="woman dancingss">
              💃
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}
