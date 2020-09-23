import React from 'react';
import './style.css';
import contacts from './contacts.json';

// console.log('hello im console log ', contacts.slice(0, 5));
const shortList = contacts.slice(0, 5);

class ContactList extends React.Component {
  state = {
    shortList,
  };

  render() {
    const { shortList } = this.state;
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {shortList.map((contact, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img className="picture" src={contact.pictureUrl} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default ContactList;
