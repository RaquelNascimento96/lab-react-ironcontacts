import React from 'react';
import './style.css';
import contacts from './contacts.json';

// console.log('hello im console log ', contacts.slice(0, 5));
const shortList = contacts.slice(0, 5);

// let random = contacts[Math.floor(Math.random() * contacts.length)];
// console.log('random', random);

class ContactList extends React.Component {
  state = {
    celebsList: shortList,
  };

  addRandomCeleb = () => {
    const randomCeleb = contacts[Math.floor(Math.random() * contacts.length)];

    const newList = this.state.celebsList;

    if (!newList.includes(randomCeleb)) {
      newList.push(randomCeleb);
    }
    this.setState((previousState) => ({
      celebsList: newList,
    }));
  };

  sortByName = () => {
    const newList = this.state.celebsList;

    newList.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });

    this.setState((previousState) => ({
      celebsList: newList,
    }));
  };

  sortByPopularity = () => {
    const newList = this.state.celebsList;

    newList.sort((a, b) => {
      return a.popularity > b.popularity ? 1 : -1;
    });

    this.setState((previousState) => ({
      celebsList: newList,
    }));
  };

  render() {
    return (
      <>
        <div className="buttons">
          <button onClick={this.addRandomCeleb}>Add Random</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>
                <h2>Picture</h2>
              </th>
              <th>
                <h2>Name</h2>
              </th>
              <th>
                <h2>Popularity</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            {shortList.map((contact, index) => {
              const roundPopularity = parseFloat(contact.popularity).toFixed(2);
              return (
                <tr key={index}>
                  <td>
                    <img className="picture" src={contact.pictureUrl} />
                  </td>
                  <td>
                    <b>{contact.name}</b>
                  </td>
                  <td>{roundPopularity}</td>
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
